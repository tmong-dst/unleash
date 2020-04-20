'use strict';

const unleash = require('./lib/server-impl');
const enableGoogleOauth = require('./examples/google-auth-hook');

unleash.start({
    adminAuthentication: 'custom',
    preRouterHook: enableGoogleOauth,
});
