import React, { useState,Fragment } from "react";
import PropTypes from "prop-types";


const useSearch = ( initialCategory, options ) => {

  const [category, setCategory] = useState(initialCategory);

  const SelectNews = () => (
    <Fragment>
    <select 
    className="form-control d-inline-block w-75 p-2 m-3" 
    value={category} 
    onChange={ e => setCategory(e.target.value)}>

      {options.map((option) => (

        <option 
        key={option.value} 
        value={option.value}>

          {option.label}

        </option>
      ))}

    </select>
    <input type="submit" value="Search!" className="btn bg-warning p-2 m-1" />
    </Fragment>
  );

  return [category, SelectNews];
};

useSearch.propType = {
  initialCategory: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default useSearch;
