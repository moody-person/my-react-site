import React, { FC, ReactElement } from 'react'
import style from './SimpleLayout.module.css';

type SimpleLayoutProps = {
    children: ReactElement;
}

export const SimpleLayout: FC<SimpleLayoutProps> = ({children}) => {
  return (
    <main className={style.SimpleLayout}>
        {children}
    </main>
  )
}
