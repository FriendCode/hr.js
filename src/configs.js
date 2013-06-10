define(function(args) {
    var Config = {
        // Revision
        "revision": 0,

        // Arguments
        "args": {},

        // Yapp version
        "version": "0.0.1",

        // Log level
        // "log", "debug", "warn", "error", "none"
        "logLevel": "log",

        // Base url
        "baseUrl": "/",

        // Static files directory (relative to baseUrl)
        "staticDirectory": "static",

        // Configuration for routing
        "router": {
            "mode": "hashs" //"html5" or "hashs"
        },

        // Configurations for ressources loading
        "ressources": {
            /* Default loader */
            "loader": "http"
        },

        extend: function() {
            var args = Array.prototype.slice.call(arguments, 0);
            args.splice(0,0, Config);
            _.deepExtend.apply(_, args);
        }
    };

    return Config;
});