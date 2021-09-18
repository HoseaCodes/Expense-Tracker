import React from 'react';
import QACard from '../../components/cards/qacard';
import Footer from '../../components/footer';
import Nav from '../../components/nav/nav';
import { QA } from '../../data/faq';
import './faq.css';

const FAQ = () => {
    return (
        <>
            <Nav />
            <section className="ftco-section ftco-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-md-last">
                            <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{ backgroundImage: `url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)` }}>
                                <a href="#" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                                    <span className="fa fa-play"></span>
                                </a>
                            </div>
                            <div className="d-flex mt-3">
                                <div className="img img-2 mr-md-2" style={{ backgroundImage: 'url(https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?cs=srgb&dl=pexels-pixabay-265087.jpg&fm=jpg)' }}></div>
                                <div className="img img-2 ml-md-2" style={{ backgroundImage: 'url(https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading-section mb-5 mt-5 mt-lg-0">
                                <h2 className="mb-3">Frequently Asks Questions</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div id="accordion" className="myaccordion w-100" aria-multiselectable="true">
                                {QA.map((qa) => {
                                    return (
                                        <QACard qa={qa} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FAQ;