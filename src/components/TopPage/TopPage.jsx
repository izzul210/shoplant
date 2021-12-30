import React from 'react';

import { Container } from 'react-bootstrap';
import './TopPage.scss';


function TopPage() {
    return (
        <div className="topPage">
            <Container>
                <div className="top">
                    <div className="title">
                        <h1>Wherever life <b style={{color: 'green'}}>Plants</b> you, </h1>
                          <h1>bloom with grace</h1>  
                        
                        <p>Shop your Plants with <b>ShoPlant</b></p>
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
