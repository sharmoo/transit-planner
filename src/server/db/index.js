const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllLines = function (callback) {
  connection.query('SELECT * FROM service_lines', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  })

}

const getAllStations = function (callback) {
  connection.query('SELECT * FROM stations ORDER BY is_favorite desc', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  })

}

// select * from stations inner join stops on stations.id = stops.station_id where stops.line_id = 2
// In db/index.js, write a function that will query the 
//database for all of the stops found along a line, 
//according to that line's id.

//what I actually want are all from stations inner join stops
//where station.id = stops.station_id
//inner join service lines where service_lines.id = stops.line_id
//and where the service_lines id matches the given param
//then
//sort ascending


const getAllStops = function (id, callback) {
  var query = `SELECT stations.name, stations.is_favorite, stops.id, service_lines.origin_id, service_lines.destination_id FROM service_lines INNER JOIN stops ON stops.line_id = service_lines.id INNER JOIN stations ON stops.station_id = stations.id WHERE stops.line_id = ${id} ORDER BY stops.id ASC`
  connection.query(query, (error, results) => {
    if (error) {
      callback(error)
    } else {
      callback(null, results)
    }
  })
}

//update stations table is_favorite field
const updateFaveStation = function (options, callback) {
  connection.query('UPDATE stations SET is_favorite = ? WHERE name = ?', options, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, success)
    }
  })
}



module.exports = {
  getAllLines, getAllStops, updateFaveStation, getAllStations
};
