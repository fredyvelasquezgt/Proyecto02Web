import React from 'react';
import cometarios from '../image/comentarios.png';

function Comentarios() {
  return (
    <div className="comentarios">
      <img src={cometarios} alt="comentarios" />

      <section>
        <h3> Upgrade Your Inbox With CNET Insider</h3>
        <p>
          From talking fridges to iPhones, our experts are here to help make the
          world a little less complicated
        </p>
        <hr />
        <span>
          <input type="text" />
          <button type="button">Suscribe</button>
        </span>
        <p>
          By signing up, you agree to our Terms of Use and acknowledge the data
          practices in our Privacy Policy. You may unsubscribe at any time.
        </p>
      </section>
    </div>
  );
}
export default Comentarios;
