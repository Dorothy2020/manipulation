// 4) The (this)identifier has been used to refer to the name of the "bar"  which is the property of the lisalab object.
 
 
var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
           console.log ("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

             