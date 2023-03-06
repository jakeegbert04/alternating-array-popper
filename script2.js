/*
Alternating Array Popper
  Using OOP, build a program that will take an array, and alternate between removing from the front and back every time your method is run.
EX:
const arr = [1, 2, 3, 4, 5]
arrayPopper() => 1
arrayPopper() => 5
arrayPopper() => 2
arrayPopper() => 4
arrayPopper() => 3
arrayPopper() => undefined

Work on your ATM machines.
*/

class ArrayPopper {
  constructor(array) {
    this.array = array
  }
}

function alternating() {

  
  console.log(newArr.array)
  for (let i = 0; i < newArr.array.length; i++) {
    let removeFirst = newArr.array.shift()
    console.log(removeFirst)
    let removeLast = newArr.array.pop()
    console.log(removeLast)
  }
  if (newArr.array.length === 1) {
    let removeLast = newArr.array.pop()
    console.log(removeLast)
    console.log(newArr.array)
  }
  
  
}


const newArr = new ArrayPopper([1, 2, 3, 4, 5, 6, 7])

alternating()

// const students = ["mitchell", "jake", "karely", "john"]

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].toUpperCase())
// }