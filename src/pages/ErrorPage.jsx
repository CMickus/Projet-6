import {Link} from 'react-router-dom';
import style from './Error.module.scss';

export function ErrorPage() {

  return (
    <div id="error-page" className={style.content}>
      <h1 className={style.title}>404</h1>
      <p className={style.text}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default {ErrorPage};