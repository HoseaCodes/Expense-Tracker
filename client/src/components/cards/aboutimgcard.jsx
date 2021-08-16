import React from 'react';

const AboutImgCard = ({ about }) => {
    return (
        <>
            <div class="col-md-4 col-xl-3">
                <div class="card bg-c-blue order-card">
                    <div class="card-block" style={{ height: '200px', backgroundSize: 'contain', backgroundImage: `url(${about.img})` }}>
                    </div>
                </div>
                <h3 className="mt-2" style={{ textAlign: 'center' }}>{about.title}</h3>
            </div>

        </>
    )
}

export default AboutImgCard;