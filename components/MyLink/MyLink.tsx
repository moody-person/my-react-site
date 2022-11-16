import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import style from './MainLayout.module.css';

export enum LinkTheme {
    BIG = 'big',
    SIMPLE = 'simple',
    ICON = 'icon',
}

type MyLinkProps = {
    theme: LinkTheme;
    href: string;
    children: ReactNode;
};

export const MyLink: FC<MyLinkProps> = ({ href, theme, children }) => {
    if (theme === LinkTheme.BIG) {
        return (
            <Link href={href}>
                <a className={style.MyLinkBig}>
                    {children}
                </a>
            </Link>
        );
    } else if (theme == LinkTheme.SIMPLE) {
        return (
            <Link href={href}>
                <a className={style.MyLinkSimple}>
                    {children}
                </a>
            </Link>
        )
    } else if (theme === LinkTheme.ICON) {
        return (
            <Link href={href}>
                <a className={style.MyLinkIcon}>
                    {children}
                </a>
            </Link>
        )
    }

    return null;
};
