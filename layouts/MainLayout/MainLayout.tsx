import React, { FC, ReactNode } from 'react'
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import style from './MainLayout.module.css';

type MainLayoutProps = {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <main className={style.MainLayout}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
