import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Listmovies from './components/listMovie/Listmovies';
import MovieDetail from './components/moviedetail/MovieDetail';
import Search from './components/search/Search';
import Trailer from './components/trailer/Trailer';


export function App() {
  return(
    <main>
    <Switch> 
      <Route path="/" component={Home} exact />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path ="/trainer/:id" component ={Trailer}/>
      <Route path ="/listmovie" component ={Listmovies}/>
      <Route path ="/search" component ={Search}/>
    </Switch>
  </main>
  );
}

export default App;
