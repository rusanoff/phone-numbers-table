import Head from 'next/head';
import { MainPage } from '../src/components/MainPage/MainPage';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Excel генератор
        </title>
        <meta
          name="description"
          content="Генератор excel таблицы номеров телефонов"
        />
      </Head>

      <MainPage />
    </>
  );
};

export default HomePage;
