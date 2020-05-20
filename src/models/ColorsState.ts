import ColorModel from './Color';

class ColorsState {
    colors: ColorModel[];
    sortBy: string;

    constructor(colors: ColorModel[], sortBy: string) {
        this.colors = colors;
        this.sortBy = sortBy;
    }
}

export default ColorsState;
