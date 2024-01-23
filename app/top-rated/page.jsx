'use client'

import MovieGrid from '@app/components/MovieGrid'
import { BASE_URL } from '@app/constants'
import { useState, useEffect } from 'react'
import Modal from '@app/components/Modal'

const TopRatedMovies = () => {
    const [movies, setMovies] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const onCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                let response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
                if (!response) {
                    console.log('Something went wrong')
                }
                const data = await response.json()
                setMovies(data.results)
            } catch (e) {
                console.log('Something went wrong')
            }
        }
        fetchTopRatedMovies()
    }, [])

    const handleMovieOnClick = (movie) => {
        setOpenModal(!openModal)
        setSelectedMovie(movie)
    }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold uppercase my-8 mx-auto '>Top Rated Movies</h1>
            <MovieGrid movies={movies} handleMovieClick={handleMovieOnClick} />
            {openModal &&
                <Modal movie={selectedMovie} onClose={onCloseModal} />
            }
        </div>
    )
}

export default TopRatedMovies
