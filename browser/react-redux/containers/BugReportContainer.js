import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BugReportForm from '../components/BugReportForm';

const createGithubIssue = ({ title, description, email }) =>
  fetch('/api/issues', {
    method: 'POST',
    body: { title, description, email }
  })
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
      <div>
        <BugReportForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          description={this.state.description}
          email={this.state.email}
        />
      </div>
    )
  }
}

export default BugReportContainer;
