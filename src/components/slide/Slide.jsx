import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slide() {
    return (
        <div className='container-fluid' >
        <div className="row">
            <div className="col-12 p-0">
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://zingtv-photo.zadn.vn/tv/4/7/2/b/472b25c6b8da1a0d79868bde4667a556.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://zingtv-photo.zadn.vn/tv/a/3/0/2/a3024767e30fdc15bd8e43a6664542ec.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://zingtv-photo.zadn.vn/tv/d/2/2/1/d2210c319271f63af6e95f05f7e39950.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    </div>
    );
}

export default Slide;