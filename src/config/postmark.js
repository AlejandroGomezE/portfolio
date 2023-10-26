var postmark = require('postmark');

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);

export default client;
