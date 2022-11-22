import { IconBrandGithub, IconBrandGitlab } from '@tabler/icons';
import React, { FC, ReactNode } from 'react';
import { UserLink } from '../../data/about';
import { i18n } from '../../i18n/i18n';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import style from './SimpleLinkItem.module.css';

type SimpleLinkItemProps = { link: UserLink };

export const SimpleLinkItem: FC<SimpleLinkItemProps> = ({ link }) => {
    if (link.text) {
        return (
            <li className={style.SimpleLinkItem}>
                <MyLink href={link.url} theme={LinkTheme.SIMPLE} isActive={link.isActive}>
                    {link.textLang ? i18n.t(link.textLang) : link.text}
                </MyLink>
            </li>
        );
    } else if (link.icon) {
        if (link.icon) {
            let icon: ReactNode = '';
            if (link.icon === 'brand-gitlab') {
                icon = <IconBrandGitlab color="currentColor" size={22} />;
            } else if (link.icon === 'brand-github') {
                icon = <IconBrandGithub color="currentColor" size={22} />;
            }
            return (
                <li className={style.SimpleLinkItem}>
                    <MyLink
                        href={link.url}
                        aria-label={link.label}
                        theme={LinkTheme.ICON}
                        isActive={link.isActive}
                    >
                        {icon}
                    </MyLink>
                </li>
            );
        }
        return (
            <li className={style.SimpleLinkItem}>
                <MyLink key={link.url} href={link.url} theme={LinkTheme.SIMPLE} isActive={link.isActive}>
                    {link.textLang ? i18n.t(link.textLang) : link.text}
                </MyLink>
            </li>
        );
    }
    return null;
};
