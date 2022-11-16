import React, { FC } from 'react';
import { Nav } from '../../features/navigation';
import { ZoomWord } from '../ZoomWord/ZoomWord';
import style from './MainLayout.module.css';

type HeroNavItemProps = Nav;

export const HeroNavItem: FC<HeroNavItemProps> = ({ title, url }) => {
    return (
        <li className={style.HeroNavItem}>
            <div>
                <ZoomWord title={title}>
                    <a href={url}>{title}</a>
                </ZoomWord>
            </div>
        </li>
    );
};
