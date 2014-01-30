define(['knockout', 'app/store/Employee'], function(ko, store) {
    return function() {
        this.employees = function(kind, key) {
            return store.employees[ko.unwrap(kind)].call(store.employees, ko.unwrap(key));
        };

    };
});
