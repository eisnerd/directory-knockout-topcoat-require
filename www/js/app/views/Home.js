define(['knockout'], function(ko) {
    return function() {
        this.searchKey = ko.observable("");
        this.searchKind = ko.observable("findByName");
        this.searchList = ko.observable("Employees");

        this.onkeypress = function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        };

    };
});
