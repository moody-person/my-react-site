import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import style from './MainLayout.module.css';

type NavItemProps = Nav;

export const NavItem: FC<NavItemProps> = ({ title, url }) => {
    return (
        <li className={style.NavItem}>
            <MyLink href={url} theme={LinkTheme.BIG}>
                { title }
            </MyLink>
        </li>
    );
};
