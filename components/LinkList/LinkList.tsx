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
        return (
            <ul className={`${style.LinkList} ${style.LinkListHero}`}>
                {linkList.map((link) => (
                    <SimpleLinkItem key={link.url} link={link} />
                ))}
            </ul>
        );
    } else if (theme === LinkListTheme.MAIN) {
        return (
            <ul className={style.LinkList}>
                {linkList.map((link) => (
                    <SimpleLinkItem key={link.url} link={link} />
                ))}
            </ul>
        );
    } else if (theme === LinkListTheme.ABOUT) {
        return (
            <ul className={clsx(style.LinkList, style.LinkListAbout)}>
                {linkList.map((link) => (
                    <SimpleLinkItem key={link.url} link={link} />
                ))}
            </ul>
        );
    } else if (theme === LinkListTheme.CV) {
        return (
            <ul className={clsx(style.LinkList, style.LinkListCV)}>
                {linkList.map((link) => {
                    let icon: ReactNode = '';
                    if (link.icon === 'brand-telegram') {
                        icon = <IconBrandTelegram color={'black'} />;
                    }
                    if (link.icon === 'at') {
                        icon = <IconAt color={'black'} />;
                    }
                    return (
                        <MyLink
                            key={link.url}
                            theme={LinkTheme.SIMPLE}
                            href={link.url}
                        >
                            {icon} {link.text}
                        </MyLink>
                    );
                })}
            </ul>
        );
    }
    return null;
};
