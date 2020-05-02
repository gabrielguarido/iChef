const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-gzjsu.mongodb.net/ichef?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
