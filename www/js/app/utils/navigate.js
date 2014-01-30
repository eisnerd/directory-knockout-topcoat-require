define(['knockout', 'app/store', 'app/utils/pageslider'], function(ko, store, PageSlider) {
    var slider = new PageSlider($('body'));

    function loadModule(name, data) {
        var page = $.parseHTML('<div data-bind=\'module: "' + name + '"\'></div>')[0];
        slider.slidePage($(page), function(_page) { ko.applyBindings(data || store, page); })
    };

    ko.bindingProvider.instance.preprocessNode = function(node) {
        var href;
        if (node.nodeType == 1 && node.nodeName == "A"
            && (href = /#(.+)/.exec(node.href))) {
            var args = node.getAttribute("data-context") || "$data";
            node.setAttribute("data-bind",
                href[1] == "<" ? "click: ko.navigate.back" :
                "click: ko.navigate.to.bind(null, '" + href[1] + "', " + args + ")"
            );
        }
    };

    return ko.navigate = {
        to: loadModule,
        back: slider.back,
    };
});