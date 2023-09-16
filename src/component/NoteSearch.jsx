/* eslint-disable react/prop-types */
import React from "react";
import NoteSearchInput from "./NoteSearchInput";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
  }

  handleChangeInputSearch(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });

    this.props.keyword(this.state);
  }

  render() {
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <NoteSearchInput
              inputValue={this.state.keyword}
              handleChangeInputSearch={this.handleChangeInputSearch}
            />
          </div>
        </div>
      </>
    );
  }
}
export default NoteSearch;
