var express = require('express');
var router = express.Router();
const { Timetable, Sport, User } = require('../models');

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

  const sortedTimetables = Object.entries(formattedTimetables).sort(
    ([a], [b]) => a.localeCompare(b),
  );
  const formattedSports = sports.map((i) => i.name);

  res.render('index', {
    timetables: sortedTimetables,
    sports: formattedSports,
  });
});

router.get('/about-us.html', async function (req, res, next) {
  const trainers = await User.findAll({ where: { role: 'trainer' } });
  res.render('about-us', { trainers });
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
  const sortedTimetables = Object.entries(formattedTimetables).sort(
    ([a], [b]) => a.localeCompare(b),
  );

  const formattedSports = sports.map((i) => i.name);

  res.render('schedule', {
    timetables: sortedTimetables,
    sports: formattedSports,
  });
});

router.get('/add-trainer.html', async function (req, res, next) {
  res.render('add-trainer');
});

router.post('/add-trainer', async function (req, res, next) {
  await User.create({ ...req.body, role: 'trainer' });
  res.redirect('/about-us.html');
});

module.exports = router;
