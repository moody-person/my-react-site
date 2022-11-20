import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import { clsx } from 'clsx';
import style from './NavItem.module.css';
import { url } from 'inspector';

type NavItemProps = { nav: Nav };

export const NavItem: FC<NavItemProps> = ({ nav }) => {
    const router = useRouter();
    return (
        <li className={`${style.NavItem} ${router.pathname === nav.url ? style.NavItemActive : ''}`}>
            <MyLink href={nav.url} theme={LinkTheme.BIG} isActive={router.pathname === nav.url}>
                { nav.name }
            </MyLink>
        </li>
    );
};
