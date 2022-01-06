const express = require('express');
const threadController = require('../controllers/threadController');

const router = express.Router();
const { createPost, getUpcomingEvents } = threadController;

router.post('/', createPost, (req, res) => {
  return res
    .status(200)
    .json({
      eventName: res.locals.eventName,
      threadData: res.locals.threadData,
    });
});

router.get('/upcoming', getUpcomingEvents, (req, res) => {
  return res
    .status(200)
    .json({thread: res.locals.upcomingEvents})
})

module.exports = router;
