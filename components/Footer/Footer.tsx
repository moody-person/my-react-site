import { IconBrandGithub } from '@tabler/icons';
import React, { FC } from 'react';
import { i18n } from '../../i18n/i18n';
import { LinkTheme, MyLink } from '../MyLink/MyLink';

import style from './Footer.module.css';

type FooterProps = {};

// TODO: do not forget to update copyright year in 2023
export const Footer: FC<FooterProps> = ({}) => {
    return (
        <footer className={style.Footer}>
            <div className={style.FooterTech}>
                {i18n.t('footer.madeWith')}
                <MyLink theme={LinkTheme.SIMPLE} href="https://nextjs.org/">
                    next.js
                </MyLink>
            </div>
            <div className={style.FooterCopyRight}>
                © 2022 {i18n.t('author.name')}
            </div>
            <div className={style.FooterSources}>
                <span>{i18n.t('footer.sources')}</span>
                <MyLink
                    theme={LinkTheme.ICON}
                    href="https://github.com/moody-person/my-site"
                >
                    <IconBrandGithub size={16} color="black" />
                </MyLink>
            </div>
        </footer>
    );
};
