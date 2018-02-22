class Sorter {
    constructor() {
        this.arr = [];
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let indicesLength = indices.length;
        if (indicesLength < 2) {
            return this.arr;
        }
        indices.sort(function(a, b) {
            return a - b;
        })

        for (let i = indices[0]; i < indicesLength - 1; i++) {
            for (let j = indices[1]; j < indicesLength - i; j++) {
                this.arr[j] = [this.arr[j - 1], this.arr[j - 1] = this.arr[j]][0];
            }
        }
        return this.arr;
    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;