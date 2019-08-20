import styles from "../screens/Sign/styles";
import key_mirror from 'key-mirror';

export const ACCESS_TOKEN = "access_token";
export const EXPIRED_AT = "expired_at";
export const SORT_BY_NEW = "new";
export const SORT_BY_POPULAR = "popular";

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

        // console.log("얻어진 세로 비율 : "+(height/this.height)*100);
        let ratio = String((height/this.height)*100);
        return ratio+"%";
    }

    getWidthRatio(width){
        let ratio = String((width/this.width)*100);
        // console.log("얻어진 가로 비율 : "+ratio+"%");
        return ratio+"%";
    }


    getRegHeightDp(height){
        // console.log("HeightregulationFactor :"+this.HeightRegulationFactor
        //     +", RegularizedMargin : "+height*this.HeightRegulationFactor);
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

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const LIST_TYPE = key_mirror({
    FOR_CATEGORY : null,
    FOR_DATE : null,
});

export const MY_PAGE_CATEGORY = {
    LIKED : "liked",
    EXHIBITION : "exhibition",
    CONCERT : "concert",
    MUSICAL : "musical",
    PLAY : "play",
    ETC : "etc",
};

export const CATEGORY = {
    ALL_PRODUCT : "all_product",
    EXHIBITION : "exhibition",
    CONCERT : "concert",
    MUSICAL : "musical",
    PLAY : "play",
    ETC : "etc",
};

/**
 * @return {number}
 */
export function CATEGORY_KEY(category){
    switch(category){
        case CATEGORY.ALL_PRODUCT:
            return 0;
        case CATEGORY.EXHIBITION:
            return 1;
        case CATEGORY.CONCERT:
            return 2;
        case CATEGORY.MUSICAL:
            return 3;
        case CATEGORY.PLAY:
            return 4;
        case CATEGORY.ETC:
            return 5;
    }
}

export function CATEGORY_KOR(category){
    switch(category){
        case CATEGORY.ALL_PRODUCT:
            return "전체";
        case CATEGORY.EXHIBITION:
            return "전시";
        case CATEGORY.CONCERT:
            return "콘서트";
        case CATEGORY.MUSICAL:
            return "뮤지컬";
        case CATEGORY.PLAY:
            return "연극";
        case CATEGORY.ETC:
            return "기타";
    }
}

export function MAIN_MONTH(date) {
    const dateSlice = date.substr( 4, 2 );
    switch(dateSlice){
        case '01':
            return "JANUARY";
        case '02':
            return "FEBRUARY";
        case '03':
            return "MARCH";
        case '04':
            return "APRIL";
        case '05':
            return "MAY";
        case '06':
            return "JUNE";
        case '07':
            return "JULY";
        case '08':
            return "AUGUST";
        case '09':
            return "SEPTEMBER";
        case '10':
            return "OCTOBER";
        case '11':
            return "NOVEMBER";
        case '12':
            return "DECEMBER";
    }
};

export function ISNULL(value){
    return (value === undefined || value === null || value.length <= 0) ? true : false;
}

