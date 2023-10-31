import { Stack } from "./stack";

const openingBracketsReGex = /[\[\{\(\<]/;
const stack = new Stack<string>();

const pair: { [key: string]: string } = {
    '[': ']',
    '{': '}',
    '<': '>',
    '(': ')'
}

const balanceStr = (str: string) => {
    const strArr = str.split('');
    let index = 0;
    
    while(index <= strArr.length-1) {
        const currentStr = strArr[index];
        
        if(openingBracketsReGex.test(currentStr)) {
            stack.push(currentStr);
        }

        else if(currentStr === pair[stack.peek()]) {
            stack.pop();
        }

        if(stack.getStack().length > 0 && index === strArr.length-1) {
            console.error('Error: Your String is Not Balanced');
            break;
        }

        index++;
    }
}

balanceStr("(1 + 2())")