import React from 'react';
import Anuncios from './Anuncios';
import Comentarios from './Comentarios';
import Destacados from './Destacados';
import Explorar from './Explorar';
import Noticias from './Noticias';
import Principal from './Principal';
import Recomendaciones from './Recomendacion';
import Telefonos from './Telefonos';
import Titulo from './Titulo';
import UltimasNoticias from './UltimasNoticias';
import VidaMejorada from './VidaMejorada';

function App() {
  return (
    <div>
      <Titulo />
      <Principal />
      <Destacados />
      <Telefonos />
      <Comentarios />
      <Anuncios />
      <Noticias />
      <Explorar />
      <VidaMejorada />
      <Recomendaciones />
      <UltimasNoticias />
    </div>
  );
}

export default App;
