import React, { FC, ReactNode } from 'react'

type ThemeLayoutProps = {
    children: ReactNode;
}

export const ThemeLayout: FC<ThemeLayoutProps> = ({children}) => {
  return (
    <div className={'s-common s-light-theme-v2 default-layout'}>
      {children}
    </div>
  )
}
