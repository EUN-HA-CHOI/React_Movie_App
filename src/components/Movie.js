import React from 'react' //rfce
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom'

function Movie({genres,id,poster,summary,title,year}) { //props 또는 구조분해할당으로 전달
//   console.log(props);
// const {genres,id,poster,summary,title,year} = props;
  return(
      <div className='movie'>
        <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
            <h3 className='movie_title'>{title}</h3>
            <h4 className='movie_year'>{year}</h4>
            <ul className='movie_genres'>
                {genres.map((genre, index) => { //map을 사용해 genre에 있는 내용을 가져옴
                    return (
                    <li className='movie_genre' key={index}>{genre}</li>
                    )
                })}
            </ul>
            <p className='movie_summary'>{summary.slice(0,180)} ...</p>
        </div>
        </Link>
      </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    // arrayOf()는 문자열을 원소로 갖는 배열
};

export default Movie

// npm install prop-types