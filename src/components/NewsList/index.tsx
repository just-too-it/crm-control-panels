import { News } from 'components/News'
import React, {FC} from 'react'

import styles from './NewsList.module.scss'
import { NewsListProps } from './NewsList.types'

export const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <ul className={styles.list} >
        {
            news.map((news) => <li key={news.id}><News id={news.id} title={news.title} body={news.body}  /></li>)
        }
    </ul>
  )
}
