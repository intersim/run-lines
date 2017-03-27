import React, { Component } from 'react';

const BugReportForm = ({ handleChange, handleSubmit }) => (
  <form className="mt2 sm-col-12" onChange={handleChange} onSubmit={handleSubmit}>
    <p className="mb0">Did you find a bug? Or have a suggestion for a new feature?</p>
    <div className="mb2">
    <label className="inline" htmlFor={'title'}>Bug</label>
    <input className="inline" type="radio" value="Bug report" name="title" />
    <label className="inline ml2" htmlFor={'title'}>Suggestion</label>
    <input className="inline" type="radio" value="Feature suggestion" name="title" />
    </div>

  {['description', 'email'].map(
    type => <span key={type}>
        <label className="block sm-col-12" htmlFor={type}>{type.slice(0,1).toUpperCase() + type.slice(1)}</label>
        <input className="block mb2 field sm-col-12" type="text" name={type} />
      </span>
  )}
    <button type="submit" className="btn btn-outline black mr2">Submit</button>
  </form>
)

export default BugReportForm;
