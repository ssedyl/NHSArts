import React from 'react';

const SubmitArt = () => {
    return (
        <div>
        <div className="container">
          <h4 className="center">Join the N-HS Arts Club!</h4>
          <hr></hr>
          <p className="center"><b>Please use the form below to fill out an application to join the club!</b></p>
          <hr></hr>

          <form>
            <label>Student Number: </label>
              <input type="text"/>
              <label>Name: </label>
              <input type="text"/>
              <label>Student Email: </label>
              <input type="text"/>
              <label>Please tell us why you want to join and how you heard of the club:</label>
              <input type="text"/>

              <button>Submit Your Application</button>
          </form>


        </div>
      </div>
  
    )
}

export default SubmitArt