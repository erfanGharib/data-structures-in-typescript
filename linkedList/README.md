# Linked List
[What Are LinkedList?](https://en.wikipedia.org/wiki/Linked_list)<br>

## Runtime Complexities
Runtime Complexities:
- Find by index O(n)
- Find by value O(n)
- Add first / last O(1)
- Add Middle O(n)
- Delete first O(1)
- Delete last O(n)
- Delete middle O(n)
- Reverse O(n)

## Usage Example
```ts
    import { LinkedList } from './array.ts';
    const linkedList = new LinkedList();

    list.addFirst(10);
    list.addLast(40);
    list.removeLast();

    list.addLast(40);

    list.deleteFirst();
    list.deleteLast();

    console.log(list.getListAsArray());
    console.log(list.getKthFromTheEnd(1));
    console.log(list.indexOf(30));
    console.log(list.contains(30));
    console.log(list._size);
    console.log(list.contains(0));
```