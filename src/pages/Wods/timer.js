class Timer {
    constructor(updateDomValue, currentValue){
        this.updateDomValue = updateDomValue
        this.currentValue = currentValue;
    }
    timeFlow(){
        setInterval(function(){
            this.updateDomValue(this.currentValue--);
        }, 1000);
    }
}

export default Timer;