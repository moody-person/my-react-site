import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { i18n } from '../../i18n/i18n';
import { LinkTheme, MyLink } from '../MyLink/MyLink';
import style from './NavItem.module.css';

type NavItemProps = { nav: Nav };

export const NavItem: FC<NavItemProps> = ({ nav }) => {
    const router = useRouter();
    return (
        <li className={`${style.NavItem} ${router.pathname === nav.url ? style.NavItemActive : ''}`}>
            <MyLink href={nav.url} theme={LinkTheme.BIG} isActive={router.pathname === nav.url}>
                { i18n.t(nav.nameLang) }
            </MyLink>
        </li>
    );
};
