require.config({

    baseUrl: 'js/lib',

    paths: {
        knockout: 'knockout-3.0.0.debug',
        app: '../app',
        tpl: '../tpl'
    },

    map: {
        '*': {
            'app/store/Employee': 'app/store/memory/Employee'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['app/utils/knockout', 'app/utils/navigate'], function (ko, navigate) {

    ko.bindingHandlers.module.baseDir = "app/views";
    ko.amdTemplateEngine.defaultPath = "tpl";
    ko.amdTemplateEngine.defaultSuffix = ".html";

    setTimeout(function() {
        navigate.to("Home");
    }, 0);

});