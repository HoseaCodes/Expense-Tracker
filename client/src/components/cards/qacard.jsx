import React from 'react';

const QACard = ({ qa }) => {
    return (
        <>
            <div className="card">
                <div className="card-header p-0" id={`${qa.id}`} role="tab">
                    <h2 className="mb-0">
                        <button
                            href={`#${qa.href}`}
                            className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            aria-expanded="false"
                            aria-controls={`${qa.href}`}>
                            <p className="mb-0">{qa.question}</p>
                            <i className="fa" aria-hidden="true"></i>
                        </button>
                    </h2>
                </div>
                <div className="collapse" id={`${qa.href}`} role="tabpanel" aria-labelledby={`${qa.id}`}>
                    <div className="card-body py-3 px-0">
                        <p>{qa.answer}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QACard;