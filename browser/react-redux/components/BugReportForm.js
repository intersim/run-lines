import React, { Component } from 'react';

const BugReportForm = ({ handleChange, handleSubmit }) => (
  <form className="mt2 sm-col-12" onChange={handleChange} onSubmit={handleSubmit}>
  {['title', 'description', 'email'].map(
    type => <span key={type}>
        <label className="block sm-col-12" htmlFor={type}>{type.slice(0,1).toUpperCase() + type.slice(1)}</label>
        <input className="block mb2 field sm-col-12" type="text" name={type} />
      </span>
  )}
    <button type="submit" className="btn btn-outline black mr2">Submit</button>
  </form>
)

export default BugReportForm;
