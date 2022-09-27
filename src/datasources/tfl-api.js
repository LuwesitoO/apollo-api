const { RESTDataSource } = require('apollo-datasource-rest');

const APP_KEY = process.env.APP_KEY;

class TflAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.tfl.gov.uk";
  }

  getRoadCorridors(app_id,app_key) {
    return this.get(
      "Road",
      {
        app_id,
        app_key
      },
      {
      headers: {
        'app_key': APP_KEY
      }
      }
    );
  }
  
  getAllArrivals(app_id,app_key) {
    return this.get(
      "Line/central/Arrivals",
      {
        app_id,
        app_key
      },
      {
      headers: {
      'app_key': APP_KEY
      }
      },
    );
  }

  getLineByMode(app_id,app_key) {
    return this.get(
      "Line/Mode/tube",
      {
        app_id,
        app_key
      },
      {
      headers: {
      'app_key': APP_KEY
      }
      },
    );
  }

  getStatusByMode(app_id,app_key) {
    return this.get(
      "Line/Mode/tube/Status",
      {
        app_id,
        app_key
      },
      {
      headers: {
      'app_key': APP_KEY
      }
      },
    );
  }

  getRouteByMode(app_id,app_key) {
    return this.get(
      "Line/Mode/tube/Route",
      {
        app_id,
        app_key
      },
      {
      headers: {
      'app_key': APP_KEY
      }
      },
    );
  }
}

module.exports = TflAPI;