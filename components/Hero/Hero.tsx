import React, { FC } from 'react';
import { UserLink } from '../../data/about';
import { useMyRouter } from '../../features/navigation';
import { i18n } from '../../i18n/i18n';
import { LinkList, LinkListTheme } from '../LinkList/LinkList';
import { NavList, NavTheme } from '../NavList/NavList';
import { TextWithBack } from '../TextWIthBack/TextWithBack';
import style from './Hero.module.css';

type HeroProps = {
    userLinks: UserLink[];
};

export const Hero: FC<HeroProps> = ({ userLinks }) => {
    const { navList } = useMyRouter();
    return (
        <div className={style.Hero}>
            <div className={style.HeroMeta}>
                <TextWithBack tag="h1">{i18n.t('admin.name')}</TextWithBack>
                <p className={style.HeroDescription}>{i18n.t('admin.description')}</p>
                <LinkList linkList={userLinks} theme={LinkListTheme.HERO} />
            </div>
            <div className={style.HeroNavList}>
                <NavList navList={navList} theme={NavTheme.HERO} />
            </div>
        </div>
    );
};
