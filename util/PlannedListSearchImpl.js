



export default class PlannedListSearchManagerImpl {

    constructor(context){
        this.context = context;
        this.requestInterval = parseInt(1000);
        this.lastRequestedTime=0;

    }


    doSearch(text){
        var now  = parseInt((new Date).getTime());
        let diff = parseInt(now-this.lastRequestedTime);

        if(diff < 500){
            return;
        }else{
            console.log("now : "+now +" , "+this.lastRequestedTime+", "+
                diff+", 입력 텍스트"+text);
            this.lastRequestedTime = now;

        }

    }

    onSelectSearchResult(){
        this.setState({isSearchMode: false});
        //this.scrollView.scrollTo({y:this.lastScrollY,animated:true});
    }

    cancelSearch(){
        this.setState({isSearchMode: false});
    }
}