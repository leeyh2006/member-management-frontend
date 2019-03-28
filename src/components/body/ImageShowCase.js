import React from 'react';
import third from '../../vendor/img/bg-showcase-3.jpg';
import Chart from "../chart/Chart";
import BoardListContainer from "../../container/BoardContainer";

const ImageShowCase = () =>{
    return(
        <section className="showcase">
            <div className="container">

                <div className="row no-gutters">
                    <div className="col-lg-6 text-black-50 ">
                        <BoardListContainer/>
                    </div>

                    <div className="col-lg-6 text-black-50 ">
                        <Chart/>
                    </div>

                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"
                         style={{
                             backgroundImage:`url(${third})`
                         }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use &amp; Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who
                            demand some deeper customization options. Out of the box, just add your content and images,
                            and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageShowCase;
