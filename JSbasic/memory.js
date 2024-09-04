//call by value                                       pass copy of value not the original value
let newname="monica saha"    
console.log(newname)

let anotherName= "moon"
console.log(anotherName)
    anotherName="krishna"

console.log(anotherName)
console.log(newname)
                
 //call by reference                           //object syntax
let userone={                                 //      let objectname = {var1:value1,var2:value2,var3:value3};
    email:"monica@23",                                
    age: 22,
    dept:"mca"                           //call by reference paas address of variable (original value )
};


let usertwo= userone

usertwo.email="krishna@234"           // this value overwrite value of userone.email

console.log(userone.email)
console.log(userone.age)
console.log(userone.dept)
console.log(usertwo.email)
console.log(usertwo.age)
console.log(usertwo.dept)



