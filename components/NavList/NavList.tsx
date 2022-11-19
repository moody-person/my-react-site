import React, { FC } from 'react'
import { Nav } from '../../features/navigation';
import { HeroNavItem } from '../HeroNavItem/HeroNavItem';
import { NavItem } from '../NavItem/NavItem';

import style from './NavList.module.css';

export enum NavTheme {
    HERO = 'hero',
    MAIN = 'main',
}

type NavListProps = {
    navList: Nav[];
    theme: NavTheme;
}

export const NavList: FC<NavListProps> = ({ navList, theme}) => {
    if (theme === NavTheme.HERO) {
        return (
            <ul className={style.NavList}>
                {navList.map((nav) => <HeroNavItem key={nav.name} nav={nav} /> )}
            </ul>
          )
    } else if (theme === NavTheme.MAIN) {
        return (
            <ul className={style.NavList}>
                {navList.map((nav) => <NavItem key={nav.name} nav={nav} />)}
            </ul>
          )
    }
    return null;
}
