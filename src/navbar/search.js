import React, { Component } from 'react';


export class Search extends Component {
  state = {
    Search: '',
  };
  handleForm = (e) => {
    this.setState({
      Search: e.target.value,
    });
  };
  search = (event) => {
    event.preventDefault();
    this.props.getSearch(this.state.Search);
  };
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="d-flex  justify-content-center h-100"> 
            <form class="d-flex input justify-content-center" onSubmit={this.search}>
              <input
                value={this.state.Search}
                onChange={this.handleForm}
                className=" hell" type="search" placeholder="Search" aria-label="Search"
                
              />
               <button className="btn btn-outline-warning text-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Search;