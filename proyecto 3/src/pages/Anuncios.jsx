import React from 'react';
import anuncios from '../image/anuncios.png';
import cartas from '../image/cartasAnuncios.png';

function Anuncios() {
  return (
    <div>
      <div className="anuncios" style={{ backgroundImage: `url(${anuncios})` }}>
        <div className="nivel1">
          <h3>Deep Dives</h3>
          <p>Immerse yourself in thought-provoking longform</p>
          <p>See More -</p>
        </div>
        <div className="nivel2">
          <h2>The Metaverse Isnt a Destination. Its a Metaphor</h2>
          <br />
          <br />
          <br />
          <hr />
          <p>
            Is this the hype peak of the metaverse? Or are we seeing something
            emerge thats been evolving for a long time?
          </p>
        </div>
      </div>
      <center style={{ marginTop: '-65px' }}>
        <img src={cartas} alt="" />
      </center>
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Anuncios;
