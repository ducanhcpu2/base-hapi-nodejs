'use strict';
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const {sequelize} = require("./app/CommonBase/DBConnection/MysqlConnection")
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    await server.start();
    require('./app/Routes')(server);
    //require('./app/models/index')(sequelize);
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


init()
