
import { useEffect, useState } from 'react';
import ModeBtn from './components/ModeBtn';
import ModeTop from './components/ModeTop';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
import { useTranslation } from 'react-i18next';
import './langConfig/i18n';
import movies from './data/data';
import MovieCard from './components/MovieCard';
function App() {
  const [mode,setMode] = useState('light');
  useEffect(()=>{
    document.body.className = mode;
  })
  const {t, i18n} = useTranslation()
  const handlerClick =(lang)=>{
    i18n.changeLanguage(lang);
  }
  return (
    <div className="container mt-5">
      <div className="mt-5">
        <button onClick={()=>{handlerClick('az')}} className='btn btn-primary'>AZ</button>
        <button onClick={()=>{handlerClick('tr')}} className='btn btn-primary'>TR</button>
        <button onClick={()=>{handlerClick('en')}} className='btn btn-primary'>EN</button>
      </div>
      <p>{t('hello.1')}</p>
  <div className="row">
  {movies.map((fd,i)=>(
        <MovieCard title={t(`movie.${i+1}`)} price={fd.price}/>
      ))}
  </div>
      <ModeTop color={mode}/>
      <ModeBtn color={mode} setColor={setMode}/>
    </div>
  );
}

export default App;
