import clsx from 'clsx';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { LinkList, LinkListTheme } from '../../components/LinkList/LinkList';
import { MachineSpec } from '../../components/MachineSpec/MachineSpec';
import { TextWithBack } from '../../components/TextWithBack/TextWithBack';
import { aboutData } from '../../data/about';
import { i18n } from '../../i18n/i18n';
import { AboutGrid } from '../AboutGrid/AboutGrid';
import { MainLayout } from '../MainLayout/MainLayout';

import style from './AboutLayout.module.css';

type FooterProps = {
    children: ReactNode;
};

export const AboutLayout: FC<FooterProps> = ({ children }) => {
    return (
        <MainLayout>
            <Head>
                <title>{i18n.t('about.seo.title')}</title>
                <meta
                    name="description"
                    content={i18n.t('about.seo.description')}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TextWithBack>{i18n.t('about.title')}</TextWithBack>
            <AboutGrid>
                <div className={clsx('about-text', style.AboutLayoutText)}>
                    {children}
                </div>
                <div>
                    <LinkList
                        theme={LinkListTheme.ABOUT}
                        linkList={aboutData.links}
                    />
                </div>
                <div>
                    <MachineSpec machine={aboutData.machine} />
                </div>
            </AboutGrid>
        </MainLayout>
    );
};
