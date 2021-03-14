import {useContext, useState} from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = ({setAlert})=>{
    const githubContext = useContext(GithubContext)

    const {searchUsers, clearUsers,users} = githubContext;

    const [text, setText] = useState('');

    const onSubmit = e=>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something', 'light')
        }else{
            searchUsers(text);
            setText('')
        }
    }

    const onChange = e=>setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="🔍Search Github Users..." 
                    className="input" 
                    value={text}
                    onChange={onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>
                </form>
                {users.length > 0 && <button className="btn btn-light btn-block" style={{transition: 'none'}} onClick={clearUsers}>Clear</button>} 
            </div>
        )
}

export default Search
