import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import style from './MyLink.module.css';

export enum LinkTheme {
    BIG = 'big',
    SIMPLE = 'simple',
    ICON = 'icon',
}

type MyLinkProps = {
    theme: LinkTheme;
    href: string;
    icon?: ReactNode;
    children: ReactNode;
    isActive?: boolean;
};

export const MyLink: FC<MyLinkProps> = ({ href, theme, children, isActive = false }) => {
    if (theme === LinkTheme.BIG) {
        return (
            <Link href={href}>
                <span className={clsx(style.MyLinkBig, {[style.MyLinkBigActive]: isActive})}>
                    {children}
                </span>
            </Link>
        );
    } else if (theme == LinkTheme.SIMPLE) {
        return (
            <Link href={href}>
                <span className={clsx(style.MyLinkSimple, {[style.MyLinkSimpleActive]: isActive})}>
                    {children}
                </span>
            </Link>
        )
    } else if (theme === LinkTheme.ICON) {
        return (
            <Link href={href}>
                <span className={clsx(style.MyLinkIcon, {[style.MyLinkIconActive]: isActive})}>
                    {children}
                </span>
            </Link>
        )
    }

    return null;
};
