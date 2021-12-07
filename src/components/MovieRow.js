/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './MovieRow.css'

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-04-512.png" style={{width:50}}/>
      </div>
      <div className="movieRow--right">
        <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-03-512.png" style={{width:50}}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
        {items.results.length > 0 && items.results.map((item, key) => (
          <div className="movieRow--item">
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
