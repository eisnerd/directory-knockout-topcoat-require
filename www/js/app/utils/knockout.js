define(['knockout', 'knockout-amd-helpers'], function(ko, store, PageSlider) {
    ko.bindingHandlers["showIf"] = {
        init: ko.bindingHandlers["if"].init,
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            ko.bindingHandlers["if"].update(element, valueAccessor, allBindings, viewModel, bindingContext);
            ko.bindingHandlers["visible"].update(element, valueAccessor, allBindings, viewModel, bindingContext);
        },
    };

    return ko;
});