// Here's my data model
var ViewModel = function () {
    var self = this;
    self.firstName = ko.observable("Bert");
    self.lastName = ko.observable("Bertington1");
    self.people = ko.observableArray();

    //without ajax mapper  

    //var result = [{ "Id": 1, "Name": "Name1", "DOB": "\/Date(-62135596800000)\/" }, { "Id": 2, "Name": "Name2", "DOB": "\/Date(-62135596800000)\/" }, { "Id": 3, "Name": "Name3", "DOB": "\/Date(-62135596800000)\/" }, { "Id": 4, "Name": "Name4", "DOB": "\/Date(-62135596800000)\/" }, { "Id": 5, "Name": "Name5", "DOB": "\/Date(-62135596800000)\/" }, { "Id": 6, "Name": "Name6", "DOB": "\/Date(-62135596800000)\/" }];
    //self.people(ko.mapping.fromJS(result));

    // with  ajax 
    setTimeout(function () {
    $.ajax({
        contentType: 'application/json; charset=UTF-8',
        url: 'http://localhost:26163/home/people',
        async: true,
        cache: true,
        success: function (res) {
            self.people(ko.mapping.fromJS(res));
            
        }
    });
    }, 1000);

    self.add = function()
    {
        // convert mapper to JS 
        var a = ko.mapping.toJS(self.people())
    }
};
ko.applyBindings(new ViewModel()); // This makes

