// this Keyword


const student = {
    name : 'shafi',
    age : 21,
    eng : 95 ,
    math : 92 , 
    phy : 85 ,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);      // Window object
}