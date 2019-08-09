import styles from "../screens/Sign/styles";

export class RatioCalculator {
    constructor(screenWidth,screenHeight){
        this.width = 360;
        this.height=720;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        this.HeightRegulationFactor =this.screenHeight/this.height;

        this.WidthRegulationFactor = this.screenWidth/this.width;
    }

    getHeightRatio(height){
        if(height > this.realHeight){
            throw "height of component couldn't exceed root wrapper's height";
        }
        if(height < 1 ){
            throw "height of component should be greater than zero";
        }
        let ratio = String((height/this.height)*100);
        return ratio+"%";
    }

    getWidthRatio(width){
        let ratio = String((width/this.width)*100);
        return ratio+"%";
    }


    getRegHeightDp(height){
        return height * this.HeightRegulationFactor;
    }
    getRegWidthDp(width){
        return width * this.WidthRegulationFactor;
    }

    getDP(height){

    }

}

/**
 *
 * @constructor
 * 제플린에 있는 사이즈를 사용자의 스크린 크기에 맞추어 dp 로 변환된
 * 스타일을 리턴한다
 */

const deepCopy = function (obj){
    let clone = {};
    for(let prop in obj) {

        if(obj.hasOwnProperty(obj[prop])){
            if(typeof(obj[prop])=="object" && obj[prop] != undefined){
                clone[prop] = deepCopy(obj[prop]);
            }else{
                clone[prop] = obj[prop];
            }
        }

    }
    return clone;
};

export function ConvertZepSizeToRegularizedSize(calc,styleObj){

    let clone =deepCopy(styleObj);
    let doesPropContain = (target) => {
        String.prototype.includes().call(this,prop,target);
    };

    for(let prop in clone){

        if(!(doesPropContain("padding") || doesPropContain("margin"))){
            if(prop === "width"){
                clone[prop] = calc.getRegWidthDp(clone[prop]);
            }else if(prop==="height"){
                clone[prop] = calc.getRegHeightDp(clone[prop]);
            }
        }else{
            if(doesPropContain("Left") || doesPropContain("Right")){
                clone[prop] = calc.getRegWidthDp(clone[prop]);
            }else if(doesPropContain("Top") || doesPropContain("Bottom")){
                clone[prop] = calc.getRegHeightDp(clone[prop]);
            }
        }
    }

}