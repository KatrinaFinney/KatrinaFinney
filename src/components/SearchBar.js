import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Search, Header, Image, Label, Grid } from 'semantic-ui-react'
import logo from './logo.png';
import './SearchBar.css';



class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term:event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };
    
    

render() {
    return (
      <div className="search-bar ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
           <Image  size='tiny' avatar spaced='right' src={logo}/>
           SugarCube
           <br/>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
               placeholder="Search..."/>
           
          </div>
        </form>
      </div>
    );
  }
}





export default SearchBar;