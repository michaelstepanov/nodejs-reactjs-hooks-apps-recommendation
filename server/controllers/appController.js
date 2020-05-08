const {start} = require('../helpers/common');
const logger = require('../config/winston');
const App = require('../models/app/App');
const AppError = require('../errors/AppError');
const apps = require('../data/apps');
const _ = require('lodash');

const APPS_COUNT = 3;

// http://localhost:3001/api/v1/apps?birthdate=1989-03-04&rating:gte=1&category:in[]=House%20And%20Home&category:in[]=Communication

exports.get = async (req, res) => {
  try {
    const end = start(); // TODO Remove

    const filters = Object.entries(req.query);

    const app = new App(apps);
    // Asynchronously filter the apps
    const filteredApps = await app.filterAsync(filters);
    const randomFilteredApps = _.sampleSize(filteredApps, APPS_COUNT);

    console.log(end() + ' ms'); // TODO Remove

    return res.json(randomFilteredApps);
  } catch (e) {
    logger.error('An error occurred', e);

    const [status, message] = (e instanceof AppError) ? [e.status, e.message] : [500, 'An error occurred'];

    res.status(status).json(message);
  }
};
