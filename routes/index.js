var express = require('express');
var router = express.Router();
const { Timetable, Sport } = require('../models');

/* GET home page. */
router.get('/', (req, res) => res.redirect('/index.html'));
router.get('/index.html', async function (req, res, next) {
  const [timetables, sports] = await Promise.all([
    Timetable.findAll({ include: [Sport] }),
    Sport.findAll(),
  ]);

  const formattedTimetables = timetables.reduce((acc, time) => {
    if (!acc[time.time_start]) {
      acc[time.time_start] = {};
    }
    acc[time.time_start][time.week_day] = time;
    return acc;
  }, {});

  const formattedSports = sports.map((i) => i.name);

  res.render('index', {
    timetables: formattedTimetables,
    sports: formattedSports,
  });
});

router.get('/about-us.html', function (req, res, next) {
  res.render('about-us', { title: 'Express' });
});

router.get('/blog.html', function (req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/blog-single.html', function (req, res, next) {
  res.render('blog-single', { title: 'Express' });
});

router.get('/contact.html', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/gallery.html', function (req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/main.html', function (req, res, next) {
  res.render('main', { title: 'Express' });
});

router.get('/schedule.html', async function (req, res, next) {
  const [timetables, sports] = await Promise.all([
    Timetable.findAll({ include: [Sport] }),
    Sport.findAll(),
  ]);

  const formattedTimetables = timetables.reduce((acc, time) => {
    if (!acc[time.time_start]) {
      acc[time.time_start] = {};
    }
    acc[time.time_start][time.week_day] = time;
    return acc;
  }, {});

  const formattedSports = sports.map((i) => i.name);

  res.render('schedule', {
    timetables: formattedTimetables,
    sports: formattedSports,
  });
});

router.get('/AddAuto.html', async function (req, res, next) {
  res.render('AddAuto');
});

module.exports = router;
