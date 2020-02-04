class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.pointer = 0;
  }

  _hash(key) {
    // generates a number from a given string
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      // if address is not occupied
      this.data[address] = [];
    }
    const item = [key, value];
    this.data[address].push(item); // push key value pair to that address
  }

  get(key) {
    const address = this._hash(key);
    if (!this.data[address]) return undefined;

    const bucket = this.data[address];

    let i = 0;
    while (bucket[i]) {
      if (bucket[i][0] === key) return bucket[i];
      i++;
    }

    return undefined;
  }
}

const myHash = new HashTable(1);
myHash.set("amen", 300);
myHash.set("backthen", "another value");
console.log(myHash.get("backthe"));
