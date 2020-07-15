import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <div className="container">
          <h4 className="center">Welcome to Nowheresville Highschool's Arts Club!</h4>
          <hr></hr>
          <p className="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="row">
            <div className="col s4 center">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">ABOUT US AND THIS WEBSITE</span>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card-action">
                <NavLink to='/about'>Click to learn about us!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">BROWSE OUR CLUB MEMBERS' ART</span>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card-action">
                  <NavLink to='/browseart'>Click to browse our art!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s4 center">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">APPLY TO JOIN THE CLUB</span>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card-action">
                  <NavLink to='/submitart'>Click to join our club!</NavLink>
                </div>
              </div>
            </div>
            <div className="col s12 center">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">SUGGESTIONS AND COMMENTS</span>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card-action">
                  <NavLink to='/suggestions'>Click here to give us your suggestions and comments!</NavLink>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
  
    )
}

export default Home