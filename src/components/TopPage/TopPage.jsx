import React from 'react';

import { Container } from 'react-bootstrap';
import './TopPage.scss';

import plantTitle from '../../asset/images/plantTitle.png';


function TopPage() {
    return (
        <div className="topPage">
            <Container>
                <div className="top">
                    <div className="title">
                        <h1>Wherever life <img src={plantTitle} alt=""></img> you,</h1>
                        <h1>bloom with grace</h1>  
                        
                        <p>Shop your Plants with <b style={{color: 'green'}}>ShoPlant</b></p>
                    </div>
                    <div className="button">
                        <a href="#ourProducts">
                            <button>View Our Products</button>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopPage
