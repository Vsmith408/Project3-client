import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Find your next adventure"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-light mt-3 mb-5">
        Find Adventure
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;