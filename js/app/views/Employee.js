define(['knockout', 'app/store/Employee'], function(ko, store) {
    return function(data) {
        var self = data;
        self.manager = function() {
            return store.employees.findById(self.managerId);
        };

        return self;
    };
});
