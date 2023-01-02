import { IconAt, IconBrandTelegram } from '@tabler/icons';
import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import { UserLink } from '../../data/about';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import { SimpleLinkItem } from '../SimpleLinkItem/SimpleLinkItem';
import style from './LinkList.module.css';

export enum LinkListTheme {
    HERO = 'hero',
    MAIN = 'main',
    ABOUT = 'about',
    CV = 'cv',
}

type LinkListProps = {
    linkList: UserLink[];
    theme: LinkListTheme;
};

export const LinkList: FC<LinkListProps> = ({ linkList, theme }) => {
    if (theme === LinkListTheme.HERO) {
        return '';
    } else if (theme === LinkListTheme.MAIN) {
        return (
            <ul className={style.LinkList}>
                {linkList.map((link) => (
                    <SimpleLinkItem key={link.url} link={link} />
                ))}
            </ul>
        );
    } else if (theme === LinkListTheme.ABOUT) {
        return '';
    } else if (theme === LinkListTheme.CV) {
        return '';
    }
    return null;
};
