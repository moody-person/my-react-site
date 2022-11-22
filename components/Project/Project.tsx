import { IconBrandGithub, IconBrandGitlab } from '@tabler/icons';
import React, { FC, ReactNode } from 'react';
import { RepoName, RepoStructure } from '../../features/projects.types';
import { MyImage } from '../MyImage/MyImage';
import { LinkTheme, MyLink } from '../MyLink/MyLink';

import style from './Project.module.css';

type GitHostingIconProps = {
    name: RepoName;
    link: string;
    projectName: string;
};

// TODO move to component, make more generic
const GitHostingIcon: FC<GitHostingIconProps> = ({
    name,
    link,
    projectName,
}) => {
    let icon: ReactNode = '';
    if (name === RepoName.GITLAB) {
        icon = <IconBrandGitlab color="currentColor" size={22} />;
    } else if (name === RepoName.GITHUB) {
        icon = <IconBrandGithub color="currentColor" size={22} />;
    }
    return (
        <MyLink href={link} aria-label={projectName} theme={LinkTheme.ICON}>
            {icon}
        </MyLink>
    );
};

type ProjectProps = {
    project: RepoStructure;
};

export const Project: FC<ProjectProps> = ({ project }: ProjectProps) => {
    return (
        <div className={style.Project}>
            <div className={style.ProjectImage}>
                <MyImage
                    height={project.image?.height ?? 500}
                    width={project.image?.width ?? 500}
                    src={project.image?.src ?? 'https://via.placeholder.com/700x700.png'}
                    alt={project.description}
                />
            </div>
            <div className={style.ProjectMeta}>
                <h3 className={style.ProjectTitle}>{project.title}</h3>
                <div className={style.ProjectDescription}>
                    {project.description}
                </div>
                <div className={style.ProjectRepo}>
                    <GitHostingIcon
                        name={project.repo.name}
                        link={project.repo.link}
                        projectName={project.title}
                    />
                </div>
            </div>
        </div>
    );
};
