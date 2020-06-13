import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';


// const API = 'http://localhost:9000/initalState'

const Home = ({myList, trends, originals}) => {
  // const initialState = useInitialState(API);
  return (
    <div className="App">
      {/* <Header /> */}
      <Search />
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item}
                isList={true}  
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      {/* <Footer /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myList : state.myList,
    trends: state.trends,
    originals : state.originals
  }
}

export default connect(mapStateToProps, null)(Home);