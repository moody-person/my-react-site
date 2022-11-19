import Head from 'next/head'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { useCVData } from '../data/cv';
import { TextWithBack } from '../components/TextWIthBack/TextWithBack';
import { i18n } from '../i18n/i18n';
import { IconFile } from '@tabler/icons';
import { LinkTheme, MyLink } from '../components/MyLink/MyLink';
import { Skills } from '../components/Skills/Skills';

import style from '../styles/pages/cv.module.css';
import { CVList } from '../components/CVList/CVList';

export default function CV() {
  const { cvData } = useCVData();

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.Header}>
        <TextWithBack>
          {i18n.t('cv.name')}
        </TextWithBack>
        <MyLink theme={LinkTheme.SIMPLE} href={cvData.link}><IconFile /> pdf</MyLink>
      </div>
      <p>{i18n.t('cv.profession')}</p>
      <Skills skills={cvData.skills} />
      <CVList cvList={cvData.jobs} />
      <CVList cvList={cvData.educationList} />
    </MainLayout>
  )
}
