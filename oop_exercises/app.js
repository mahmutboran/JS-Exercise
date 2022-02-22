/* **********Exercise_1************** */

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     console.log(student);
//     delete student.rollno;
//     console.log(student);
/* **********Exercise_2************** */

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// Object.myLenght = function(myFunc){
//     var count = 0;
//     for (const key in myFunc) {
//         if (myFunc.hasOwnProperty(key)) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(Object.myLenght(student))
// console.log(student)


/* **********Exercise_3************** */
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


//     for (let i = 0; i < library.length; i++) {
//        console.log(library[i].title+" "+library[i].author +" "+library[i].readingStatus)
        
//     }
    

/* **********Exercise_4************** */

// class CylinderVolume{
//     #pi =3.14
//     constructor(radius,height){
//   this.radius = radius;
//   this.height = height   
// } volume(){
//     return (Math.pow(this.radius,2)*this.height*this.#pi).toFixed(4)
// }
// }

// let myCylinder = new CylinderVolume(5,5)
// console.log(myCylinder.volume())

// console.log(Math.pow(4,2))

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));

/* **********Exercise_5************** */