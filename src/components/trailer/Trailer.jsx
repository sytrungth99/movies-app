import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { fetchMovieVideos } from '../../service';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Trailer({match}) {
const param = match.params;
    const [video,setVideo] = useState([]);
    useEffect(() =>{
        const setAPI =async() =>{
            setVideo(await fetchMovieVideos(param.id));
        }
        setAPI();
    },[param.id]);
    console.log("video ne",video);
    const videoModel = video.slice(0, 1).map((item,index) =>{
        const urls = `https://www.youtube.com/watch?v=${item.key}`
        return(
            <ReactPlayer
            className="container-fluid"
            key ={index}
            url={urls}
            playing
            width="100%"
          ></ReactPlayer>
        
        )
    })
    return (
        <div>
            <Header/>
            <div className="container">
            
                <div className="row mt-2">
                    {videoModel}
                </div>
          <Footer/>
            </div>
        </div>
    );
}

export default Trailer;