const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    getRoadCorridors(app_id: String!,app_key: String!): RoadCorridorsResponse!
    getAllArrivals(app_id: String!,app_key: String!): AllArrivalsResponse!
    getLineByMode(app_id: String!,app_key: String!): LineByModeResponse!
    getStatusByMode(app_id: String!,app_key: String!): StatusByModeResponse!
    getRouteByMode(app_id: String!,app_key: String!): RouteByModeResponse!
  }

  type RoadCorridorsResponse {
    code: Int!
    success: Boolean!
    message: String!
    roadCorridors: [RoadCorridors]
  }

  type RoadCorridors {
    type: String
    id: String
    displayName: String
    statusSeverity: String
    statusSeverityDescription: String
    bounds: String
    envelope: String
    url: String
  }

  type AllArrivalsResponse {
    code: Int!
    success: Boolean!
    message: String!
    allArrivals: [AllArrivals]
  }
  type AllArrivals {
    type: String
    id: Int
    operationType: Int
    vehicleId: Int
    naptanId: String
    stationName: String
    lineId: String
    lineName: String
    platformName: String
    direction: String
    bearing: String
    destinationNaptanId: String
    destinationName: String
    timestamp: String
    timeToStation: Int
    currentLocation: String
    towards: String
    expectedArrival: String
    timeToLive: String
    modeName: String
    timing: [Timing]
  }
  type Timing {
    type: String
    countdownServerAdjustment: String
    source: String
    insert: String
    read: String
    sent: String
    received: String
  }

  type LineByModeResponse {
    code: Int!
    success: Boolean!
    message: String!
    lineByMode: [LineByMode]
  }

  type LineByMode{
    id: String
    name: String
    modeName: String
    created: String
    modified: String
    serviceTypes: [ServiceTypes]
  }

  type ServiceTypes{
    name: String
  }

  type StatusByModeResponse {
    code: Int!
    success: Boolean!
    message: String!
    statusByMode: [StatusByMode]
  }

  type StatusByMode{
    id: String
    name: String
    modeName: String
    created: String
    modified: String
    lineStatuses: [LineStatuses]
    serviceTypes: [ServiceTypes]
  }

  type LineStatuses{
    lineId: String
    statusSeverity: Int
    statusSeverityDescription: String
    reason: String
    created: String
    validityPeriods: [ValidityPeriods]
    disruption: Disruptions
  }
  
  type ValidityPeriods{
    fromDate: String
    toDate: String
    isNow: Boolean
  }

  type Disruptions{
    category: String
    categoryDescription: String
    description: String
    closureText: String
  }

  type RouteByModeResponse {
    code: Int!
    success: Boolean!
    message: String!
    routeByMode: [RouteByMode]
  }

  type RouteByMode{
    id: String
    name: String
    modeName: String
    disruptions: [Disruptions]
    created: String
    modified: String
    lineStatuses: [LineStatuses]
    routeSections: [RouteSections]
    serviceTypes: [ServiceTypes]
  }

  type RouteSections{
    name: String
    direction: String
    originationName: String
    destinationName: String
    originator: String
    destination: String
    serviceType: String
    validTo: String
    validFrom: String
  }
`;

module.exports = typeDefs