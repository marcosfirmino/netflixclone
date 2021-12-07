/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
      <a href="/">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix"/>
      </a>
      </div>
      <div className="header--user">
        <a>
          <img src="https://occ-0-1914-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXYGYCun9Sa2P1_GTaVtADVKfP2uC9e206A3KM1eABgccajzvO4PAR5XMPRiqqrY7SvvY_lneVww04vkQaDMuQ6I-wzm.png?r=c71" alt="Usuário"/>
        </a>
      </div>
    </header>

  )
}