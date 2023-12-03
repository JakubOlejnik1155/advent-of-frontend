type QueItem<T> = {
    priority: number
    element: T
}

export class ChristmasQueue<T> {
    private items: QueItem<T>[]
    constructor() {
        this.items = [];
    }

    enqueue(element: T, priority: number) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority < queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw Error("There are no letters in the queue!");
        }
        const element =  this.items.shift();
        return element?.element
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
