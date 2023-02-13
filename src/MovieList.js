import React from 'react';

export default class MovieList extends React.Component {
    render () {
        let movies = [
            {
                image: './images/spiderman.jpg',
                movie: 'Spiderman Far From Home',
                
            },
        ]

        return (
            <div>
                {movies.map(movie => (
                    <div key={movie.movie}>
                        <h3>{movie.movie}</h3>
                        <img src={movie.image} alt={movie.movie} />
                    </div>
                ))}
            </div>
        );
    }
}
