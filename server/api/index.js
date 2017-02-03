const router = require('express').Router();
const rootPath = '../../data'
const playPath = rootpath + '/plays'

router.get(`/plays/:play`, (req, res, next) => {
	res.json(require(`${playPath}/${req.params.play}/${req.params.play}.json`));
});

router.get(`/plays/:play/overview`, (req, res, next) => {
  res.json(require(`${playPath}/${req.params.play}/${req.params.play}_overview.json`));
});

router.get(`/plays/:play/characters`, (req, res, next) => {
	res.json(require(`${rootpath}/characters/${req.params.play}-characters.json`));
});

router.get(`/plays/:play/acts/:actNum/scenes/:sceneNum`, (req, res, next) => {
	const actNum = req.params.actNum;
	const sceneNum = req.params.sceneNum;
	res.json(require(`${playPath}/${req.params.play}/act_${actNum}/scene_${sceneNum}.json`));
});

module.exports = router;
