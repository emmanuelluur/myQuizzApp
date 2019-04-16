/**
 * Written by Emmanuel Lucio Urbina
 */
const Sequelize = require('sequelize');
const Operators = Sequelize.Op; // Operators like or, like, see more in documents
const Model = Sequelize.Model; // ORM MODELS

const sequelize = new Sequelize({  // CONFIG DB
	dialect: 'sqlite',
	storage: './db/quizzez.sqlite',
	logging: false
});

//	Modelo quizz

class Quiz extends Model{}
Quiz.init({
	// Attributes
	question : {
		type: Sequelize.STRING,
		unique: {msg : "Ya Existe Pregunta"},
		validate: {notEmpty : {msg : "La Pregunta no puede estar vacía"}}
	},
	answer : {
		type: Sequelize.STRING,
		validate: {notEmpty : {msg : "La Respuesta no puede estar vacía"}}
	}
},{
	sequelize,
	modelName: 'Quiz'
  // options
});


//	sync table, se recomiendan las migraciones para proyectos grandes

sequelize.sync({force:true}) // use {force:true} para truncar la tabla
.then(() => Quiz.count())
.then(count => {
	if(!count){
		return Quiz.bulkCreate([
		{
			question: "Capital de Italia",
			answer: "Roma"
		},
		{
			question: "Capital de Francia",
			answer: "París"
		},
		{
			question: "Capital de España",
			answer: "Madrid"
		},
		{
			question: "Capital de Portugal",
			answer: "Lisboa"
        }])
        .then( c => console.log(`  DB created with ${c.length} elems`))
	} else {
        return console.log(`  DB exists & has ${count} elems`);
    }
})
.catch(err => { console.log(err )});

module.exports = {Operators, sequelize,  Quiz}



