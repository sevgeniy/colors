import { v4 as uuidv4 } from 'uuid';

class Color {
    private _id: string;
    private _title: string;
    private _value: string;
    private _rating: number = 0;

    constructor(title: string, value: string, rating?: number, id?: string) {
        this._id = id === undefined ? uuidv4() : id;
        this._title = title;
        this._value = value;
        if (rating !== undefined) this._rating = rating;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get value(): string {
        return this._value;
    }

    get rating(): number {
        return this._rating;
    }

    static fromJSON(s: string): Color {
        let obj = JSON.parse(s);
        return new Color(obj._title, obj._value, obj._rating, obj._id);
    }
}

export default Color;
