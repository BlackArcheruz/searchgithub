import Fragment from 'react';
import spinner from '../layout/spinner.gif';

const Loading = () => {
    return (
        <Fragment>
        <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }}/>
        </Fragment>
    )
}

export default Loading;