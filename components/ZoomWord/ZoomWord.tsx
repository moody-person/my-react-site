import React, { FC, ReactElement } from 'react';
import { Nav } from '../../features/navigation';
import { range } from '../../utils/utils';
import style from './MainLayout.module.css';

type ZoomWordProps = Pick<Nav, "name"> & { children: ReactElement };

export const ZoomWord: FC<ZoomWordProps> = ({ name, children }) => {
    return (
        <div className={style.ZoomWord}>
            <div className={style.ZoomWordList}>
                {range(0, 6).map((i) => (
                    <span key={i} className={style.ZoomWordListText}>
                        {name}
                    </span>
                ))}
            </div>
            { children }
        </div>
    );
};
