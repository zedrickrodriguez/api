'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;

// Conexión Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://zedrickr:luis1212@api-shard-00-00-8etmr.mongodb.net:27017,api-shard-00-01-8etmr.mongodb.net:27017,api-shard-00-02-8etmr.mongodb.net:27017/test?ssl=true&replicaSet=api-shard-0&authSource=admin&retryWrites=true', { useMongoClient: true})
		.then(() => {
			console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente!!");
		
			// Crear servidor
			app.listen(port, () => {
				console.log("Servidor corriendo en http://localhost:3800");
			});
		})
		.catch(err => console.log(err));
//hola