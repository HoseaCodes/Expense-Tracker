import React from 'react';
import AboutCard from '../../components/cards/aboutcard';
import AboutImgCard from '../../components/cards/aboutimgcard';
import Footer from '../../components/footer';
import Nav from '../../components/nav/nav';
import { aboutCards, aboutImgCardInfo } from '../../data/about';
import './about.css';

const About = () => {
    return (
        <>
            <Nav />
            <section className="bg-about">
                <div className="container text-white hero-title">
                    <div>
                        <h3 className="firsthero-title"> We are a passionate finance</h3>
                        <h2 className="secondhero-title">
                            secure your future
                        </h2>
                    </div>
                    <img className="app-screen" src="https://i.imgur.com/n6SmjyQ.png" alt="app" />
                </div>
            </section>
            <div className="container pb-5">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="img-fluid" alt="Image" />
                                            <div className="img-overlay bg-dark"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mt-4 pt-2 text-right">
                                            <a href="javascript:void(0)" className="btn btn-info">Read More <i className="mdi mdi-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="img-fluid" alt="Image" />
                                            <div className="img-overlay bg-dark"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" className="img-fluid" alt="Image" />
                                            <div className="img-overlay bg-dark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                        <div className="section-title ml-lg-5">
                            <h3 className="about-header-color mb-3">About Us</h3>
                            <h4 className="about-subheader-color mb-4">
                                Our mission is to <br />
                                make your life easier.
                            </h4>
                            <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>
                            <br />
                            <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique metus. Maecenas id nulla lectus. Nulla facilisi. Vivamus mauris neque, sagittis et lacus sed, pellentesque malesuada dui. Praesent sollicitudin leo quam, id pulvinar diam dignissim eget. Suspendisse fringilla leo quis dignissim ultricies. Sed gravida, turpis ac consequat imperdiet, est metus convallis enim, ac blandit nisl nulla a mi. Fusce fringilla ipsum id odio porttitor, nec suscipit arcu pulvinar. Cras quis enim at felis lobortis tempor mattis vel metus. Sed tincidunt risus nibh, eget consectetur turpis imperdiet ac. Proin laoreet ornare sem, non malesuada est suscipit in. Vestibulum vitae cursus neque. Nam consequat posuere metus bibendum ultricies.</p>
                            <br />
                            <p className="text-muted mb-0">Morbi ultrices elementum tortor at sodales. Curabitur fermentum maximus eros, et pretium nibh vehicula at. Maecenas sollicitudin vestibulum eros, id sollicitudin ex laoreet sit amet. Mauris malesuada nulla lacus, sed hendrerit eros fringilla vel. Proin varius neque ac mauris vulputate feugiat. Pellentesque at tempus sem, quis varius urna. Pellentesque sit amet fermentum tellus, aliquam varius nisi. Sed quis vestibulum nunc, eget accumsan odio. Nunc pulvinar bibendum nisl, ut facilisis ligula luctus id. Sed scelerisque sem est, et tempor urna rhoncus a. Quisque lectus nisi, porttitor sed lectus non, accumsan rutrum mi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-about pt-5 mb-5">
                <div class="container" style={{ height: '100%' }}>
                    <div class="row" style={{ height: 'inherit', alignContent: 'center' }}>
                        {aboutImgCardInfo.map((about) => {
                            return (
                                <AboutImgCard about={about} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="section services-section mb-5" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2 className="about-header-color">What We Do</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {aboutCards.map((about) => {
                            return (
                                <>
                                    <AboutCard about={about} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;