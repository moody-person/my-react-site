import { HttpRequestBuilder, isOk } from '@asleeppiano/http-client';
import fs from 'fs';
import path from 'path';
import { MyImageType } from '../components/MyImage/MyImage';
import { githubApiClient, GITHUB_API_URL } from './api';

export type Project = {
    name: string;
    host: string;
    link: string;
    image?: MyImageType;
};

export type Cacheable = {
    endDate: string;
};

export type GithubRepo = {
    id: number;
    name: string;
    description: string;
    forks: number;
    stargazers_count: number;
    url: string;
    html_url: string;
    languages_url: string;
    languages?: Array<string>; // use it for downloaded lanugages
    lastDateFetched?: number;
};

export type GithubProject = GithubRepo & Project;

export type CachedProject = { project: GithubProject[] } & Cacheable;

export type Tech = {
    name: string;
    url?: string;
};

export type RepoStructure = {
    id: number;
    title: string;
    link: string;
    image?: MyImageType;
    techList: Array<Tech>;
    description: string;
    forks: number;
    stars: number;
    repo: {
        link: string;
        name: string;
    };
};

export type ProjectsState = {
    projects: Array<RepoStructure> | null;
    error: Error | null;
};

const projectsList: Project[] = [
    {
        name: 'origin-hugo-theme',
        host: 'github',
        link: 'https://asleeppiano.gitlab.io/origin-hugo-site',
        image: {
            src: '/static/images/origin-hugo-theme/origin-hugo-theme.png',
            width: 500,
            height: 500,
            alt: 'origin hugo',
        },
    },
    {
        name: '11ty-starter',
        host: 'github',
        link: 'https://moody-person.github.io/11ty-starter',
        image: {
            src: '/static/images/11ty-starter/11ty-starter.png',
            width: 500,
            height: 500,
            alt: '11ty starter',
        },
    },
    {
        name: 'http-client',
        host: 'github',
        link: 'https://www.npmjs.com/package/@asleeppiano/http-client',
        image: {
            src: '/static/images/http-client/http-client-image.png',
            width: 500,
            height: 500,
            alt: 'http client image',
        },
    },
];

function isGithubRepoAndProject(
    repo: GithubProject | unknown
): repo is GithubProject {
    return (repo as GithubRepo).stargazers_count !== undefined;
}

function notNull<T>(val: T | null): val is T {
    return val !== null;
}

function createTech(languages: any): Array<Tech> {
    return Object.keys(languages).map((lang) => ({
        name: lang.toLowerCase(),
    }));
}

function adaptGithubRepo(repo: GithubRepo & Project) {
    return {
        id: repo.id,
        title: repo.name,
        techList: createTech(repo.languages),
        description: repo.description,
        forks: repo.forks,
        stars: repo.stargazers_count,
        link: repo.link,
        image: repo.image,

        repo: {
            link: repo.html_url,
            name: 'github',
        },
    };
}

function adaptToRepoStructure(
    repos: Array<GithubProject> | null
): Array<RepoStructure> {
    if (repos) {
        return repos.map((repo) => {
            if (isGithubRepoAndProject(repo)) {
                return adaptGithubRepo(repo);
            }
            return repo;
        });
    }
    return [];
}

export async function fetchGithubProjects(): Promise<Array<RepoStructure>> {
    const request = new HttpRequestBuilder()
        .url(`${GITHUB_API_URL}/users/moody-person/repos`)
        .get()
        .build();
    const repos = await githubApiClient.send<GithubRepo[]>(request);

    if (isOk(repos)) {
        const filteredRepos: Array<GithubProject> = repos.result.data
            .filter((repo) =>
                projectsList.some(
                    (project) =>
                        repo.name === project.name && project.host === 'github'
                )
            )
            .map((repo) => {
                const currProject = projectsList.find(
                    (project) =>
                        project.name === repo.name && project.host === 'github'
                );
                if (currProject) {
                    return { ...repo, ...currProject };
                }
                return null;
            })
            .filter(notNull);

        const langPromises = [];
        for (let repo of filteredRepos) {
            const langRequest = new HttpRequestBuilder()
                .url(repo.languages_url)
                .get()
                .build();
            const langPromise = githubApiClient.send<string[]>(langRequest);
            langPromises.push(langPromise);
        }

        const languages = await Promise.all(langPromises);
        const langs = languages.map((l) => (isOk(l) ? l.result.data : []));
        const res = filteredRepos.map((repo, i) => ({
            ...repo,
            // FIXME: fix type inference
            languages: langs[i],
        }));
        return adaptToRepoStructure(res);
    }

    return [];
}

function parseDuration(duration: string): number {
    let num = '';
    let time = '';
    duration.split('').forEach((char) => {
        if (!Number.isNaN(Number(char))) {
            num += char;
        } else {
            time = char;
        }
    });

    if (time === 'h') {
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + Number(num));
        return endTime.getTime();
    } else if (time === 'w') {
        const endTime = new Date();
        endTime.setDate(endTime.getDate() + Number(num) * 7);
        return endTime.getTime();
    }
    return 0;
}

const cacheDir = path.resolve(__dirname, '../_cache');
const cacheDest = path.resolve(cacheDir, 'projects.json');

export async function getProjectsData(): Promise<
    Array<RepoStructure> | undefined
> {
    try {
        if (fs.existsSync(cacheDest)) {
            const file = fs.readFileSync(cacheDest, 'utf-8');
            const cachedProjects = JSON.parse(file);
            const cacheEndDate = Number(cachedProjects.endDate);
            if (cacheEndDate > Date.now()) {
                return cachedProjects.projects;
            }
        } else if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir);
        }
        const githubProjects = await fetchGithubProjects();
        const cachedProject = {
            projects: githubProjects,
            endDate: parseDuration('1w'),
        };

        fs.writeFileSync(cacheDest, JSON.stringify(cachedProject));
        return githubProjects;
    } catch (e) {
        console.error('Cannot get projects: ', e);
    }
}
