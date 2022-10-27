import React, { FC } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';

import styles from './Search.module.scss';
import { postData } from 'service/postData';
import { ADDRESS_COUNT, TOKEN, URL } from 'core/constants/API';
import { SearchIcon } from 'components/icons';

export const Search = ({ getData }) => {
  interface Values {
    query: string;
  }

  const initValues: Values = {
    query: '',
  };

  return (
    <Formik
      initialValues={initValues}
      validateOnChange={true}
      validateOnBlur={false}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(async () => {
          const addresses = await postData(URL, TOKEN, values.query, ADDRESS_COUNT);
          getData(addresses);
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className={styles.form}>
        <Field type="text" id={'query'} name={'query'} className={styles.input} placeholder={'Введите интересующий вас адрес'}/>
        <button type="submit" className={styles.button}>
          <SearchIcon width={32} height={32} fill={'white'} />
          Поиск
        </button>
      </Form>
    </Formik>
  );
};
