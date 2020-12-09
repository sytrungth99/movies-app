import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {fetchPersion, fetchToprateMovie } from '../../service';

function Sibar() {
    const [topRate,setToprate] = useState([]);
    const [topPersion,setToppersion] =useState([]);
    useEffect(() =>{
        const fetchAPI =async()=>{
            setToprate(await fetchToprateMovie());
            setToppersion(await fetchPersion());
        }
        fetchAPI();
    },[]);
    console.log('toprate',topRate);
    console.log('persion',topPersion);
    const Listtoprate = topRate.slice(0, 8).map((item,index) =>{
        return (
            <li className ="list-item mt-3" key ={index}>
                <Link to ={`movie/${item.id}`}>
                  <div className ="row">
                    <div className ="col-md-6">
                      <img className ="img-fluid" src ={item.poster} alt ={item.title} ></img>
                    </div>
                    <div className ="col-md-6">
                        <span className="list-top-movie-item-vn">{item.title} </span>
                        <span className="list-top-movie-item-en">{item.rating}</span>
                    </div>
                  </div>
                </Link>
                </li>
        )
    });
    const ListPersion = topPersion.slice(0, 8).map((item,index) =>{
        return (
            <li className ="list-item mt-3" key ={index}>
                <Link to ={`movie/${item.id}`}>
                  <div className ="row">
                    <div className ="col-md-6">
                      <img className ="img-fluid" src ={item.imgpersion} alt ={item.name} ></img>
                    </div>
                    <div className ="col-md-6">
                        <span className="list-top-movie-item-vn">{item.name} </span>
                    </div>
                  </div>
                </Link>
                </li>
        )
    })
    return (
    
        <div className ="col-md-3">
          <div className ="right-box-1">
            <h1 className ="right-box-title">Top Movie</h1>
            <div className ="right-box-conten">
              <ul className ="scroll-bar">
                {Listtoprate}
              </ul>
            </div>
          </div>
          <div className ="right-box-1 mt-5">
            <h1 className ="right-box-title">Top Rate Caster</h1>
            <div className ="right-box-conten">
              <ul className ="scroll-bar">
                {ListPersion}
              </ul>
            </div>
          </div>
        </div>

    );
}

export default Sibar;