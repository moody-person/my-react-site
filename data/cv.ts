// write cv generator

import { UserLink } from "./about";

export const cvI18N = {
    ru: {
        name: 'Андрей Парфенов',
        profession: 'Разработчик интерфейсов',
        programmingLanguages: 'Языки программирования',
        frameworks: 'Фреймворки',
        restSection: 'Остальное',
        usingAtCurrentJob: 'использую на текущей работе',
        skills: 'Навыки',
        jobExperience: 'Опыт работы',
        education: 'Образование',
        currentTime: 'текущее время',
        noResume: 'Резюме нет',
        jobVK: {
            text: 'Делаю ленту и раздел друзей',
            text2: 'Рендеринг на kphp и на react',
        },
        jobKoshelek: {
            text: 'Разработка vue компонентов',
            text2: 'Работа с ssr, микросервисной архитектурой, webpack module federation',
            text3: 'Написание unit/e2e тестов для vue компонентов',
            text4: 'Сделал новый раздел на сайте, редактор статей, сервис авторизации',
        },
        jobRozario: {
            text: 'Разработка компонентов на svelte',
            text2: 'Написание тестов unit/e2e',
            text3: 'Разработал почти все компоненты',
            text4: 'Валидация форм',
        },
        jobFreelance: {
            text: 'разработал блог для интернет магазина (react)',
            text2: 'верстка html/css, скрипты на js, react.',
        },
        jobSeventest: {
            text: 'разрботка системы мониторинга сетей на с++'
        },
        university: 'СПБГУТ',
        faculty: 'ИКСС',
        program: 'Программная инженерия',
    },
};

export type Contact = UserLink;

export type Tech = {
    name: string;
    classList: string;
    desc?: string;
}

export type Skill = {
    sectionLang: string;
    tech?: Tech[];
    list?: string[],
}

export type Job = {
    company: string;
    class: string;
    start: Date,
    end?: Date,
    description: Array<Record<string, string>>;
}

export type Education = {
    universityLang: string,
    class: string,
    image: string,
    start: Date,
    end: Date,
    facultyLang: string,
    programLang: string,
}

export type CV = {
    contacts: Contact[],
    skills: Skill[],
    jobs: Job[],
    educationList: Education[],
    link: string;
}


export const cvData: CV = {
    contacts: [
        {
            icon: 'brand-telegram',
            url: 'https://t.me/rawkangaroo',
            text: 'telegram',
        },
        {
            icon: 'at',
            url: 'mailto:asleeppiano@outlook.com',
            text: 'asleeppiano@outlook.com',
        },
    ],
    skills: [
        {
            sectionLang: 'cv.programmingLanguages',
            tech: [
                { name: 'php', classList: 'c-lang--php' },
                { name: 'javascript', classList: 'c-lang--js' },
                { name: 'typescript', classList: 'c-lang--ts' },
                { name: 'html', classList: 'c-lang--html' },
                { name: 'css', classList: 'c-lang--css' },
            ],
        },
        {
            sectionLang: 'cv.frameworks',
            tech: [
                { name: 'vue', classList: 'c-lang--vue' },
                { name: 'svelte', classList: 'c-lang--svelte' },
                {
                    name: 'react',
                    classList: 'c-lang--react',
                    desc: 'cv.usingAtCurrentJob',
                },
            ],
        },
        {
            sectionLang: 'cv.restSection',
            list: ['git, docker'],
        },
    ],
    jobs: [
        {
            company: 'ВКонтакте',
            class: 'c-job--vk',
            start: new Date('2022-04-13'),
            description: [{ textLang: 'cv.jobVK.text' }, { textLang: 'cv.jobVK.text2' }],
        },
        {
            company: 'Кошелек',
            class: 'c-job--koshelek',
            start: new Date('2020-09-14'),
            end: new Date('2022-04-04'),
            description: [
                {textLang: 'cv.jobKoshelek.text'},
                {textLang: 'cv.jobKoshelek.text2'},
                {textLang: 'cv.jobKoshelek.text3'},
                {textLang: 'cv.jobKoshelek.text4'},
            ],
        },
        {
            company: 'Розарио',
            class: 'c-job--rozario',
            start: new Date('2019-11-01'),
            end: new Date('2020-07-01'),
            description: [
                {textLang: 'cv.jobRozario.text'},
                {textLang: 'cv.jobRozario.text2'},
                {textLang: 'cv.jobRozario.text3'},
                {textLang: 'cv.jobRozario.text4'},
            ],
        },
        {
            company: 'Фриланс',
            class: 'c-job--freelance',
            start: new Date('2019-06-01'),
            end: new Date('2019-11-01'),
            description: [
                {textLang: 'cv.jobFreelance.text'},
                {textLang: 'cv.jobFreelance.text2'},
            ],
        },
        {
            company: 'Севентест',
            class: 'c-job--seventest',
            start: new Date('2017-08-01'),
            end: new Date('2018-01-01'),
            description: [
                {textLang: 'cv.jobSeventest.text'},
            ],
        },
    ],
    educationList: [
        {
            universityLang: 'cv.university',
            class: 'sut',
            image: '',
            start: new Date('2014-09-01'),
            end: new Date('2014-06-29'),
            facultyLang: 'cv.faculty',
            programLang: 'cv.program',
        },
    ],
    link: '/static/cv',
};

export function useCVData(): {cvData: CV} {
    return {
        cvData
    }
}

export function isJob(data: unknown): data is Job {
    return (data as Job).company !== undefined;
}

export function isJobList(data: unknown[]): data is Job[]  {
    return Array.isArray(data) && isJob(data[0]);
}

export function isEducation(data: unknown): data is Education {
    return (data as Education).universityLang !== undefined;
}

export function isEducationList(data: unknown[]): data is Education[]  {
    return Array.isArray(data) && isEducation(data[0]);
}

export function isSkill(data: unknown): data is Skill {
    return (data as Skill).tech !== undefined || (data as Skill).list !== undefined;
}

export function isSkillList(data: unknown[]): data is Skill[]  {
    return Array.isArray(data) && isSkill(data[0]);
}