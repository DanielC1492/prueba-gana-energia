const router = require('express').Router();
const userRouter = require('./Routers/userRouter');
const productRouter = require('./Routers/productRouter')

router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router;