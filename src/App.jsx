import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=482e8d3f744b477593bb1ff4a89e519f`;
      const response = await fetch(url);
      const noticias = await response.json();

      guardarNoticias(noticias.articles);
    };
     
    consultarAPI();
  })

  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />

      <div className="container white">
        <Formulario
        guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
        noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
