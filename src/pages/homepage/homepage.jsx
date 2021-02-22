import React from "react";
import { PageHeader, Carousel } from 'antd';
import './homepage.style.css';

const Homepage = (props) => {

    function onChange(a, b, c) {
        console.log(a, b, c);
      }
      
      const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div className='home-container'>
            <div className='page-herder'>
                <PageHeader 
                    title="Home"
                    subTitle="homepage"
                />
            </div>

            <div className='home-content-container'>
                <Carousel afterChange={onChange}>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Homepage;