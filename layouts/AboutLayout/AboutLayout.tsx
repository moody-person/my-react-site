import React, { FC, ReactNode } from 'react';
import { LinkList, LinkListTheme } from '../../components/LinkList/LinkList';
import { MachineSpec } from '../../components/MachineSpec/MachineSpec';
import { aboutData } from '../../data/about';
import { MainLayout } from '../MainLayout/MainLayout';

import style from './AboutLayout.module.css';

type FooterProps = {
    children: ReactNode;
};

export const AboutLayout: FC<FooterProps> = ({children}) => {
    return (
        <MainLayout>
            {children}
            <div>
                <LinkList theme={LinkListTheme.HERO} linkList={aboutData.links} />
                <MachineSpec machine={aboutData.machine} />
            </div>
        </MainLayout>
    );
};
