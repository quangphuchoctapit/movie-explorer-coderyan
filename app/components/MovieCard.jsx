import React from 'react';
import Image from 'next/image';
import movieTemplate from '../assets/images/movie.jpg'

const MovieCard = ({ keyProp, movie, handleMovieClick }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const truncatedTitle = movie.title.length > 25 ? movie.title.substring(0, 25) + '...' : movie.title;

    return (
        <div onClick={() => handleMovieClick(movie)} key={keyProp} className='p-3 flex items-center flex-col rounded-lg bg-gray-800 hover:scale-105 hover:duration-200 cursor-pointer'>
            <Image
                src={imageUrl}
                alt={truncatedTitle}
                width={220}
                height={240}
                objectFit='cover'
                className='rounded-md w-full h-auto'
            />
            <span className='pt-3'>{truncatedTitle}</span>
        </div>
    );
}

export default MovieCard;
