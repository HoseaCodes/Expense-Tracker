import React from 'react';

const AboutCard = ({ about }) => {
    return (
        <>
            <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                    <div className="icon">
                        <i className="fa fa-desktop"></i>
                    </div>
                    <div className="feature-content">
                        <h5>{about.title}</h5>
                        <p className="mb-0 text-muted ">{about.description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutCard;