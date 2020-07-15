import React, { Component } from 'react'
import ArtPiece from './ArtPiece';
import M from 'materialize-css';

class BrowseArt extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    });  
  }

  state = {
    artpieces : [
      {id: 1, artTitle: 'A1', author:'Author1', description:'Description for art piece 1', genre:'abstract', discussion:'comment here'},
      {id: 2, artTitle: 'A2', author:'Author2', description:'Description for art piece 2', genre:'rennaissance', discussion:'comment here'},
      {id: 3, artTitle: 'A3', author:'Author3', description:'Description for art piece 3', genre:'impressionism', discussion:'comment here'},
      {id: 4, artTitle: 'A4', author:'Author4', description:'Description for art piece 4.', genre:'religious', discussion:'comment here'},
      {id: 5, artTitle: 'A5', author:'Author5', description:'Description for art piece 5', genre:'modern', discussion:'comment here'},
      {id: 6, artTitle: 'A6', author:'Author6', description:'Description for art piece 6', genre:'abstract', discussion:'comment here'},
      {id: 7, artTitle: 'A7', author:'Author7', description:'Description for art piece 7', genre:'classic', discussion:'comment here'},
      {id: 8, artTitle: 'A8', author:'Author8', description:'Description for art piece 8  ', genre:'abstract', discussion:'comment here'}
    ]
  }
  render(){
    return (
      <div>
        <div className="container">
          <h4 className="center">Browse Art</h4><hr></hr>
          <p className="center"><b>All of the art pieces featured below were created by none other than N-HS Arts Club members over the years!</b></p>
          <hr></hr>
          <div className="row">
            <div className="col s5">
              <label>Filter By Genre</label>
              <select className="browser-default">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="col s5">
              <label>Filter By Author</label>
              <input placeholder="Search By Author" id="" type="text"/>
            </div>
            <div className="col s2">
              <button>Submit</button>
            </div>

          </div>

          <div className="row">
          <ArtPiece artpieces={this.state.artpieces}></ArtPiece>
          </div>
        </div>

      </div>
  
    )
  }
}

export default BrowseArt