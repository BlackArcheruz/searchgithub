import React from 'react'

const Alert = ({alert, onClick}) => {

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg} <button className='btn-x' onClick={onClick} style={{border: 'none',outline: 'none'}}><i className="fas fa-times"></i></button>
            </div>
        )
    )
}

export default Alert
