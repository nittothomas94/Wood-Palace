const express = require('express');
const porductRoute = require('../routes/product-route');
const uploadImageRoute = require('../routes/image-route');
const router = express.Router();

router.use('/product', porductRoute);
router.use('/upload-img', uploadImageRoute);

module.exports = router;
