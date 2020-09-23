class UniqueArray {
    constructor() {
        this.uniqueStuffs = {}
        this.length = 0
    }

    exists(item) { 
        return this.uniqueStuffs[item]?true:false
    }

    add(item) { 
        if (!this.uniqueStuffs[item]){
            this.uniqueStuffs[item] = true
            this.uniqueStuffs.length++   
        }
    }
    
    showAll() { }

    
    
    get(index) { }
    

}