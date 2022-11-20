export const aboutI18N = {
    ru: {
        title: 'Обо мне',
        cv: 'резюме',
        spec: 'спецификация',
        herz: 'Ггц',
        gb: 'ГБ',
    },
};

export type UserLink = {
    icon?: string;
    url: string;
    text?: string;
    label?: string;
    textLang?: string;
    isActive?: boolean;
};

type MachineSpec = {
    cpu?: string;
    ram?: string;
    gpu?: string;
    storage?: string;
    os?: string;
}

export type MyMachine = {
    link: string;
    name: string;
    spec: (herzLang: string, gbLang: string) => MachineSpec;
}

export type AboutData = {
    links: UserLink[]
}

export const aboutData = {
    links: [
        {
            icon: 'brand-github',
            label: 'github',
            url: 'https://github.com/moody-person',
        },
        {
            icon: 'brand-gitlab',
            label: 'gitlab',
            url: 'https://gitlab.com/asleeppiano',
        },
        {
            textLang: 'about.cv',
            url: '/cv',
        },
        {
            text: 'dotfiles',
            url: 'https://github.com/moody-person/dotfiles',
        },
    ],
    machine: {
        link: 'https://www.ozon.ru/product/13-3-noutbuk-lenovo-ideapad-s540-13are-82dl003wru-amd-ryzen-7-4800u-1-8-ggts-ram-16-gb-ssd-512-gb-226665050/?sh=NWyGFZW8Wg',
        name: 'Lenovo IdeaPad S540-13ARE',
        spec(herzLang: string, gbLang: string) {
            return {
                cpu: `AMD Ryzen 7 4800U (1.8 ${herzLang})`,
                ram: `16 ${gbLang}`,
                gpu: 'AMD Radeon Graphics',
                storage: `512 ${gbLang}`,
                os: 'Windows 11 Home',    
            }
        },
    },
}