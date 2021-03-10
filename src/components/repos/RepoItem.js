import PropTypes from 'prop-types'

const RepoItem = ({repo}) => {
    return (
        <div className="card" style={{
            borderRadius: '5px',
            boxShadow: '5px 5px 10px #888888',
            border: 'none'
        }}>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;