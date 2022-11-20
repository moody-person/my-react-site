import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';
import style from './Chip.module.css';

type ChipProps = {
    children: ReactNode;
    className: string;
};

export const Chip: FC<ChipProps> = ({ children, className }) => {
    return (
        <div className={clsx(style.Chip, className)}>
            {children}
        </div>
    );
};
