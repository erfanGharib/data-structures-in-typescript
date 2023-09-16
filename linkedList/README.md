## Linked List
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