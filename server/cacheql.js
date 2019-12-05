const redis = require("redis");

let redisHost;
let redisPort;
let redisAuth;

let timeToLive;

let client;

const cacheQL = {};

cacheQL.set = data => {
  if (data.redisHost) redisHost = data.redisHost;
  if (data.redisPort) redisPort = data.redisPort;
  if (data.redisAuth) redisAuth = data.redisAuth;
  if (data.timeToLive) timeToLive = data.timeToLive;
};

cacheQL.auth = () => {
  client = redis.createClient({
    port: redisPort,
    host: redisHost
  });

  client.auth(redisAuth, function(err, response) {
    if (err) {
      throw err;
    }
    console.log("Redis Client Authenticated");
  });
};

cacheQL.checkify = (req, res, next) => {
  // Checks the query if it is inside the cache
  client.GET(req.body.query, function(err, response) {
    //should we have the developer specify to store it in req.body?
    if (err) {
      throw err;
    } else {
      // The query is not inside the cache
      if (response === null) {
        res.locals.cache = null;
        return next();
      } else {
        // the query is in the cache
        // saves the result in cache variable in res.locals
        // to be accessible in the next middleware
        res.locals.cache = JSON.parse(response);
        return next();
      }
    }
  });
};

// Need to figure out how to go to db then go back here to save the query and result to cache
// Create another function (cachify)
// Which will be called after the endpoint middleware (like database)
// Then call said function to check if cache is null
// If null then saves query and result in cache

cacheQL.cachify = (req, res, next) => {
  //This is a case where the query doesn't exist in the cache
  //In the previous step the user must save the query and the querry response from the initial query to the db
  //The query - res.locals.query
  //The response of the query (querryResponse) - res.locals.queryResponse

  if (res.locals.cache === null) {
    const query = req.body.query;
    const queryResponse = res.locals.queryResponse;

    client.SET(query, JSON.stringify(queryResponse), function(err, response) {
      if (err) {
        throw err;
      } else {
        client.EXPIRE(query, timeToLive);

        return next();
      }
    });
  } else {
    return next();
  }
};

module.exports = cacheQL;