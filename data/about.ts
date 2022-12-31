export const aboutI18N = {
    ru: {
        seo: {
            title: 'Андрей Парфенов | Обо мне',
            description: 'Обо мне',
        },
        title: 'Обо мне',
        cv: 'резюме',
        spec: 'спецификация',
        hertz: 'Ггц',
        gb: 'ГБ',
        sources: 'исходники',
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
};

export type MyMachine = {
    link: string;
    name: string;
    spec: (herzLang: string, gbLang: string) => MachineSpec;
};

export type AboutData = {
    links: UserLink[];
};

export const aboutData = {
    links: [
        {
            icon: 'brand-telegram',
            label: 'telegram',
            url: 'https://t.me/rawkangaroo',
        },
        {
            icon: 'brand-vk',
            label: 'vk',
            url: 'https://vk.com/andrey.parfenov',
        },
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
            text: 'dotfiles',
            url: 'https://github.com/moody-person/dotfiles',
        },
        {
            textLang: 'about.sources',
            url: 'https://github.com/moody-person/my-react-site',
        },
    ],
    machine: {
        link: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch',
        name: 'Apple macbook pro 14',
        spec(herzLang: string, gbLang: string) {
            return {
                cpu: `8-core m1pro`,
                ram: `16 ${gbLang}`,
                gpu: '14-core',
                storage: `512 ${gbLang}`,
                os: 'macOS',
            };
        },
    },
};
