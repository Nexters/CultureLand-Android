export default class CategoryType {


    constructor(name,  numberOfItem, textColor, image) {
        //this.type = type;
        this.name = name;
        this.numberOfItem = numberOfItem;
        this.textColor = textColor;
        this.image = image;
    }

    setNumberOfItem(numberOfItem) {
        this.numberOfItem = numberOfItem;
    }

    getName() {
        return this.name;
    }

    getNumberOfItem() {
        return this.numberOfItem;
    }

    get
    ApiName() {
        return this.apiName;
    }

    getTextColor() {
        if (this.textColor == null) {
            return "#000";
        }
        return this.textColor;
    }

    getSVGImage() {

        return this.image;

    }


}