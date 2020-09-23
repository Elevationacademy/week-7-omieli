class UniqueArray {
  constructor() {
    this.uniqueStuffs = [];
    this.uniqeItem = {};
    this.length = 0;
  }

  exists(item) {
    return this.uniqueItem[item] ? true : false;
  }

  add(item) {
      if (!this.uniqeItem[item]) {
          this.uniqeItem[this.length] = item;
          this.length++
    }
  }

  showAll() {}

  get(index) {}
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
