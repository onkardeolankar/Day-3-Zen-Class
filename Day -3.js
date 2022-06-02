// Question No.1: For the given JSON iterate over all for loops (for, for in, for of, forEach)
// Solution:
var object = [
    { person: "Sonu", age: 2, company: "Zen" },
    { person: "Monu", age: 3, company: "Zen Geeks" },
    { person: "Jontu", age: 4, company: "Guvi Geek" },
];

//JSON iteration with the help of normal for loop:
for (let i = 0; i < object.length; i++) {
    console.log(`
    Person Name: ${object[i].person},
    Person age: ${object[i].age},
    Person company: ${object[i].company}`)
}

//JSON iteration with the help of for in loop:
for(let item in object){
    console.log(`
    Person Name: ${object[item].person},
    Person age: ${object[item].age},
    Person company: ${object[item].company}
    `)
}


//JSON iteration with the help of for of loop:
for(let i of object){
    console.log(`
    Person Name: ${i.person},
    Person age: ${i.age},
    Person company: ${i.company}
    `)
}


//JSON iteration with the help of forEach loop:
object.forEach((item) => {
    console.log(`
        Person Name: ${item.person},
        Person age: ${item.age},
        Person company: ${item.company}   
    `)
})

// Question No.2: Create your own resume data in JSON format
// Solution:
var resume = [{
    Name: "Onkar",
    Surname: "Deolankar",
    Email: "onkardeolankar1996@gmail.com",
    Education: "B.Tech in ETC",
    Company: "Tata Communications Limited",
    Courses : [
        "Full Stack Development Course",
        "RedHat",
    ],
    Hobbies : [
        "Table Tennis",
        "Coding"
    ],
}]

for(let i = 0; i<resume.length; i++){
    console.log(resume[i]);
}
