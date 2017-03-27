import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BugReportForm from '../components/BugReportForm';
import axios from 'axios';

const createGithubIssue = ({ title, description, email }) =>
  axios.post('/api/issues', { title, description, email })
  .then(() => browserHistory.push('/'))
  .catch(console.error)

class BugReportContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    createGithubIssue(this.state)
  }

  render() {
    return (
      <div className="sm-col-8">
        <h1>Run Lines: Report A Bug</h1>
        <BugReportForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default BugReportContainer;
