const Router = require('express');
const router = new Router();
const lectorsController = require('../controllers/lectorsController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/registration', lectorsController.registration);
router.post('/login', lectorsController.login);
router.get('/auth', authMiddleware, lectorsController.check);

module.exports = router;