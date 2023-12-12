# Array
[What Are Arrays?](https://en.wikipedia.org/wiki/Array_(data_structure))<br>
You may ask your self what is the purpose of implementing Arr class when there is already reach methods for arrays in programming langs.<br>
I would say "its just about learning".

## Runtime Complexities
- Find by index O(1)
- Find by value O(n)
- Delete value O(n)
- Add value O(n)

## Usage Example
```typescript
import { Arr } from './array.ts';
const arr = new Arr<string>(3);

arr.insert('item1')
arr.insert('item2')
arr.insert('item3')
arr.removeAt(2) // item3

console.log(arr.inner);
```