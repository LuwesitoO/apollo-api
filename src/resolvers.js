const { GraphQLScalarType, Kind } = require("graphql");
const resolvers = {
  Query: {
    getRoadCorridors: async (_, { app_id, app_key }, { dataSources }) => {
      try {
        const roadCorridors =
          await dataSources.tflAPI.getRoadCorridors(app_id,app_key);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled all corridors for road`,
          roadCorridors,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          roadCorridors: null,
        };
      }
    },

    getAllArrivals: async (_, { app_id, app_key }, { dataSources }) => {
      try {
        const allArrivals =
          await dataSources.tflAPI.getAllArrivals(app_id,app_key);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled all Arrivals`,
          allArrivals,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          allArrivals: null,
        };
      }
    },

    getLineByMode: async (_, { app_id, app_key }, { dataSources }) => {
      try {
        const lineByMode =
          await dataSources.tflAPI.getLineByMode(app_id,app_key);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled all Lines by mode`,
          lineByMode,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          lineByMode: null,
        };
      }
    },

    getStatusByMode: async (_, { app_id, app_key }, { dataSources }) => {
      try {
        const statusByMode =
          await dataSources.tflAPI.getStatusByMode(app_id,app_key);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled status by mode`,
          statusByMode,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          statusByMode: null,
        };
      }
    },

    getRouteByMode: async (_, { app_id, app_key }, { dataSources }) => {
      try {
        const routeByMode =
          await dataSources.tflAPI.getRouteByMode(app_id,app_key);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled status by mode`,
          routeByMode,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          routeByMode: null,
        };
      }
    },
  },
  RoadCorridors: {
    type: (parent) => parent["$type"],
  }, 
  AllArrivals: {
    type: (parent) => parent["$type"],
  }, 
  Timing: {
    type: (parent) => parent["$type"],
  }, 
};

module.exports = resolvers;
