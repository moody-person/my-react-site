import React, { FC, ReactElement } from 'react'
import style from './MainLayout.module.css';

type MainLayoutProps = {
    children: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <main className={style.MainLayout}>
        {children}
    </main>
  )
}
