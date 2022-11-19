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
};

export const MyLink: FC<MyLinkProps> = ({ href, theme, children }) => {
    if (theme === LinkTheme.BIG) {
        return (
            <Link href={href}>
                <span className={style.MyLinkBig}>
                    {children}
                </span>
            </Link>
        );
    } else if (theme == LinkTheme.SIMPLE) {
        return (
            <Link href={href}>
                <span className={style.MyLinkSimple}>
                    {children}
                </span>
            </Link>
        )
    } else if (theme === LinkTheme.ICON) {
        return (
            <Link href={href}>
                <span className={style.MyLinkIcon}>
                    {children}
                </span>
            </Link>
        )
    }

    return null;
};
