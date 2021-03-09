
import spinner from '../layout/spinner.gif';

const Loading = () => {
    return (
        <div>
        <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }}/>
        </div>
    )
}

export default Loading;