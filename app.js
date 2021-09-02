const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
var handlebars = require('express-handlebars');
const over = require('method-override')
app.engine('handlebars',handlebars({defaultLayout:'mainLayout'}))
app.set('view engine', 'handlebars') 
app.use(bodyParser.urlencoded({extended:true}))
app.use(over('X-HTTP-Method-Override'))
app.use(over('_method', {methods:['GET', 'POST', 'PUT', 'DELETE']}))
const moeda = require('./moeda')
app.get('/aluno/todos', (req, res) => {
	let alunos = [
		{'nome': 'Bruno'},
		{'nome': 'McFly'},
		{'nome': 'Shigueru'},
		{'nome': 'Minoru'},
		{'nome': 'Davis'}
	]
	res.json(alunos)})
app.get('/moeda/:valor_real', (req, res) => {
		
		res.json(moeda.moedac)})
	
app.listen(3000, () =>{
	console.log('OK')
})
//codigo no github https://github.com/rafaelbrunos/psw2atividade5