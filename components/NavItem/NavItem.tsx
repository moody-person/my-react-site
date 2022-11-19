import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import style from './NavItem.module.css';

type NavItemProps = { nav: Nav };

export const NavItem: FC<NavItemProps> = ({ nav }) => {
    return (
        <li className={style.NavItem}>
            <MyLink href={nav.url} theme={LinkTheme.BIG}>
                { nav.name }
            </MyLink>
        </li>
    );
};
