Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        var that = this;    // 클로저 개념..
                            // 이렇게 저장안해주면
                            // 윈도우 객체를 잡는다.
        console.log('this', this);
        value.forEach(function (element) {
            console.log(this);
            console.log(that);
            that.splice(index++, 0, element);
        });
    }else{
        this.splice(index, 0, value)
    }
}

Array.prototype.remove = function(index){
    this.splice(index,1);
}