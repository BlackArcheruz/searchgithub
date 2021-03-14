const Alert = ({alert,removeAlert}) => {
    
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg} <button className='btn-x' onClick={removeAlert} style={{border: 'none',outline: 'none'}}><i className="fas fa-times"></i></button>
            </div>
        )
    )
}

export default Alert
