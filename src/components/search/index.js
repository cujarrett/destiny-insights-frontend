import React from "react"
import PropTypes from "prop-types"
import SearchBar from "material-ui-search-bar"
import "./style.css"

export const Search = ({ setSearchTerms }) => {
  const enableAutoFocus = document.documentElement.clientWidth > 400
  return (
    <div className="container-search">
      <div className="search-bar">
        <SearchBar
          autoFocus={enableAutoFocus}
          onChange={(searchValue) => setSearchTerms(searchValue)}
          onCancelSearch={() => setSearchTerms("")}
          placeholder="Search by mod name or type ..."
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  setSearchTerms: PropTypes.func
}
