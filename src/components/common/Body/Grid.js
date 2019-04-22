
import React from 'react';
const Grid= () =>{
    return(
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-pie-chart m-auto text-primary"></i>
                            </div>
                            <h3> Chart</h3>
                            <p className="lead mb-0">
                                this page is chart page
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-speech m-auto text-primary"></i>
                            </div>
                            <h3>News</h3>
                            <p className="lead mb-0">this Page news of Patent</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-layers m-auto text-primary"></i>
                            </div>
                            <h3>technology field </h3>
                            <p className="lead mb-0"> this page technology field </p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-graph m-auto text-primary"></i>
                            </div>
                            <h3>Data Analysis</h3>
                            <p className="lead mb-0">this page data Analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Grid;

