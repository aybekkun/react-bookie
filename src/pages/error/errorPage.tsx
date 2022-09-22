import style from './errorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={style.error}>
      <h2>Извините страница не нашла</h2>
    </div>
  );
};

export default ErrorPage;
