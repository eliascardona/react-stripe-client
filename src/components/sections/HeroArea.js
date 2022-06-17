import React from 'react'

export const HeroArea = () => {
  return (
    <>
        <div id="home" className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-self-center">
                    <div className="left-content">
                        <div className="content">
                        <h1 className="title">Learn to code just for <del>$297</del> $97</h1>
                        <p className="subtitle">
                            Effects present letters inquiry no an removed or friends. Desire behind
                            latter me though in. Supposing
                            shameless am engrossed itatibus additions.
                        </p>
                        <div className="links">
                            <button className="btn btn-dark btn-lg">Buy now</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 order-first order-lg-last">
                        <div className="right-img">
                            <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/eliascardona.appspot.com/o/w3.png?alt=media&token=51719061-0534-4902-a800-e79a71f3510c" alt="product picture" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}