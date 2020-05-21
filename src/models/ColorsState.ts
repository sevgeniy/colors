import ColorModel from './Color';

class ColorsState {
    colors: ColorModel[];
    sortBy: string;

    constructor(colors: ColorModel[], sortBy: string) {
        this.colors = colors;
        this.sortBy = sortBy;
    }

    static fromJSON(s: string): ColorsState {
        let obj = JSON.parse(s);

        return new ColorsState(
            obj.colors.map(
                (c: any) => new ColorModel(c._title, c._value, c._rating, c._id)
            ),
            obj.sortBy
        );
    }
}

export default ColorsState;
