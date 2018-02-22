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
        let tempArr = [];
        if (indicesLength < 2) {
            return this.arr;
        }
        indices.sort(function(a, b) {
            return a - b;
        });

        for (let i = 0; i < indicesLength; i++) {
            tempArr.push(this.arr[indices[i]]);
        }

        tempArr.sort(this.comparator);
        for (let i = 0; i < indicesLength; i++) {
            this.arr[indices[i]] = tempArr[i];
        }
        return this.arr;
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;