import React, { Component } from 'react';

const BugReportForm = ({ title, description, email, handleChange, handleSubmit }) => (
  <form className="mt2" onChange={handleChange} onSubmit={handleSubmit}>
  {['title', 'description', 'email'].map(
    type => <span key={type}>
        <label className="block" htmlFor={type}>{type.slice(0,1).toUpperCase() + type.slice(1)}</label>
        <input className="block mb2 field" type="text" name={type} />
      </span>
  )}
    <button type="submit" className="btn btn-outline black mr2">Submit</button>
  </form>
)

export default BugReportForm;
