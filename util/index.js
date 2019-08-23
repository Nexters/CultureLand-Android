import styles from "../screens/Sign/styles";
import key_mirror from 'key-mirror';
import {Text} from 'react-native';

export const SOCIAL_ACCESS_TOKEN = "social_access_token";
export const SERVICE_ACCESS_TOKEN = "service_access_token";
export const EXPIRED_AT = "exp";
export const SORT_BY_NEW = "new";
export const SORT_BY_POPULAR = "popular";
export const OAUH_SOCIAL_SERVICE = "oauth_social_service";
export const GOOGLE = 'google';
export const FACEBOOK = 'facebook';


export class RatioCalculator {
    constructor(screenWidth, screenHeight) {
        this.width = 360;
        this.height = 720;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        this.HeightRegulationFactor = this.screenHeight / this.height;

        this.WidthRegulationFactor = this.screenWidth / this.width;

    }

    getHeightRatio(height) {
        if (height > this.realHeight) {
            throw "height of component couldn't exceed root wrapper's height";
        }
        if (height < 1) {
            throw "height of component should be greater than zero";
        }

        // console.log("얻어진 세로 비율 : "+(height/this.height)*100);
        let ratio = String((height / this.height) * 100);
        return ratio + "%";
    }

    getWidthRatio(width) {
        let ratio = String((width / this.width) * 100);
        // console.log("얻어진 가로 비율 : "+ratio+"%");
        return ratio + "%";
    }


    getRegHeightDp(height) {
        // console.log("HeightregulationFactor :"+this.HeightRegulationFactor
        //     +", RegularizedMargin : "+height*this.HeightRegulationFactor);
        return height * this.HeightRegulationFactor;
    }

    getRegWidthDp(width) {
        return width * this.WidthRegulationFactor;
    }

    getDP(height) {

    }

}

/**
 *
 * @constructor
 * 제플린에 있는 사이즈를 사용자의 스크린 크기에 맞추어 dp 로 변환된
 * 스타일을 리턴한다
 */


const deepCopy = function (obj) {
    let clone = {};
    for (let prop in obj) {

        if (obj.hasOwnProperty(obj[prop])) {
            if (typeof(obj[prop]) == "object" && obj[prop] != undefined) {
                clone[prop] = deepCopy(obj[prop]);
            } else {
                clone[prop] = obj[prop];
            }
        }

    }
    return clone;
};

export function ConvertZepSizeToRegularizedSize(calc, styleObj) {

    let clone = deepCopy(styleObj);
    let doesPropContain = (target) => {
        String.prototype.includes().call(this, prop, target);
    };

    for (let prop in clone) {

        if (!(doesPropContain("padding") || doesPropContain("margin"))) {
            if (prop === "width") {
                clone[prop] = calc.getRegWidthDp(clone[prop]);
            } else if (prop === "height") {
                clone[prop] = calc.getRegHeightDp(clone[prop]);
            }
        } else {
            if (doesPropContain("Left") || doesPropContain("Right")) {
                clone[prop] = calc.getRegWidthDp(clone[prop]);
            } else if (doesPropContain("Top") || doesPropContain("Bottom")) {
                clone[prop] = calc.getRegHeightDp(clone[prop]);
            }
        }
    }

}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function omitAutoCompleteText(result) {

    if (result == "" || result == null || result == undefined || (result != null && typeof result == "object" && !Object.keys(result).length)) {
        return;
    }

    if(result.length >= 27){
        return result.slice(0,21) + `...`;
    }


    if(result.length < 20){
        return result;
    }

    let temp = result.slice(0,25);

    regResult = temp.match(/[^(\[)|(\])|(\()|(\))|(\.)|(\,)]/g);

    if (regResult != null) {
        count = regResult.length;
    }

    if (count > 20) {
        return result.slice(0, 24) + `...`;
    } else {
        return temp;
    }
}

export const LIST_TYPE = {
    FOR_CATEGORY : "category",
    FOR_DATE : "date",
};
export const MY_PAGE_CATEGORY = {
    LIKED: "liked",
    EXHIBITION: "exhibition",
    CONCERT: "concert",
    MUSICAL: "musical",
    PLAY: "play",
    ETC: "etc",
};

export const CATEGORY = {
    ALL_PRODUCT: "all_product",
    EXHIBITION: "exhibition",
    CONCERT: "concert",
    MUSICAL: "musical",
    PLAY: "play",
    ETC: "etc",
    LIKE : "like",
};

/**
 * @return {number}
 */
export function CATEGORY_KEY(category) {
    switch (category) {
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
        case CATEGORY.LIKE:
            return 6;
    }
}
export function CATEGORY_BY_INDEX(index) {
    switch (index) {
        case 0:
            return CATEGORY.ALL_PRODUCT;
        case 1:
            return CATEGORY.EXHIBITION;
        case 2:
            return CATEGORY.CONCERT;
        case 3:
            return CATEGORY.MUSICAL;
        case 4:
            return CATEGORY.PLAY;
        case 5:
            return CATEGORY.ETC;
    }
}

export function CATEGORY_KOR(category) {
    switch (category) {
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
        case CATEGORY.LIKE:
            return "좋아하는 기록";
    }
}


export function KOR_CATEGORY_TO_ENG(category) {
    switch (category) {
        case "전시":
            return CATEGORY.EXHIBITION;
        case "콘서트":
            return CATEGORY.CONCERT;
        case "뮤지컬":
            return CATEGORY.MUSICAL;
        case "연극":
            return CATEGORY.PLAY;
        case "기타":
            return CATEGORY.ETC;
    }
}
export function MAIN_MONTH(date) {
    ///const dateSlice = date.substr(4, 2);
    switch (date) {
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

export function ISNULL(value) {
    return (value === undefined || value === null || value.length <= 0) ? true : false;
}

export function trimCurrentMillisTo10Fig() {
    return parseInt(Date.now().toString().slice(0, 10));
}


export function KOR_SORT_TO_CONST(sort){
    switch(sort){
        case "최신순":
            return SORT_BY_NEW;
        case "인기순":
            return SORT_BY_POPULAR;
    }
}