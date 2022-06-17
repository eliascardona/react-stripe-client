import React from 'react'

export const YoutubeVideo = ({ src, title, margin }) => {
    return (
        <div className="text-center">
            <iframe width="87%" height="500px" src={src} title={title} className={margin} allow="gyroscope" allowFullScreen />
        </div>
    )
}