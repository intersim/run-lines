const router = require('express').Router();

const toc = require('../../data/plays/toc.json');

toc.forEach(play => {
	router.get(`/plays/${play}`, (req, res, next) => {
		res.json(require(`../../data/plays/${play}.json`));
		// ^^ is this bad practice...?
	});

	// router.get(`/plays/${play}/acts/:actNum`, (req, res, next) => {
	// 	const actNum = req.params.actNum;
	// 	res.json(require(`../../data/characters/${play}-act-${actNum}.json`));
	// });

	router.get(`/plays/${play}/characters`, (req, res, next) => {
		res.json(require(`../../data/characters/${play}-characters.json`));
	});
});

module.exports = router;