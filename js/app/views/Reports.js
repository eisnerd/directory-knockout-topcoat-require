define(['underscore', 'knockout'], function(_, ko) {
    return function(data) {
        _.extend(this, data);
        this.searchKey = ko.observable(this.id);
        this.searchKind = ko.observable("findByManager");
        this.searchList = ko.observable("Employees");

    };
});
