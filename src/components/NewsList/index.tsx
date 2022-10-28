import React, { FC } from 'react';

import { News } from 'components/News';
import { NewsListProps } from './NewsList.types';

export const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <ul>
      {news.map((news) => (
        <li key={news.id}>
          <News id={news.id} title={news.title} body={news.body} />
        </li>
      ))}
    </ul>
  );
};
