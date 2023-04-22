// console.log("vlad")
// let arr = ['apple', 'orange', 'kiwi']
// arr.pop('kiwi')
// arr.push('lemon')
// arr.unshift('banan')
// arr.shift()
// console.log(arr)
// let bla = 'hello'
// console.log(bla[1])

// let toString = arr.toString()
// console.log(toString)

// let ToString = arr.join()
// console.log(ToString)

// let arrToString = arr.join(' and ')

// console.log(arr[0], arr[1], 'and', arr[2])


// let mtr = []
// mtr[0] = 'a'
// mtr[1] = 'b'
// console.log(mtr)

// let obj = { a: 'banan', b: 5, c: ['apple', 'orange', 'kiwi'], d:6 }
// console.log(obj['b'] + obj['d'])


// let week = {
//     1: "monday",
//     2: "tuesday",
//     3: "wednesday",
//     4: "thursday",
//     5: "friday",
//     6: "saturday",
//     7: "sunday",
//   };
//   console.log(week['6'])


//   let fruits = ['apple', 'orange', 'kiwi']
// for(let fruit of fruits){
//     console.log(fruit + ' fruit')
// }


// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }




// let arrOfObjects = [
//     { name: "Alex", age: 50, dog: false },
//     { name: "Maria", age: 32, dog: true },
//     { name: "John", age: 29, dog: false },
//   ];

// let arrFilter =  arrOfObjects.map(item =>{
//     if(item.age < 40){
//         console.log(item.name.toUpperCase())
//     }
// })

// let arrJoin = arrOfObjects.map(item =>{
//     console.log(item.name + '!')
// })

// let newARR = ["Mary", { name: "John", age: 30 }, 45, false, 1999];
// console.log(newARR[2] + newARR[4])

// function func(a, b){
//     if (a < 5){
//        return a + b
//     } else if (a > 5){
//         return a - b
//     } 
//     else if (a === 5) {
//         return 'a = 5'
//     }
// }
// console.log(func(5, 5))

// let str = "The Ugly Duck";
// function func(word) {
//     if (str.includes(word)) {
//         console.log('yes', word)
//     }
//     else {
//         console.log("no", word)
//     }
// }
// func('Ugdl')



// let mas = ["Львів", "Київ", "Харків", "Луцьк"];
// let find = mas.find((value) => {
//     return value.length > 1
// })
// console.log(find)




// let ARR = ["Mary", { name: "Pedro", age: 18, dog: false , birth: [1, 2, 3] }, 19, false];
// let att = ARR.indexOf()
// console.log(ARR[1]["birth"][0])




// function func(a, b, c = 86, d = "dog"){
//     if(a === 'sum'){
//         return b + c
//     } else if(a === 'multiply'){
//         return b * c
//     } else {
//         return d
//     }

// }
// console.log(func('sum', 5))








// let mas = ["Львів", "Київ", "Харків", "Луцьк"];
// let masword = mas.find((item) => {
//     if (item.length < 5) {
//         return item
//     }
// })
// console.log(masword) 






// let arrOfPeople = [
//     { name: "Alex", age: 30, city: "Vinnytsia", married: false },
//     { name: "Pedro", age: 12, city: "Kharkiv", married: false },
//     { name: "Maria", age: 42, city: "Kyiv", married: true },
//     { name: "John", age: 29, city: "Kharkiv", married: false },
// ];
// let findNotMarry = arrOfPeople.filter((person) => {
//     if (person.city === "Kharkiv") {
//         console.log(person.name)
//     }
// })
// console.log(findNotMarry)



// let word = "привітання"
// let findWord = word.includes("привіт")

// console.log(findWord)



// let stR = ["hello", "world", "!"];
// let rSt = stR.slice(0, 1)
// console.log(rSt)




// let stringg = 'bilibirde'
// let srt = stringg.slice(4, 8)
// console.log(srt)





let namee = "василь"
let nam = namee[0].toUpperCase() + namee.slice(1, 6)
console.log(nam)