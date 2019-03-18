import React from 'react';
import first from '../../vendor/img/bg-chart.PNG';
import second from '../../vendor/img/bg-showcase-2.jpg';
import third from '../../vendor/img/bg-showcase-3.jpg';

const ImageShowCase = () =>{
    return(
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row no-gutters">

                    <div className="col-lg-6 order-lg-2 text-white showcase-img"
                         style={{
                             backgroundImage:`url(${first})`
                         }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>char Analysis</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the
                            theme will look great on any device, whether it's a phone, tablet, or desktop the page will
                            behave responsively!</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 text-white showcase-img"
                         style={{
                             backgroundImage:`url(${second})`
                         }}></div>

                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 4</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is
                            leading the way in mobile responsive web development! All of the themes on Start Bootstrap
                            are now using Bootstrap 4!</p>
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
