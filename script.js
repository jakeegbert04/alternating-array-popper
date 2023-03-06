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
