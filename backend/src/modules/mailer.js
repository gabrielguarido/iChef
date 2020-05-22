const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host, port, user, pass} = require('../config/mail.json');

const transport = nodemailer.createTransport({
  host: host,
  port: port,
  auth: {
    user: user,
    pass: pass,
  },
});

transport.use(
  'compile',
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./backend/src/resources/mail/'),
    },
    viewPath: path.resolve('./backend/src/resources/mail/'),
    extName: '.html',
  }),
);

module.exports = transport;
