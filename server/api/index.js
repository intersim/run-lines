const axios = require('axios');
const router = require('express').Router();
const rootPath = '../../data'
const playPath = rootPath + '/plays'

router.get(`/plays/:play`, (req, res, next) => {
	res.json(require(`${playPath}/${req.params.play}/${req.params.play}.json`));
});

router.get(`/plays/:play/overview`, (req, res, next) => {
  res.json(require(`${playPath}/${req.params.play}/${req.params.play}_overview.json`));
});

router.get(`/plays/:play/characters`, (req, res, next) => {
	res.json(require(`${rootPath}/characters/${req.params.play}-characters.json`));
});

router.get(`/plays/:play/acts/:actNum/scenes/:sceneNum`, (req, res, next) => {
	const actNum = req.params.actNum;
	const sceneNum = req.params.sceneNum;
	res.json(require(`${playPath}/${req.params.play}/act_${actNum}/scene_${sceneNum}.json`));
});

router.post(`/issues`, (req, res, next) => {
	axios.post('https://api.github.com/repos/intersim/run-lines/issues', {
		title: req.body.title,
		body: req.body.body + `\n\nCreated by: ${req.body.email}`
	},
	{
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`
		}
	})
	.then(res => res.data)
	.then(bug => res.status(201).send(bug))
	.catch(next);
})

module.exports = router;
