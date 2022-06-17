import React from 'react'

export const FAQ = () => {
  return (
    <>
        <section id="faq" className="faq">
            <div className="container">
                <h2 className="title">Asked Questions</h2>
                <p>Prepared is me marianne pleasure likewise debating. Hissecure called esteem praise.</p>

                <div className="section inset">
                    <div className="wide-block pt-2 pb-2" id="accordion-1">
                        <div className="panel">
                            <div className="panel-heading">
                                <h4 data-toggle="collapse" aria-expanded="false" data-target="#one" aria-controls="one"
                                className="panel-title">
                                How can I order my favrourate product ?
                                </h4>
                            </div>
                            <div id="one" className="panel-collapse collapse" aria-labelledby="one" data-parent="#accordion-1">
                                <div className="panel-body">
                                    <p>Place are decay men hours tiled. If or of yet throwing friendly required. Marianne interest in.</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-heading">
                                <h4 data-toggle="collapse" aria-expanded="false" data-target="#two" aria-controls="one"
                                className="panel-title">
                                How can I order my favrourate product ?
                                </h4>
                            </div>
                            <div id="two" className="panel-collapse collapse" aria-labelledby="one" data-parent="#accordion-1">
                                <div className="panel-body">
                                    <p>Place are decay men hours tiled. If or of yet throwing friendly required. Marianne interest in.</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-heading">
                                <h4 data-toggle="collapse" aria-expanded="false" data-target="#three" aria-controls="one"
                                className="panel-title">
                                How can I order my favrourate product ?
                                </h4>
                            </div>
                            <div id="three" className="panel-collapse collapse" aria-labelledby="one" data-parent="#accordion-1">
                                <div className="panel-body">
                                    <p>Place are decay men hours tiled. If or of yet throwing friendly required. Marianne interest in.</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-heading">
                                <h4 data-toggle="collapse" aria-expanded="false" data-target="#four" aria-controls="one"
                                className="panel-title">
                                How can I order my favrourate product ?
                                </h4>
                            </div>
                            <div id="four" className="panel-collapse collapse" aria-labelledby="one" data-parent="#accordion-1">
                                <div className="panel-body">
                                    <p>Place are decay men hours tiled. If or of yet throwing friendly required. Marianne interest in.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}