const Sequelize = require('sequelize');

const conexao = new Sequelize('english_movies','english_movies_user','sxkvwjUTUBEHJCEU5sMa939DtVESj5T0',{
	host:'dpg-chl9q2bhp8uej73uipeg-a',
	dialect:'postgres'
})

module.exports = conexao;