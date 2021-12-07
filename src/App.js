/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import Loading from './assets/loading.gif'


export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals') 
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 15) {setBlackHeader(true)} else {setBlackHeader(false)}
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">💛</span> pelo <a href="https://www.linkedin.com/in/marcos-firmino/" target="_blank">Marcos Firmino</a><br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site <a href="https://www.themoviedb.org/" target="_blank">Themoviedb.org</a>
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src={Loading} alt='Carregando'/>  
        </div>
      }
    </div>
  )
}
