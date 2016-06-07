import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term} //controlled component, value set by 'state'
          onChange={(poopoo) => this.onInputChange(poopoo.target.value) } /> <br />
        Search Results for : {this.state.term}
      </div>

    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}

export default SearchBar;
