import React from "react";
import { Carousel } from "react-bootstrap";
import Reactimg from "../Reactimg.jpg"
import reactboot from "../reactboot.png"
import reactt from "../reactt.jpg"

export default function Slider() {
    return(
        <Carousel>
            <Carousel.Item style={{'height': '800px'}}>
                <img className="d-block w-100" src={reactt} alt="First slide"/>

             <Carousel.Caption>
                 <h3>Text na pierwszym obrazku</h3>
                 <p>slider z obrazkami</p>
                 </Carousel.Caption>   
            </Carousel.Item>
            <Carousel.Item style={{'height': '800px'}}>
                <img className="d-block w-100" src={reactboot} alt="First slide"/>

             <Carousel.Caption>
                 <h3>Text na drugim obrazku</h3>
                 <p>React-bootstrap</p>
                 </Carousel.Caption>   
            </Carousel.Item>
            <Carousel.Item style={{'height': '800px'}}>
                <img className="d-block w-100" src={Reactimg} alt="First slide"/>

             <Carousel.Caption>
                 <h3>Text na trzecim obrazku</h3>
                 <p>projekt zaliczeniowy zrobiony w reakcie + react-bootstrap</p>
                 </Carousel.Caption>   
            </Carousel.Item>
        </Carousel>
 
    
    )}