import clsx from 'clsx';
import React, { FC } from 'react'
import { UserLink } from '../../data/about';
import { SimpleLinkItem } from '../SimpleLinkItem/SimpleLinkItem';
import style from './LinkList.module.css';

export enum LinkListTheme {
    HERO = 'hero',
    MAIN = 'main',
    ABOUT = 'about',
}

type LinkListProps = {
    linkList: UserLink[];
    theme: LinkListTheme;
}

export const LinkList: FC<LinkListProps> = ({ linkList, theme}) => {
    if (theme === LinkListTheme.HERO) {
        return (
            <ul className={`${style.LinkList} ${style.LinkListHero}`}>
                {linkList.map((link) => <SimpleLinkItem key={link.url} link={link} /> )}
            </ul>
          )
    } else if (theme === LinkListTheme.MAIN) {
        return (
            <ul className={style.LinkList}>
                {linkList.map((link) => <SimpleLinkItem key={link.url} link={link} />)}
            </ul>
          )
    } else if (theme === LinkListTheme.ABOUT) {
        return (
            <ul className={clsx(style.LinkList, style.LinkListAbout)}>
                {linkList.map((link) => <SimpleLinkItem key={link.url} link={link} />)}
            </ul>
          )
    }
    return null;
}
