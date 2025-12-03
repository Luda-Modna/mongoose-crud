const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();

phoneRouter.get('/', phoneController);

module.exports = phoneRouter;