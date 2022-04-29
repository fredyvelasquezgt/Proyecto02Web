/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

function Explorar() {
  return (
    <div className="explorar" style={{ marginBottom: '350px' }}>
      <hr />
      <div className="seccion-1">
        <span>Explore More</span>
        <p>Watch, listen and connect with us on your favorite platforms</p>
      </div>
      <div className="seccion-2">
        <div className="sub-seccion-2">
          <div className="item">
            <div className="item-contenido">
              <p>
                <FaYoutube />
                CNET ON YOUTUBE
              </p>
              <hr />
              <span>The Ocean Cleanup and the Great Pacific Garbage Patch</span>
            </div>
            <div className="item-image">
              <video className="image">
                <source src="https://www.cnet.com/a/img/resize/15e611522b046bfdf996286a89f663f1b8f6b3da/hub/2022/04/26/84feddda-5267-49dc-91bf-16054ac495bb/ocean-cleanup-explore.gif?fit=crop&format=mp4&height=408&width=306" />
              </video>
            </div>
          </div>
          <div className="item item-2">
            <div className="item-contenido">
              <p>
                <FaYoutube />
                CNET ON YOUTUBE
              </p>
              <hr />
              <span>The Ocean Cleanup and the Great Pacific Garbage Patch</span>
            </div>
            <div className="item-image">
              <video className="image">
                <source src="https://www.cnet.com/a/img/resize/38f2fbe52fe0a75c452d3af43c160973f24027ac/hub/2022/04/21/08625fed-2cb1-475a-8e66-10a113ddda83/astro-bot-2.gif?fit=crop&format=mp4&height=408&width=306" />
              </video>
            </div>
          </div>
          <div className="item">
            <div className="item-contenido">
              <p>
                <FaYoutube />
                CNET ON YOUTUBE
              </p>
              <hr />
              <span>The Ocean Cleanup and the Great Pacific Garbage Patch</span>
            </div>
            <div className="item-image">
              <video className="image">
                <source src="https://www.cnet.com/a/img/resize/176a0c7a981bd8d8ed7421cb2d3107574a77c393/hub/2022/04/21/040c46df-ac9c-43fd-8496-623efb79e4f0/slime-bot-test-3.gif?fit=crop&format=mp4&height=408&width=306" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Explorar;
