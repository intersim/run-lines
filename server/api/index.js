const router = require('express').Router();

router.get(`/plays/:play`, (req, res, next) => {
	res.json(require(`../../data/plays/${req.params.play}.json`));
});

router.get(`/plays/:play/characters`, (req, res, next) => {
	res.json(require(`../../data/characters/${req.params.play}-characters.json`));
});

router.get(`/plays/:play/acts/:actNum/scenes/:sceneNum`, (req, res, next) => {
	const actNum = req.params.actNum;
	const sceneNum = req.params.sceneNum;
	res.json(require(`../../data/plays/${req.params.play}/act_${actNum}/scene_${sceneNum}.json`));
});

module.exports = router;
