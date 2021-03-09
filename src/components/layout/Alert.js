import React from 'react'

const Alert = ({alert, onClick}) => {

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg} <button onClick={onClick} className='btn btn-dark btn-x'><i className='fas fa-times'/></button>
            </div>
        )
    )
}

export default Alert
