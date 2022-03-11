"use strict";
//This is a generator of tailwind css classes
//It is used to generate the css classes for the tailwind css framework
// a better alternative to using @apply in tailwind css
exports.__esModule = true;
exports.twgen = void 0;
//create object
var twgen = {
    //create an array of classes
    //eg: [{className: 'btn', value: 'rounded-md bg-grey-500 text-white p-2'}]
    classes: [],
    //create a function to add classes to the array
    //eg: addClass('btn', 'rounded-md bg-grey-500 text-white p-2')
    addClass: function (className, value) {
        this.classes.push({
            className: className,
            value: value
        });
    },
    //create a functin to add multiple classes to the array
    //eg: addClasses(['btn', 'rounded-md bg-grey-500 text-white p-2'])
    addClasses: function (classNames) {
        for (var i = 0; i < classNames.length; i++) {
            this.addClass(classNames[i], '');
        }
    },
    //create function to generate css classes
    tw: function (data) {
        //loop through the classes array
        for (var i = 0; i < this.classes.length; i++) {
            //if the className matches the data
            if (this.classes[i].className === data) {
                //return the value
                return this.classes[i].value;
            }
        }
    }
};
exports.twgen = twgen;
