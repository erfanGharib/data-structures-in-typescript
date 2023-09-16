class _Node {
    val: number;
    next: _Node;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    private head: _Node;
    private tail: _Node;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get isEmpty() {
        return !this.head;
    }
    get _size(): number {
        return this.size;
    }

    addFirst(item: number) {
        const newNode = new _Node(item);

        if (this.isEmpty)
            this.head = this.tail = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    addLast(item: number) {
        const newNode = new _Node(item);

        if (this.isEmpty)
            this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    removeFirst() {
        if (this.isEmpty)
            return console.error(new Error('list is empty'));

        const tmp = this.head.next;
        this.head.next = null;
        this.head = tmp;
        this.size--;
    }

    removeLast() {
        if (this.isEmpty)
            return console.error(new Error('list is empty'));

        let current = this.head;
        this.size--;

        while (current.next) {
            if (!current.next.next)
                return current.next = null;

            current = current.next;
        }
    }

    contains(item: number): boolean {
        return this.indexOf(item) !== -1;
    }

    indexOf(item: number): number {
        if (this.isEmpty) return -1;

        let index = -1;
        let current = this.head;

        while (current) {
            index++;
            if (current.val === item) return index;
            current = current.next;
        }

        return -1;
    }

    getKthFromTheEnd(kth: number) {
        let sizeCp = this.size;
        let current = this.head;
        
        while(sizeCp !== kth) {
            if(!current.next) return -1;

            current = current.next;
            sizeCp--;
        }

        return current;
    }

    getListAsArray(): Array<number> {
        let current = this.head;
        let output = [];
        let index = 0;

        while (current) {
            output[index++] = current.val;
            current = current.next;
        }

        return output;
    }

    reverse(): void {
        if (this.isEmpty) return;

        let previous = this.head;
        let current = this.head.next;


        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current
            current = next;
        }

        this.tail = this.head;
        this.tail.next = null;
        this.head = previous;

    }
}