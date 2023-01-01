import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import style from './MyLink.module.css';

export enum LinkTheme {
    BIG = 'big',
    SIMPLE = 'simple',
    ICON = 'icon',
    PRIMARY = 'primary',
}

type MyLinkProps = {
    theme: LinkTheme;
    href: string;
    icon?: ReactNode;
    children: ReactNode;
    isActive?: boolean;
    className?: string;
};

export const MyLink: FC<MyLinkProps> = ({
    href,
    theme,
    children,
    isActive = false,
}) => {
    return (
        <Link href={href}>
            <a
                className={clsx({
                    [style.MyLinkActive]: isActive,
                    [style.MyLinkBig]: theme === LinkTheme.BIG,
                    [style.MyLinkSimple]: theme === LinkTheme.SIMPLE,
                    [style.MyLinkIcon]: theme === LinkTheme.ICON,
                    [style.MyLinkPrimary]: theme === LinkTheme.PRIMARY,
                })}
            >
                {children}
            </a>
        </Link>
    );
};
