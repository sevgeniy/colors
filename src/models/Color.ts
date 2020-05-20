import { v4 as uuidv4 } from 'uuid';

class Color {
    private id: string;
    private title: string;
    private value: string;
    private rating: number = 0;

    constructor(title: string, value: string, rating?: number, id?: string) {
        this.id = id === undefined ? uuidv4() : id;
        this.title = title;
        this.value = value;
        if (rating !== undefined) this.rating = rating;
    }

    get Id(): string {
        return this.id;
    }

    get Title(): string {
        return this.title;
    }

    get Value(): string {
        return this.value;
    }

    get Rating(): number {
        return this.rating;
    }
}

export default Color;
