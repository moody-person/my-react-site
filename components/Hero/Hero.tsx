import { IconBrandGithub, IconBrandGitlab } from '@tabler/icons';
import React, { FC, ReactElement, ReactNode } from 'react';
import { Nav } from '../../features/navigation';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import { NavList, NavTheme } from '../NavList/NavList';
import { TextWithBack } from '../TextWIthBack/TextWithBack';
import style from './Hero.module.css';

type UserLink = {
    icon?: string;
    url: string;
    title?: string;
};

type HeroProps = {
    children: ReactElement;
    userLinks: UserLink[];
    description: string;
    title: string;
    navList: Nav[];
};

export const Hero: FC<HeroProps> = ({ title, description, userLinks, navList }) => {
    return (
        <div className={style.Hero}>
            <div className={style.HeroMeta}>
                <TextWithBack tag="h1">{title}</TextWithBack>
                <p className={style.HeroDescription}>{description}</p>
                {userLinks.map((link) => {
                    if (link.icon) {
                        let icon: ReactNode = '';
                        if (link.icon === 'brand-gitlab') {
                            icon = <IconBrandGitlab color="blue" size={16} />;
                        } else if (link.icon === 'brand-github') {
                            icon = <IconBrandGithub color="blue" size={16} />;
                        }
                        return (
                            <MyLink
                                key={link.url}
                                href={link.url}
                                theme={LinkTheme.ICON}
                            >
                                {icon}
                            </MyLink>
                        );
                    }
                    return (
                        <MyLink
                            key={link.url}
                            href={link.url}
                            theme={LinkTheme.SIMPLE}
                        >
                            {link.title}
                        </MyLink>
                    );
                })}
            </div>
            <NavList navList={navList} theme={NavTheme.HERO} />
        </div>
    );
};
