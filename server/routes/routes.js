import express from 'express';
import Controllers from '../controllers/controllers.js';

const router = express.Router();

router.get('/events', Controllers.getEvents);
router.get('/events/:id', Controllers.getEventById);
router.get('/locations', Controllers.getLocations);
router.get('/locations/:id', Controllers.getLocationById);

export default router;
