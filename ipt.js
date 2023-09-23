
var person = {
    FirstName : "Aicee",
    LastName : "Villafuerte",
    Age : 10,
    fullName : function() {
    return this.firstName + " " + this.lastName;
    }
    };
    console.log(person.FirstName+" "+person.LastName);
    console.log(Array.isArray(person)); //returns false
    