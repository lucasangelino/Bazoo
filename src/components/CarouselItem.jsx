import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavourite, unSetFavourite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeICon from '../assets/static/remove-icon.png';


const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, myList } = props;
  
  const handleSetFavourite = () => {
     props.setFavourite(
       {
        id, cover, title, year, contentRating, duration
       }
     )
  };

  const handleUnsetSetFavourite = (itemId) => {
    console.log(itemId)
    props.unSetFavourite(itemId)
  };

  return (
    (
      <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>

          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          {
            props.isList ? 
              
            <img 
              className="carousel-item__details--img" 
              src={removeICon} 
              alt="Remove Icon"
              onClick={() => handleUnsetSetFavourite(id)}              
            />

            :
          
            <img 
              className="carousel-item__details--img" 
              src={plusIcon} 
              alt="Plus Icon"
              onClick={handleSetFavourite}
              
            /> 
          }

          


          

        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
    )
  )
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispathToProps = {
  setFavourite,
  unSetFavourite
}

const mapStateToProps = (state) => {
  return {
    myList : state.myList
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CarouselItem);