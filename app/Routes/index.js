

module.exports = function(server) {
    require('../Routes/UsersRoutes')(server);

    require('../Routes/RolesHandler')(server);

    require('../Routes/ReportsHandler')

}



