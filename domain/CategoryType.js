

export default class CategoryType {


    constructor(name,apiName,numberOfItem,textColor){
        this.name = name;
        this.apiName = apiName;
        this.numberOfItem = numberOfItem;
        this.textColor = textColor;
    }

    setNumberOfItem(numberOfItem ){
        this.numberOfItem = numberOfItem ;
    }
    getName(){
        return this.name;
    }
    getNumberOfItem(){
        return this.numberOfItem;
    }
    getApiName(){
        return this.apiName;
    }
    getTextColor(){
        if(this.textColor == null){
            return "#000";
        }
        return this.textColor;
    }


}