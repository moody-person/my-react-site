import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { ZoomWord } from '../ZoomWord/ZoomWord';
import style from './MainLayout.module.css';

type HeroNavItemProps = { nav:Nav };

export const HeroNavItem: FC<HeroNavItemProps> = ({ nav }) => {
    return (
        <li className={style.HeroNavItem}>
            <div>
                <ZoomWord name={nav.name}>
                    <a href={nav.url}>{nav.name}</a>
                </ZoomWord>
            </div>
        </li>
    );
};
