import React from 'react'

export const ServiceArea = () => {
    const boxStyle = {
        padding: '50px 20px 50px 20px',
        border: 'solid 2px red',
        borderRadius: '5px'
    }
    return (
    <>
        <section className="about" id="about">
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-10 col-lg-8">
                        <h2 className="title">Why Ponno is Best</h2>
                        <p>
                        Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire.
                        His secure called esteem praise.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <div style={boxStyle}>
                            <h2>High Quality Design </h2>
                            <p className="text">
                                Viewing hastily or written dearest elderly up weather. direction so sweetness.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div style={boxStyle}>
                            <h2>High Quality Design </h2>
                            <p className="text">
                                Viewing hastily or written dearest elderly up weather. direction so sweetness.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div style={boxStyle}>
                            <h2>High Quality Design </h2>
                            <p className="text">
                                Viewing hastily or written dearest elderly up weather. direction so sweetness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}