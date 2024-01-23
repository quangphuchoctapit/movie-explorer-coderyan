import React from 'react';

const Modal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="fixed top-20 right-0 left-0 flex items-center justify-center duration-200 text-gray-900">
            <div className="bg-black opacity-80 w-full h-full fixed inset-0"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-10 relative max-w-lg flex flex-col">
                <h2 className='font-bold text-2xl text-cyan-400 my-5'>{movie.title}</h2>
                <p><span className='text-amber-600 font-semibold'>Overview: </span>{movie.overview}</p>
                <div className="my-3">
                    <p><span className='text-amber-600 font-semibold'>Release date:</span> {movie.release_date}</p>
                    <p><span className='text-amber-600 font-semibold'>Vote average: </span>{movie.vote_average}/10</p>
                    <p><span className='text-amber-600 font-semibold'>Number of votes: </span>{movie.vote_count}</p>
                </div>
                <button className='flex justify-end text-orange-600 font-bold text-lg' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
