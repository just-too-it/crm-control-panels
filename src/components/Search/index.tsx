import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { postData } from 'service/postData';
import { SearchIcon } from 'components/icons';

import styles from './Search.module.scss';

export const Search = ({ getData }) => {
  interface Values {
    query: string;
  }

  const initValues: Values = {
    query: '',
  };

  const validationSchema: unknown = yup.object().shape({
    query: yup.string().min(3, 'Минимальное количество символов: 3'),
  });

  return (
    <Formik
      initialValues={initValues}
      validateOnChange={true}
      validateOnBlur={false}
      validationSchema={validationSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(async () => {
          const addresses = await postData(process.env.REACT_APP_API, process.env.REACT_APP_TOKEN, values.query, Number(process.env.REACT_APP_COUNT));
          getData(addresses);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isValid, dirty }) => (
        <Form className={styles.form}>
          <Field
            type="text"
            id={'query'}
            name={'query'}
            className={styles.input}
            placeholder={'Введите интересующий вас адрес'}
          />
          <button type="submit" className={styles.button} disabled={!(isValid && dirty)}>
            <SearchIcon width={32} height={32} fill={'white'} />
            Поиск
          </button>
        </Form>
      )}
    </Formik>
  );
};
