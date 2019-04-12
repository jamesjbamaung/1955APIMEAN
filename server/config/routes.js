//requiring quotes from the  controllers folder
const peoples = require('../controllers/peoples.js');

//this exports routes
module.exports = function (app) {
    app.get('/', function (request, response) {
        peoples.index(request, response);
    })

    app.get("/new/:name", function(request, response){
        peoples.addPerson(request, response);
    });

    app.get("/remove/:name", function(request, response) {
        peoples.removePerson(request, response);
    });

    app.get("/:name", function(request, response) {
        peoples.details(request, response);
    });
}