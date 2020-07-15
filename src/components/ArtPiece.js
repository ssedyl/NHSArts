import React, { Component } from 'react'
import ArtPieceModal from './ArtPieceModal';
import M from 'materialize-css';

class ArtPiece extends Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems, {});
        });
      
      }
    
  render(){
    // console.log(this.props);
    const { artpieces } = this.props;
    const artpiecesList = artpieces.map(artpiece => {
        return (
            <div className="artpieceframe col s3" key={artpiece.id}>
                <div className="card">
                    <div className="card-image">
                    <img src={"images/sample.jpg"}/>
                    <span className="card-title">{artpiece.artTitle}</span>
                    </div>
                    <div className="card-content">
                        <div>Author: {artpiece.author} </div>
                        <div>Genre: {artpiece.genre} </div>
                    </div>
                    <div className="card-action">
                        <ArtPieceModal artURL="images/sample.jpg" artID={artpiece.id} artList={artpieces}></ArtPieceModal>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            { artpiecesList }
        </div>
    )
  }
}

export default ArtPiece
