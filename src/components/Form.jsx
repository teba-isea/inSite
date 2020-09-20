import React from "react";
import styles from "./Form.module.css";
import useSearch from "../hooks/useSearch";
import PropTypes from "prop-types";

const Header = ({setCategory}) => {

  const options = [
    { value: "general", label: "General"},
    { value: "business", label: "Business"},
    { value: "entertainment", label: "Entertainment"},
    { value: "health", label: "Health"},
    { value: "science", label: "Science"},
    { value: "sports", label: "Sports"},
    { value: "technology", label: "Technology"}
  ]  

  const [category, SelectNews] = useSearch("general",options);

  const upCategory = e =>{
    e.preventDefault();
    setCategory(category)
  }

  return (
    <div className={`row ${styles.searcher} justify-content-center`}>
      <div className={`col sm-12 md-6 ${styles.mw500}`}>
        <form className="form-group" onSubmit={upCategory}>
          <h2 className={styles.heading}>Find News by Category</h2>
          <SelectNews />
        </form>
      </div>
    </div>
  );
};

Header.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default Header;
