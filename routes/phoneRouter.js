const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();

phoneRouter
  .route('/')
  .get(phoneController.getPhone)
  .post(phoneController.createPhone);

module.exports = phoneRouter;
