import React from 'react';
import './TopPage.scss';

//Components
import TopBar from './TopBar';


function TopPage() {
    return (
        <div className="topPage">
            <TopBar />
            <div className="top">
                <div className="left">
                    <h1>Wherever life Plants you,
                        bloom with grace
                    </h1>
                    <p>Shop your plant with ShoPlant</p>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}

export default TopPage
