'use strict';

const unleash = require('./lib/server-impl');
const enableGoogleOauth = require('./examples/google-auth-hook');


console.log("Starting Unleashed using GoogleOauth");

unleash.start({
    adminAuthentication: 'custom',
    preRouterHook: enableGoogleOauth,
});
