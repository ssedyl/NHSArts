import React, { Component } from 'react'

class Comment extends Component{
  
  render(){
    const { comments } = this.props;
    const commentListNew = comments.map(comment => {
      return (
        <div className="col s12 center" key={comment.commentID}>
          <div>
            Name: {comment.name}
          </div>
          <div>
            Comment: {comment.comment}
          </div><br></br>
        </div>
    
      )
    })
    return(
      <div className="container">
        {commentListNew}
      </div>
    )
    }
  }
  


export default Comment
