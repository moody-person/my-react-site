import clsx from 'clsx';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { MyDevice } from '../../components/MyDevice/MyDevice';
import { SimpleLinkItem } from '../../components/SimpleLinkItem/SimpleLinkItem';
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
				<div className={clsx('about-text', style.AboutLayoutText, style.AboutLayoutBox)}>
					{children}
				</div>
				<div className={clsx(style.AboutLayoutLinks, style.AboutLayoutBox)}>
					<ul className={clsx(style.AboutLayoutLinkList)}>
						{aboutData.links.map((link) => (
							<SimpleLinkItem key={link.url} link={link} />
						))}
					</ul>
				</div>
				<div className={clsx(style.AboutLayoutDevices, style.AboutLayoutBox)}>
					<ul>
						{aboutData.devices.map((device) => (
							<li key={device.name}>
								<MyDevice device={device} />
							</li>
						))}
					</ul>
				</div>
			</AboutGrid>
		</MainLayout>
	);
};
