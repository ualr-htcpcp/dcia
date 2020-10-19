const mongoose = require('mongoose')
mongoose.Promise =  global.Promise

const connect = () => mongoose.connect('mongodb+srv://dciaAdmin:Vz074buWKDWcVZM9@cluster0.y308q.mongodb.net/dcia_test?retryWrites=true&w=majority')

module.exports =  connect