import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui huge icon input">
            <input
              style={{ width: 600, maxWidth: '90vw' }}
              type="text"
              placeholder="Search adventures here"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
