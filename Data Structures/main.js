class UniqueArray {
  constructor() {
    this.uniqueStuffs = [];
    this.uniqeItem = {};
    this.length = 0;
  }



  add(item) {
    if (!this.exists(item)) {
      this.uniqeItem[item] = true;
      this.uniqueStuffs[this.length] = item;
      this.length++;
    }
  }

  exists(item) {
    if (this.uniqeItem[item]) return true;
    else return false;
    }
    
  showAll() {
    console.log(this.uniqueStuffs);
  }

    get(index) {
        if (this.length < index) return false;
        else return this.uniqueStuffs[index]
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
uniqueStuff.showAll();
console.log(uniqueStuff.get(2)) //prints "hydrogen"
