import React, { FC } from 'react'

import { NewsProps } from './News.types'

import styles from './News.module.scss'

export const News: FC<NewsProps> = ({ title, body }) => {
  return (
    <article className={styles.news}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: body} }></div>
    </article>
  )
}
