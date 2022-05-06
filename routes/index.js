var express = require('express');
var router = express.Router();
const { Schedule } = require('../models');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about-us.ejs', function (req, res, next) {
  res.render('about-us', { title: 'Express' });
});
router.get('/blog.ejs', function (req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/blog-single.html', function (req, res, next) {
  res.render('blog-single', { title: 'Express' });
});
router.get('/contact.ejs', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/gallery.ejs', function (req, res, next) {
  res.render('gallery', { title: 'Express' });
});
router.get('/main.html', function (req, res, next) {
  res.render('main', { title: 'Express' });
});
router.get('/schedule.html', async function (req, res, next) {
  let Schedules = await Schedule.findAll();
  console.log(Schedules);
  res.render('schedule', { title: 'Express', Schedules });
});

router.get('/AddAuto.html', async function (req, res, next) {
  res.render('AddAuto');
});

module.exports = router;
// <body>
// <form>
//      :<input name="one"> <br/>
//
// </form>
// </body>
