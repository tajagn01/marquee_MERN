function getGrade(Marks){
   if(Marks > 100){
    return "You enter invalid marks"
   }
   if(Marks < 0 ){
    return "You enter invalid marks"
   }
   if(Marks>90 && Marks<=100){
    return "A+"
   }
   else if(Marks>80 && Marks<90){
    return "A"
   }
   else if(Marks>70 && Marks<80){
    return "B"
   }
   else if(Marks>60 && Marks<70){
    return "C"
   }
   else if(Marks>33 && Marks<60){
    return "D"
   }
   else{
    return "F"
   }
}

console.log(getGrade(95))


function RockPaperScissor(User , Computer){

    switch (User) {
        case User === Computer:
            return "Tie"
        case User === "Rock" && Computer === "Scissor":
            return "User Win"
        case User === "Paper" && Computer === "Rock":
            return "User Win"
        case User === "Scissor" && Computer === "Paper":
            return "User Win"
        default:
            return "Computer Win"
    }
    // if(User === Computer){
    //     return "Tie"
    // }
    // if(User === "Rock" && Computer === "Scissor"){
    //     return "User Win"
    // }
    // if(User === "Paper" && Computer === "Rock"){
    //     return "User Win"
    // }
    // if(User === "Scissor" && Computer === "Paper"){
    //     return "User Win"
    // }
    // return "Computer Win"
}


console.log(RockPaperScissor("Rock","Scissor"))

function Weekdays(day){
    switch(day){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default :
            return "Invalid day"
    }
}
console.log(Weekdays(3))


function MultiplicationTable(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num * i}`)

    }
}

const marks = [95, 78, 90, 78, 59];

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log('Total Marks:', totalMarks);
console.log('Percentage:', percentage.toFixed(2) + '%');
console.log(MultiplicationTable(10))




// Question 4: Return only marks and sort them from highest to lowest
const arrayOfMarks = students.map((student) =>
  student.examScore.reduce((acc, curr) => acc + curr.marks, 0)
);

const sortedArray = arrayOfMarks.sort((a, b) => b - a);

console.log(arrayOfMarks);
console.log(`Highest Marks: ${sortedArray[0]}`);



const students = [
  { id: 1, name: "Garv", course: "BCA" },
  { id: 2, name: "Bob", course: "MCA" },
  { id: 3, name: "Kremish", course: "BCA" },
  { id: 4, name: "David", course: "B.Tech" }
];

function getStudentsByCourse(courseName) {
  return students.filter(student => student.course === courseName);
}

const bcaStudents = getStudentsByCourse("BCA");
console.log(bcaStudents);

function createArray() {
  const items = [];
  return {
    push: (element) => items.push(element),
    getElement: (index) => items[index],
    getArray: () => items
  };
}

const myArray = createArray();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(50);

console.log(myArray.getElement(1));
console.log(myArray.getArray());



const students = [
  {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    course: 'BCA',
    year: 1,
    marks: 82,
    isGraduated: false,
  },
  {
    name: 'Diya Patel',
    email: 'diya.patel@example.com',
    course: 'BCA',
    year: 2,
    marks: 91,
    isGraduated: false,
  },
  {
    name: 'Vivaan Singh',
    email: 'vivaan.singh@example.com',
    course: 'BSc IT',
    year: 3,
    marks: 75,
    isGraduated: false,
  },
  {
    name: 'Ananya Verma',
    email: 'ananya.verma@example.com',
    course: 'BCA',
    year: 3,
    marks: 88,
    isGraduated: false,
  },
  {
    name: 'Aditya Mehta',
    email: 'aditya.mehta@example.com',
    course: 'BCom',
    year: 2,
    marks: 69,
    isGraduated: false,
  },
  {
    name: 'Ishita Desai',
    email: 'ishita.desai@example.com',
    course: 'BBA',
    year: 1,
    marks: 95,
    isGraduated: false,
  },
  {
    name: 'Rohan Gupta',
    email: 'rohan.gupta@example.com',
    course: 'BSc CS',
    year: 4,
    marks: 80,
    isGraduated: true,
  },
  {
    name: 'Sneha Joshi',
    email: 'sneha.joshi@example.com',
    course: 'BCA',
    year: 4,
    marks: 86,
    isGraduated: true,
  },
  {
    name: 'Karan Malhotra',
    email: 'karan.malhotra@example.com',
    course: 'BTech',
    year: 3,
    marks: 73,
    isGraduated: false,
  },
  {
    name: 'Meera Nair',
    email: 'meera.nair@example.com',
    course: 'BSc IT',
    year: 2,
    marks: 92,
    isGraduated: false,
  },
  {
    name: 'Arjun Kapoor',
    email: 'arjun.kapoor@example.com',
    course: 'BCA',
    year: 1,
    marks: 64,
    isGraduated: false,
  },
  {
    name: 'Priya Shah',
    email: 'priya.shah@example.com',
    course: 'BBA',
    year: 4,
    marks: 89,
    isGraduated: true,
  },
  {
    name: 'Rahul Yadav',
    email: 'rahul.yadav@example.com',
    course: 'BCom',
    year: 3,
    marks: 71,
    isGraduated: false,
  },
  {
    name: 'Neha Kulkarni',
    email: 'neha.kulkarni@example.com',
    course: 'BSc CS',
    year: 2,
    marks: 84,
    isGraduated: false,
  },
  {
    name: 'Kabir Roy',
    email: 'kabir.roy@example.com',
    course: 'BTech',
    year: 4,
    marks: 97,
    isGraduated: true,
  },
];

console.log(students);

students.forEach(student => console.log(student.name));

let highest = students.reduce((max, student) =>
  student.marks > max.marks ? student : max
);


console.log(highest);

let above80 = students.filter(student => student.marks > 80);
console.log(above80);

let graduatedCount = students.filter(student => student.isGraduated).length;
console.log(graduatedCount);

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let average = totalMarks / students.length;
console.log(average);

let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log(sortedStudents);

let foundStudent = students.find(
  student => student.email === "diya.patel@example.com"
);
console.log(foundStudent);

let updatedStudents = students.map(student => ({
  ...student,
  marks: student.marks + 5
}));
console.log(updatedStudents);

let bcaStudents = students.filter(student => student.course === "BCA");
console.log(bcaStudents);