type Child =  {
    id: number;
    presents: string[]
}
export class GiftRegistry {
    private temDb: Child[]
    constructor() {
        this.temDb = []
    }

    addGift(child: number, present: string ){
        const existingChild = this.temDb.find(el => el.id === child);
        if (existingChild){
            existingChild.presents.push(present);
        }else{
            this.temDb.push({id: child, presents: [present]})
        }
    }

    removeGift(child: number, present: string ){
        const existingChildIndex = this.temDb.findIndex(el => el.id === child);

        if (existingChildIndex !== -1) {
            const existingChild = this.temDb[existingChildIndex];
            const presentIndex = existingChild.presents.findIndex(p => p === present);

            if (presentIndex !== -1) {
                existingChild.presents.splice(presentIndex, 1);
            } else {
                throw new Error("Gift not found");
            }
        } else {
            throw new Error("Child not found");
        }
    }

    getGiftsForChild(child: number){
        const existingChild = this.temDb.find(el => el.id === child);
        if (existingChild)
            return existingChild.presents;
        throw Error("No child")
    }
}
