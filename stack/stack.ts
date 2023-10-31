export class Stack<T> {
    private stack: T[];

    constructor() {
        this.stack = [];
    }
    
    getStack() {
        return this.stack;
    }
    push(item: T) {
        this.stack[this.stack.length] = item;
    }
    pop() {
        if(this.isEmpty()) return undefined;
        const len = this.stack.length;

        this.stack.length = len-1;
        
        return this.stack[len-1];
    }
    peek() {
        return this.stack[this.stack.length-1];
    }
    isEmpty() {
        return this.stack.length <= 0;
    }
}

/**
    Reverse String:
 
    let str = "abcd";
    let reversedStr = [];
    let i = str.length-1;

    str.split('').forEach((v) => {
        reversedStr.unshift(v)
    })
*/

/**
    String Balancing:

*/

// let balancedStr   = []
// let unbalancedStr = "(1 + 2)"
// let _open = ["(", "[", "{"]

// unbalancedStr.split('').forEach((v) => {
//     _open.some(val => val === v)
// })
const s = new Stack<string>();
s.push('erfan');
s.push('mmd');
s.push('ali');
s.pop();
// console.log(
//     s.getStack(),
//     s.peek()
// );