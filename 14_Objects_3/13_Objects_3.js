// destructering the Objects

const course = {
    courseName: "googlepractical",
    price: 999,
    courseInstructor: "abhishek"
}
course.courseInstructor  // this is the one method

const { courseInstructor: instructor } = course  //changing the name
console.log(instructor)


// json => javascript object nototions API

// first method to represent API


/*{
    "name" : "abhishek",
        "id" : "4345f",
            "email" : "abshihek@google.com"
}*/

// second method to represent API

/*[
    {},
    {},
    {}
]*/