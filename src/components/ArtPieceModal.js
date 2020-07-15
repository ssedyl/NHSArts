import React, { Component } from 'react';

class ArtPieceModal extends Component{

  
  render(){
    return(
        <div>
          <a className="waves-effect waves-light modal-trigger" href={"#modal" + this.props.artID}>DETAILS</a>
          
          <div id={"modal" + this.props.artID} className="modal">
            <div className="modal-content">
              
              <h5>{this.props.artList[this.props.artID-1].artTitle}</h5>
              <hr></hr>
              <img src={this.props.artURL} className="resizeImage" />
              <br></br>

              <p>{"Created By: " + this.props.artList[this.props.artID-1].author}</p>
              <p>{this.props.artList[this.props.artID-1].genre}</p>
              <p>{this.props.artList[this.props.artID-1].description}</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Dismiss</a>
            </div>
          </div>
        </div>

    )
    }
}


export default ArtPieceModal
