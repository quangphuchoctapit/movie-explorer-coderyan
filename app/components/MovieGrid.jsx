import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = ({ movies, handleMovieClick }) => {
    if (!movies) return null
    return (
        <div className='grid p-5  gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {movies.map((movie) => (
                <MovieCard key={movie.id} keyProp={movie.id} movie={movie} handleMovieClick={handleMovieClick} />
            ))}
        </div>
    )
}

export default MovieGrid
