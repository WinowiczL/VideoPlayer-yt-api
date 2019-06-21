import React from "react";

export class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleOnChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleOnSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.handleOnSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              onChange={this.handleOnChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
