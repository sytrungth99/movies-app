import React, { useEffect, useState } from 'react';
import { fetchGenre, fetchMoviesByGenre} from '../../service';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Slide from '../slide/Slide';
import Header from '../header/Header';
import Sibar from '../sibar/Sibar';



export function Home({match}) {
  console.log('matchHome',match);
    const [menus,setMenu] = useState([]);
    const [movie,setMovie] = useState([]);
    useEffect(() =>{
        const fetchAPI = async () =>{
            setMenu(await fetchGenre());
            setMovie(await fetchMoviesByGenre(28));
        };
        fetchAPI();
    },[]);
    
    console.log("menu",menus);
    console.log('movie',movie);
    const handelGenreClick =async(id) =>{
      setMovie(await fetchMoviesByGenre(id));
    }
//menu
    const menu = menus.map((item,i) =>{
        return (
          <li className="list-inline-item" key={i}>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick ={() =>{
                handelGenreClick(item.id)
              }}
            >
              {item.name}
            </button>
          </li>
        );
      });
//List movie
      const listMovie = movie.slice(0, 16).map((item,i) =>{
        return (
          <div className ="col-md-3" key ={i}>
            <div className ='card mb-4'>
              <Link to ={`/movie/${item.id}`}>
                <img className="img-fluid" src ={item.poster} alt ={item.title}></img>
              </Link>
            </div>
          </div>
        )
      });

// render html
    return (
      <div>
      <div className ="row">
      <Header/>
      </div>
        <Slide/>
        <div className ="container">
      <div className ="row mt-4">
        {menu}
      </div>
      <div className = 'row mt-5'>
        <div className ="col-md-9">
          <div className ="row">
          {listMovie}
          </div>
        </div>
        <Sibar/>
      </div>
      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
      <Footer/>
        </div>
      </div>
        
    );
}

export default Home;