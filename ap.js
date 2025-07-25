// problem solving assignment 44
/*___________________________ Question no 1 ________________________
 Change Text Color on Hover
Goal: When the mouse hovers over a paragraph, change its text color to red. When the
 mouse leaves, change it back to black.

✅ Expected Output: Text turns red when you hover, and returns to black when mouse 
leaves.
_____________________ Answer ________________________________________ */
// function red(){let get = document.getElementById('para');
//     get.style.color = 'red'
// }

// function origional(){let get = document.getElementById('para');
//     get.style.color = 'black'
// }
/*___________________________ Question no 2 ________________________
Show Hidden Message on Hover
Goal: Create a div and a hidden paragraph. When you hover over the div, show the hidden paragraph. 
When you move the mouse out, hide the paragraph again.

✅ Expected Output: Message appears only when hovering.
_____________________ Answer ________________________________________ */
//  function showing(){let getdiv = document.getElementById('div');
//     let getpara = document.getElementById('message');
//     getpara.style.display = 'block';
//  }

//  function offing(){
//     let getpara = document.getElementById('message');
//     getpara.style.display = 'none';
//  }
/*___________________________ Question no 5 ________________________
give example of onFocus 
_____________________ Answer ________________________________________ */
// function resizing(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'red';
//     get.style.height = '200px';
//     get.style.width = '200px'
// }

/*___________________________ Question no 6 ________________________
onFocus and onBlur
_____________________ Answer ________________________________________ */
// function coloring(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'blue';
// }
// function styling(){let get = document.getElementById('userinput');
//     get.style.backgroundColor = 'red';
// }

/*___________________________ Question no 7 ________________________
classList applying
_____________________ Answer ________________________________________ */
// function coloring(){let get = document.getElementById('para');
//     get.className   += ' pp';
    
// }
// // classList 
// // adding 
// function adding(){let get = document.getElementById('heading');
//     get.classList.add('cl');
// }
// // removing 
// function removing(){let get = document.getElementById('heading');
//     get.classList.remove('cl');
// }
// // toggling
// function toggling(){let get = document.getElementById('heading');
//     get.classList.toggle('cl');
// }
// // replacing 
// function replacing(){let get = document.getElementById('heading');
//     get.classList.replace('cl','rl');
// }
/*___________________________ Question no 8 ________________________
 Change All Paragraph Text to Red
Instruction: Get all <p> tags and change their text color to red using a loop.

✅ Expected Output: Every paragraph on the page turns red.
_____________________ Answer ________________________________________ */
// let get = document.getElementsByTagName('p');
// console.log(get);
// for(let i = 0; i <get.length;i++){get[i].style.color = 'red';}

/*___________________________ Question no 9 ________________________
swapping img by two function and buttons
_____________________ Answer ________________________________________ */
// function showImgOne(){
//     let get = document.getElementById('mainImg');
//     get.src = "./assets/iqbal.webp";
   
// }

// function showImgTwo(){
//     let get = document.getElementById('mainImg');
//     get.src = "./assets/qaid.jpg";
// }


/*___________________________ Question no 10 ________________________
bulb on off function
_____________________ Answer ________________________________________ */
// function offing(){let getBulb = document.getElementById('mainImg');
//     getBulb.src = "./assets/bul-off.jpg";
// }
// function oning(){let getBulb = document.getElementById('mainImg');
//     getBulb.src = "./assets/bulb-on.jpg";
// }


/*___________________________ Question no 11 ________________________
const user = {
  name: 'Ali',
  address: {
    city: 'Lahore',
    geo: {
      lat: '31.5204',
      lng: '74.3587'
    }
  }
};
👉 Access user.address.geo.lat and user.address.geo.altitude using optional chaining.


_____________________ Answer ________________________________________ */
// const user = {name : 'Ali',
//     address : {city : 'Lahore',
//         geo : {lat : '31.528',
//             lng : '74.345'
//         }
//     }
// };
// console.log(user?.address?.geo?.lat);
// console.log(user?.address?.geo?.altitude)

/*___________________________ Question no 12 ________________________
const student = {
  name: 'Sara',
  getDetails() {
    return `${this.name} is a student`;
  }
};
👉 Use optional chaining to call student.getDetails() and
 student.profile.getName() safely.
_____________________ Answer ________________________________________ */
// const student = {
//   name: 'Sara',
//   getDetails() {
//     return `${this.name} is a student`;
//   }
// };
// console.log(student.getDetails());
// console.log(student?.profile?.getName());

