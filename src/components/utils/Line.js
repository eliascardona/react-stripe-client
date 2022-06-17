import React from 'react'
import { InfoModal } from './InfoModal'
import { YoutubeVideo } from './YoutubeVideo'

export const Line = ({ text, src }) => {
    const blockStyle={
        cursor: 'pointer'
    }
    return (
        <div className="section inset mt-1">
            <div className='wide-block pb-1 pt-1' style={blockStyle} data-toggle="modal" data-target="#modal">
                <div className='d-inline'>
                    <ion-icon name="caret-forward-circle-outline"></ion-icon>
                </div>
                <div className='ml-3 d-inline'>{text}</div>
            </div>
            <InfoModal modalId="modal" modalTitle={text}>
                <YoutubeVideo src={src}/>
            </InfoModal>
        </div>
    )
}