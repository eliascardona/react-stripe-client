import React from 'react'

export const Header = () => {
    const btnStyle = {
        padding: '4px 13px 4px 13px', 
        border: 'solid 1px #f8f9fa', 
        borderRadius: '5px'
    }
    return (
        <div className="appHeader bg-dark mb-1">
            <div className="left ml-2">
                <span>brand logo</span>
            </div>
            <div className="right mr-3">
                <span style={btnStyle} data-toggle="modal" data-target="#login-form">
                    login
                </span>
            </div>
        </div>
    )
}