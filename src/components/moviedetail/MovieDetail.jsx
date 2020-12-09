import React, { useEffect, useState } from 'react';
import { fetchMoviesDetail,fetchCasts} from '../../service';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/actions/addTocart';

export function MovieDetail({match}) {
let params = match.params;
console.log('match',match);
console.log('params',params);
const [detail,setDetail] = useState([]);
const [actor,setActor] = useState([]);
useEffect(() =>{
    const fetchAPI = async () =>{
        setDetail(await fetchMoviesDetail(params.id));
        setActor(await fetchCasts(params.id));
    };
    fetchAPI();
},[params.id]);

const castList = actor.slice(0, 6).map((c, i) => {
    return (
      <div className="col-md-2 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
          alt={c.name}
        ></img>
        <p className="font-weight-bold text-center">{c.name}</p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#5a606b" }}
        >
          {c.character}
        </p>
      </div>
    );
  });
  
  const dispatch = useDispatch();
  const handelClick =(detail) =>{
    console.log('detail',detail);
    dispatch(addTocart(detail));
  }
    return (
    <div>
      <div className ="row">
        <Header/>
      </div>
        <div className ="container">
            <div className ="row mt-2">
                <div className ="movieinfo" style ={{width:'100%',height:'600px',
                 background: `url("http://image.tmdb.org/t/p/w1280${detail.backdrop_path}")`}}>
                    <div className ="container row movie-conten">
                        <div className ="col-md-4 image-detail">
                          <div className ='posterimg' style ={{width:'100%',height:'500px',
                               background: `url("https://image.tmdb.org/t/p/w500${detail.poster_path}")`}}>
                                  <div className ="row list-button">
                                    <Link to ={`/listmovie`}>
                                      <button type="button" className="btn btn-primary" onClick ={() => handelClick(detail)}>Add castList</button>
                                    </Link>
                          
                                    <div className ="button-trailer" style ={{marginLeft:10}}>
                                      <Link to ={`/trainer/${detail.id}`}>
                                        <button type="button" className="btn btn-danger">Trailer</button>
                                      </Link>
                                    </div>                                 
                                  </div>
                          </div>
                        </div>
                        <div className ="col-md-8 movie-detail">
                            <h1 className ="movie-title">{detail.title}</h1>
                            <h3 className ="movie-genres">Genres</h3>
                            <ul>
                                <li className="list-inline-item">actor</li>
                                <li className="list-inline-item">Drama</li>
                            </ul>
                            <h3 className ="overview-title">Overview</h3>
                            <p className ="overview-conten">{detail.overview}</p>
                            <h3 className ="release-title">Release date</h3>
                            <p className ="release">{detail.release_date}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <h3 className ="title-actor">ACTOR</h3>
        <div className ="row">
        {castList}
        </div>
        <Footer/>
        </div>
        </div>
        
    );
}

export default MovieDetail;