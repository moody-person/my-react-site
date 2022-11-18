import { IconBrandGithub, IconBrandGitlab } from '@tabler/icons';
import React, { FC, ReactNode } from 'react';
import { UserLink } from '../../data/about';
import { i18n } from '../../i18n/i18n';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import style from './MainLayout.module.css';

type SimpleLinkItemProps = { link: UserLink };

export const SimpleLinkItem: FC<SimpleLinkItemProps> = ({ link }) => {
    if (link.text) {
        return (
            <li className={style.SimpleLinkItem}>
                <MyLink href={link.url} theme={LinkTheme.SIMPLE}>
                    {link.textLang ? i18n.t(link.textLang) : link.text}
                </MyLink>
            </li>
        );
    } else if (link.icon) {
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
                    aria-label={link.label}
                    theme={LinkTheme.ICON}
                >
                    {icon}
                </MyLink>
            );
        }
        return (
            <MyLink key={link.url} href={link.url} theme={LinkTheme.SIMPLE}>
                {link.textLang ? i18n.t(link.textLang) : link.text}
            </MyLink>
        );
    }
    return null;
};
