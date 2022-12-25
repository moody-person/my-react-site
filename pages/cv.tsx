import Head from 'next/head'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { useCVData } from '../data/cv';
import { TextWithBack } from '../components/TextWithBack/TextWithBack';
import { i18n } from '../i18n/i18n';
import { IconFile } from '@tabler/icons';
import { LinkTheme, MyLink } from '../components/MyLink/MyLink';

import style from '../styles/pages/cv.module.css';
import { CVList } from '../components/CVList/CVList';
import { CVGrid } from '../layouts/CVGrid/CVGrid';
import { LinkList, LinkListTheme } from '../components/LinkList/LinkList';

export default function CV() {
  const { cvData } = useCVData();

  return (
    <MainLayout>
      <Head>
        <title>{i18n.t('cv.seo.title')}</title>
        <meta name="description" content={i18n.t('cv.seo.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CVGrid>
        <div className={style.CVHeader}>
          <TextWithBack>
            {i18n.t('cv.name')}
          </TextWithBack>
          <MyLink theme={LinkTheme.SIMPLE} href={cvData.link}><IconFile /> pdf</MyLink>
        </div>
        <p>{i18n.t('cv.profession')}</p>
        <div>
          <LinkList theme={LinkListTheme.CV} linkList={cvData.contacts} />
        </div>
        <div>
          <h2>{i18n.t('cv.skills')}</h2>
          <CVList cvList={cvData.skills} />
        </div>
        <div>
          <h2>{i18n.t('cv.jobExperience')}</h2>
          <CVList cvList={cvData.jobs} />
        </div>
        <div>
          <h2>{i18n.t('cv.education')}</h2>
          <CVList cvList={cvData.educationList} />
        </div>
      </CVGrid>
    </MainLayout>
  )
}
