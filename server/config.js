const Joi = require('joi');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env.local')
});

const config = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_url: process.env.REACT_APP_REDIRECT_URL,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL
};

const schema = Joi.object({
  client_id: Joi.string().required(),
  redirect_url: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required()
});

const { error } = schema.validate(config);
if (error) throw new Error(`Schema Validation error: ${error.message}`);

module.exports = config;
