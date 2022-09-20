class Stack {
  constructor(){
    this.items = []
    this.count = 0
  }

  // Add element to top of stack
  push(element){
    this.items[this.count] = element
    this.count += 1
    
    return this.count - 1
  }

}
const stack = new Stack()