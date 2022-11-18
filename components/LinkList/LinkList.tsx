import React, { FC } from 'react'
import { UserLink } from '../../data/about';
import { SimpleLinkItem } from '../SimpleLinkItem/SimpleLinkItem';
import style from './MainLayout.module.css';

export enum LinkListTheme {
    HERO = 'hero',
    MAIN = 'main',
}

type LinkListProps = {
    linkList: UserLink[];
    theme: LinkListTheme;
}

export const LinkList: FC<LinkListProps> = ({ linkList, theme}) => {
    if (theme === LinkListTheme.HERO) {
        return (
            <ul className={style.LinkList}>
                {linkList.map((link) => <SimpleLinkItem key={link.url} link={link} /> )}
            </ul>
          )
    } else if (theme === LinkListTheme.MAIN) {
        return (
            <ul className={style.LinkList}>
                {linkList.map((link) => <SimpleLinkItem key={link.url} link={link} />)}
            </ul>
          )
    }
    return null;
}
