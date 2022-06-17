import React from 'react'
import { YoutubeVideo } from '../utils/YoutubeVideo'

export const AboutArea = () => {
  return (
    <>
        <section className="about" id="about">
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-10 col-lg-8">
                        <h2 className="title">Why Ponno is Best</h2>
                        <p>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                </div>
                <YoutubeVideo src="https://www.youtube.com/embed/1gyTUHP6ne8" />
            </div>
        </section>
    </>
  )
}