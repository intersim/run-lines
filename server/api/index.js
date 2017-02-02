const router = require('express').Router();

const toc = require('../../data/plays/toc.json');

toc.forEach(play => {
	router.get(`/plays/${play}`, (req, res, next) => {
		res.json(require(`../../data/plays/${play}.json`));
	});

	router.get(`/plays/${play}/acts/:actNum/scenes/:sceneNum`, (req, res, next) => {
		const actNum = req.params.actNum;
		const sceneNum = req.params.sceneNum;
		res.json(require(`../../data/plays/${play}/act_${actNum}/scene_${sceneNum}.json`));
	});

	router.get(`/plays/${play}/characters`, (req, res, next) => {
		res.json(require(`../../data/characters/${play}-characters.json`));
	});
});

module.exports = router;
