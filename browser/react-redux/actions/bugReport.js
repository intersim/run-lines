import { browserHistory } from 'react-router';

/* ========== ASYNC ========== */
export const createGithubIssue = (title, body, email) => {
	return dispatch => {
		fetch('/api/issues', { method: 'POST' })
		.then(() => browserHistory.push('/'))
		.catch(console.error)
	}
}