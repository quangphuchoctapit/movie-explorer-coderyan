'use client'
import React, { useState } from 'react'
import { BASE_URL } from './constants'
import MovieGrid from './components/MovieGrid'
import Modal from './components/Modal'

const SearchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`)
    return await response.json()
  } catch (e) {
    console.log(e);
  }
}


const Home = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const handleMovieOnClick = (movie) => {
    setOpenModal(!openModal)
    setSelectedMovie(movie)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query) return
    const results = await SearchMovies(query)
    setMovies(results.results);
  }

  const onCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <>
      <main className='flex w-full items-center gap-3 md:gap-24 p-3 bg-black'>
        <h1 className='max-sm:text-lg font-bold text-2xl ml-16'>Movie Explorer</h1>
        <form onSubmit={handleSearch} className='flex gap-2'>
          <input type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Search movie...'
            className='rounded-xl p-3 border max-sm:w-[140px] lg:min-w-[400px] border-gray-800 text-black'
          />
          <button type='submit' className='rounded-xl max-sm:hidden bg-orange-400 p-3 '>Search</button>
        </form>
      </main>
      <div className="my-5 w-full">
        {
          <MovieGrid movies={movies} handleMovieClick={handleMovieOnClick} />
        }
      </div>
      {openModal &&
        <Modal movie={selectedMovie} onClose={onCloseModal} />
      }
    </>
  )
}

export default Home
