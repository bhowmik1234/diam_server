import express from 'express';
import { RequestMoney, UserReq, allRequestMoney, allrequest, createMoneyTransfer, getMoneyTransfers } from '../controllers/moneyTransferController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createMoneyTransfer);
router.get('/', authMiddleware, getMoneyTransfers);
router.post('/money-requested', authMiddleware, RequestMoney);
router.get('/user-money-requested', authMiddleware, UserReq);
router.get('/request', allrequest);
router.get('/all-request-money', authMiddleware, allRequestMoney);

export default router;