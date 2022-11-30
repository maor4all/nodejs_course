const students = [
    {
        fullName: 'David Rokah',
        course: 'Fullstack',
    },
    {
        fullName: 'Eli Levy',
        course: 'Fullstack',
    },
    {
        fullName: 'Yoni Grinberg',
        course: 'SQL',
    },
    {
        fullName: 'Efraiim Navon',
        course: 'Fullstack',
    },
    {
        fullName: 'Niv Raviv',
        course: 'SQL',
    },
    {
        fullName: 'Einav Barak',
        course: 'Fullstack',
    },
    {
        fullName: 'Nirit Yosef',
        course: 'SQL',
    },
    {
        fullName: 'Dina Ben Ezra',
        course: 'Fullstack',
    },
    {
        fullName: 'Yafit Ertsel',
        course: 'SQL',
    },
]

for (let name of students){
    if(name.course === 'SQL'){
        console.log(name.fullName)
    }
}

const maxNumer = students.reduce(function (obj1, obj2){
    return obj1.fullName > obj2.fullName
})

console.log(maxNumer)
console.log(maxNumer)
console.log(+null)//0
console.log(+'34')//34



console.log('\n"_" Nice job! your code is compiled Successfully')