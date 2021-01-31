import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    };
    onSubmit = e=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }

    onChange = e=>this.setState({text: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="🔍Search Github Users..." 
                    className="input" 
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
