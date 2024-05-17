let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rbtn");
let newcontain = document.querySelector(".msgcontain");
let msg = document.querySelector("#msg");
let msgbtn = document.querySelector(".msg-btn");

let turn0=true;
const winpat = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

const showwinner =(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    newcontain.classList.remove("hide");
}

const resetgame = ()=>{
    turn0= true;
    enablegame();
    newcontain.classList.add("hide");


};

const enablegame=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
}
///disable other box after winning so ther box cann't be clicked
const disablebox = ()=>{
    for(box of boxes){
        box.disabled =true;
    }
};

///initailize X and O when Click
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was click");
    if(turn0 == true){
        turn0=false;
        box.innerText = "X";
    }else{
        turn0 =true;
        box.innerText="O";
    }
    box.disabled = true;
    patwinner();
    
})
})
///winner is select using array (winpat) 
const patwinner = ()=>{
    for(let pat of winpat){
        let posval1 = boxes[pat[0]].innerText;
        let posval2 = boxes[pat[1]].innerText;
        let posval3 = boxes[pat[2]].innerText;
    if(posval1 !="" && posval2 !=""&& posval3 !="" ){
        if(posval1 == posval2 && posval2 === posval3){
            disablebox();
            console.log("winner",posval1);
            showwinner(posval1);
        }
    }
    }
};
msgbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
 








// let btn1 = document.querySelector(".id1");
// let body = document.querySelector("body");
// let currMode ="light";
// btn1.addEventListener("click",()=>{
// if(currMode === "light"){
//     currMode="dark";
//   body.classList.add("dark");
//   body.classList.remove("light"); 
// }else{
//     currMode="light";
//     body.classList.add("light");
//     body.classList.remove("dark"); 
// }
// console.log(currMode);
// });










// let btn1 = document.querySelector(".id1");
// btn1.onclick = () =>{
//     console.log("btn was clicked");

// }
// let box1= document.querySelector(".b");
// box1.onmouseover= ()=>{
//     console.log("box hover");
// }














// // // // // age= 23;
// // // // // //console.log(age);

// // // // // let ageno =23;
// // // // // ageno = 25;
// // // // // //console.log(ageno);

// // // // // const student={
// // // // //     name: "hello",
// // // // //     age: 23.5,
// // // // //     id :  12,
// // // // // };
// // // // // student["id"] += 1;
// // // // // ///console.log(student["id"]);

// // // // // const product ={
// // // // //     name :"parker",
// // // // //     rating:4,
// // // // //     price: 100,
// // // // // };
// // // // // console.log(typeof product["price"]);

// // // // // let a=3;
// // // // // let b=3;
// // // // // console.log(a++);
// // // // // console.log(a);


// // // // let a =23;
// // // // if (a%2==0){
// // // //     console.log("even");
// // // // }
// // // // else{
// // // //     console.log("odd");
// // // // }
// // // // let age =12;
// // // // let result =age<23?"less":"high";
// // // // console.log(result)

// // // // check whether multple or not by 5 number
// // //         // let r = prompt("enter a number:");
// // //         // if (r%5==0)
// // //         //     {
// // //         //         console.log(r,"multiple by 5");
// // //         //     }
// // //         //     else{
// // //         //         console.log(r,"not multipe by 5")
// // //         //     }

// // // //code which can gibe grade to student acc to their scores 
// // // // let grades = prompt("enter the grade");

// // // // let grades=80;
// // // if(grades<=100 && grades>=80){
// // //     console.log("A");
// // // }
// // // else if(grades<=89 && grades>=70){
// // // console.log("B");
// // // }
// // // else{
// // //     console.log("F");
// // // }

// // // for(i=1;i<5;i++){
// // //     console.log("hello");
// // // }
// // let sum = 0;
// // for( i=1;i<=5;i++){
// //     sum+=i;
// // }
// // console.log(sum)


// // let student ={
// //     name:"hello",
// //     age: 23
// // };
// // console.log(" my name is ",student.name,"age is",student.age);
// // //let output = `my name is ${student.name} and age is ${student.age}`;
// // //console.log(output);
// // let str ="Shello";
// // console.log(str.toUpperCase());
// // str.trim();
// // str.slice(1,3);
// // console.log(str.trim());
// // console.log(str.slice(1,3));

// // let a = "hello";
// // let b = "man";
// // console.log(a.concat(b));
// // console.log(a.replace("h","y"));

// // let user = prompt("enter your full name:");
// // let gen =`@${user}${user.length}`;
// // console.log(gen);


// // let marks =[81,56,63,54,45,65,67,48,78,89];
// // // for(i=0;i<10;i++){
// // // console.log(marks[i]);
// // // }
// // // for(let i of marks){
// // //     console.log(i);

// // // }
// // let sum =0;
// // for (i of marks){
// //     sum = sum + i ;
// // }
// // avg = sum / marks.length;
// // console.log(`thee avg marks is: ${avg}`);

// // let items =[250,645,300,900,50];
// // console.log(items.splice(1,1,23));
// // console.log(items.pop());

// // function func(msg){
// //     console.log(msg);
// // }
// // func("hello i am man");

// // function countVol(str){
// //     let count=0;
// // for(const char of str){
   
// //     if(char == "a" || char=="e" || char=="i" || char=="o" || char=="u"){
// //         count++;
// //     }
// // }
// // console.log(count);
// // }

// //high order function
// let nums =[1,2,3,4,5];
// nums.forEach(hello=(num)=>{

// console.log(num*num)
// })
// //alternativly
// // let hello=(num)=>{

// //     console.log(num*num)
// //     }
// // nums.forEach(hello)

 
// nums.map((val)=>{
//     console.log(val*val);
// })

// nums.filter((num)=>{
//     console.log(num%2 == 0);
// })

// //single output 
// let num=[1,2,3,4];
// let output = num.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// let marks =[99,56,67,92,91,,95];

// let mark = marks.filter((num)=>{
//     return num>90;
// }
// );
// console.log(mark);

// let n = prompt("enter a number");
// let arr = [];
// for(i=1;i<=n;i++){
// arr[i-1]=i;
// }
// console.log(arr);

// let m = marks.reduce((res,curr)=>
// {
//     return res+curr;
// });
// console.log(m);
