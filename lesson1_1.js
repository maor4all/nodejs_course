function Person(firstName) {
    this.firstName = firstName
    this.printFM = function () {
        console.log('FirstName is : ', firstName)
    }
}

const p1 = new Person('Maor')
console.log(p1)
p1.printFM()
