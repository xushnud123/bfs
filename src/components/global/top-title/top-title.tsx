import React, { type FC } from 'react'

import cls from './top-title.module.scss'

interface TopTitleProps {
  title: string
  description: string
}

import logo from '../../../../public/images/logo_1.svg'

const TopTitle: FC<TopTitleProps> = ({ title, description }) => {
  return (
    <div className={cls.wrapper}>
      <img src={logo.src} alt="Bo'ston food company" width={48} height={48} />
      <h2 className={cls.title}>{title}</h2>
      <h3 className={cls.description}>
        <span>{description}</span>
      </h3>
    </div>
  )
}

export default TopTitle
