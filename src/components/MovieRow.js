/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './MovieRow.css'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(30)
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60
    }
    setScrollX(x)
  }
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <img src={ArrowLeft}/> 
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <img src= {ArrowRight}/>
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
