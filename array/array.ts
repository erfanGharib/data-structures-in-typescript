export class Arr {
    _length: number;
    _arr: Array<string>;
    count: number;

    constructor(_length: number) {
        this._length = _length;
        this._arr = [];
        this.count = 0;
    }
  
    insert(item: string) {
        if(this.count === this._length)
            throw new Error('Max array length reached!');

        this._arr[this.count++] = item;
    }

    removeAt(index: number) {
        if(!this._arr[index])
            throw new Error('Invalid index')

        this._arr.forEach(() => {
            this._arr[index] = this._arr[index+1]
        })
        this.count--;
        this._arr.length--;
    }

    get inner() {
        return this._arr;
    }
}