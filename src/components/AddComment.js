import React, { Component } from 'react'

class AddComment extends Component{
    state = {
        name: null,
        comment: null
    }
  
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
    }
  render(){
    return(
      <div className="container">
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" onChange={this.handleChange} />
              <label htmlFor="comment">Comment: </label>
              <input type="text" id="comment" onChange={this.handleChange} />
              <button>Submit Comment</button>
          </form>

      </div>
    )
    }
  }
  


export default AddComment
