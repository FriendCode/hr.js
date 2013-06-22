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
        "logLevels": {},

        // Base url
        "baseUrl": "/",

        // Static files directory (relative to baseUrl)
        "staticDirectory": "static",

        // Configurations for ressources loading
        "ressources": {
            /* Default loader */
            "loader": "http"
        },

        // i18n
        "defaultLocale": "en",

        extend: function() {
            var args = Array.prototype.slice.call(arguments, 0);
            args.splice(0,0, Config);
            _.deepExtend.apply(_, args);
        }
    };

    return Config;
});