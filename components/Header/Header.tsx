import React, { FC, ReactNode } from 'react';
import { useMyRouter } from '../../features/navigation';
import { NavList, NavTheme } from '../NavList/NavList';

import style from './Header.module.css';

type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
    const { navList } = useMyRouter();
    return (
        <header className={style.Header}>
            <NavList navList={navList} theme={NavTheme.MAIN} />
        </header>
    );
};
