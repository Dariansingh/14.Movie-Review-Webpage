import React from 'react';
import spiderman from './spiderman.jpg';
import avatar from './avatar.jpg'
import pib from './PIB.jpg'
import Review from './Review';
import Counter from './Stars'

export default class MovieList extends React.Component {
    render () {
        let movies = [
            { 
                movie: 'Spiderman: Far From Home',
                image: spiderman,
                synopsis: 'Peter Parker\'s relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.'
            },

            { 
                movie: 'Avatar: The Way of Water',
                image: avatar,
                synopsis: 'Jake Sully and Ney\'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.'
            },

            { 
                movie: 'Puss In Boots: The Last Wish',
                image: pib,
                synopsis: 'Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.'
            },
        ]

        return (
            /*JSX using map function to loop through  movie array and return new array of elements for each movie*/
            /*movie being passed as a prop */
            <div>
                {movies.map(movie => (
                    <div key={movie.movie} style={{ margin: '100px 0' }}>
                        <h3>{movie.movie}</h3>
                        <img src={movie.image} alt={movie.movie} width="300" height="450"  />
                        <p>{movie.synopsis}</p>
                        <p>How many stars out of 5?</p>
                        <Review />
                        <Counter />
                    </div>
                ))}
            </div>
        );
    }
}
