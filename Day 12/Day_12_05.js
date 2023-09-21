// this with Arrow functions


// Arrow -> lexical scope -> parent call -> scope

// function -> scope -> this -> calling object


const student = {
    name: 'shafi',
    marks: 85,
    prop: this,             // global scope

    getName: function() {
        console.log(this);  // student object
        return this.name;   // prints student object's name i.e 'shafi'
    },
    
    getMarks: () => {
        console.log(this);  // window object
        return this.marks;  // undefined
    },

    getInfo1 : function() {
        setTimeout(() => {
            console.log(this);      // student object
        }, 2000);
    },

    getInfo2 : function() {
        setTimeout(function () {
            console.log(this);      // window object
        }, 2000);
    }
}