/*___________________________ Question no 13 ________________________
const books = [
  { title: 'JavaScript Basics' },
  null,
  { title: 'CSS Mastery' }
];
👉 Loop through the array and print the title of each book using optional chaining.
_____________________ Answer ________________________________________ */
// const books = [{title : 'javaScript Basis'},
//     null,{title : 'css Matery'}
// ];
// for(let i = 0; i<books.length; i++){console.log(books[i]?.title)}
/*___________________________ Question no 14 ________________________
const employee = {
  name: 'Ahmed',
  job: {
    title: 'Developer'
  }
};
👉 Use optional chaining and nullish coalescing (??) to get employee.job.salary or 
"Not defined".
_____________________ Answer ________________________________________ */
// const employee = {name : 'Ahmed',job :{titile : 'developer'}}
// console.log(employee?.job?.salary)

/*___________________________ Question no 15 ________________________
function getUser() {
  return null;
}
👉 Access getUser().name safely using optional chaining.

_____________________ Answer ________________________________________ */
// function getUser(){return null;}
// console.log(getUser()?.name)
/*___________________________ Question no 16 ________________________
 Clone an Array
Question:
You have the following array:

let fruits = ["apple", "banana", "mango"];
Create a new array called allFruits that contains the same elements using the 
spread operator.
👉 Make sure changes to allFruits do not affect fruits.
_____________________ Answer ________________________________________ */
// let fruits = ['apple','banana','mango'];
// console.log(fruits);
// let allFruits = [...fruits];
// console.log(allFruits);
/*___________________________ Question no 17 ________________________
Merge Two Arrays
Question:
Given two arrays:
let boys = ["Ali", "Zain"];
let girls = ["Ayesha", "Fatima"];
Create a single array called students using the spread operator that contains all 
names.
_____________________ Answer ________________________________________ */
// let boys = ['Ali','Zain'];
// let girls = ['Ayesha','Fatima'];
// // let students = boys.concat(girls);
// let students = [...boys,...girls];
// console.log(students)
/*___________________________ Question no 18 ________________________
Add an Element to the Beginning and End
Question:
You have this array:

let languages = ["HTML", "CSS"];
Using the spread operator, create a new array that adds "JavaScript" at the end
 and "C" at the start.
👉 Do not use push() or unshift().

_____________________ Answer ________________________________________ */
// let languages = ['html','css'];
// let lan = ['c',...languages,'Javascript']
// console.log(lan);

/*___________________________ Question no 19 ________________________
Copy an Object and Add a Property
Question:
You have this object:
let person = { name: "Aziz", age: 22 };
Using the spread operator, create a new object called personDetail and add a new
property country: "Pakistan".

_____________________ Answer ________________________________________ */
// let person = {name : 'Aziz',
//     age : 22
// }

// let personDetail = {...person, country : 'pakistan '};
// console.log(person);
// console.log(personDetail);
/*___________________________ Question no 20 ________________________
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
Use the spread operator to create a new object that contains properties from both 
obj1 and obj2.
_____________________ Answer ________________________________________ */
// let obj1 = {a : 1,
//     b : 2
// }
// let obj2 = {c : 3,
//     d : 4
// }
// let objec = {...obj1,...obj2};
// console.log(objec);
/*___________________________ Question no 21 ________________________
Update a Value While Copying an Object
Question:
You have:

let book = { title: "JS Basics", pages: 200 };
Create a new object updatedBook using the spread operator, but update 
the pages to 300.

_____________________ Answer ________________________________________ */
// let book = {title : 'js basics',pages : 200}
// let updatedBook = {...book,pages: 300};
// console.log(updatedBook);

/*___________________________ Question no 22 ________________________
Remove a Value While Copying an Object
Question:

let user = { name: "Ali", age: 25, email: "ali@example.com" };
Create a copy of user without the email property using spread operator and 
destructuring.

_____________________ Answer ________________________________________ */
// let user = {name :'Ali',
//     age : 32,
//     email : 'ali@example.com'
// };
// let newObject = {...user};
// console.log(newObject);
// delete newObject.email;
// console.log(newObject)

/*___________________________ Question no 23 ________________________
 Flatten a Nested Array
Question:
let nested = [1, 2, [3, 4], 5];
Use the spread operator to create a flat array:
👉 Result: [1, 2, 3, 4, 5]
_____________________ Answer ________________________________________ */
// let nested = [1,2,[3,4],5]
// console.log(nested);
// let flat = [...nested,...[3,4]];
// console.log(flat)

/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */


/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */



/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */




/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */





/*___________________________ Question no 1 ________________________

_____________________ Answer ________________________________________ */