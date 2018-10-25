import Vue from 'vue';

const info = {
    template: "#js-slider-info",
    props: {
        work: Object
    }    
};
const btns = {
    template: "#js-slider-btns",
    props:{
        works : Array,   
        index: Number ,   
       // ["direction"]  
    },
    data(){
        return{
            prevButtonWorks:[],
            nextButtonWorks:[]
        }
    },
    created(){
        this.prevButtonWorks = this.transformWorksForButton('prev');
        this.nextButtonWorks = this.transformWorksForButton('next');
    },
    methods:{

        slide: function(direction) {
        this.$emit("slide", direction);
        },

        transformWorksForButton(buttonDirection){
            const worksArray = [...this.works];
            const lastItem = worksArray[worksArray.length - 1];
            

            switch (buttonDirection) {
                case "prev":
                    worksArray.unshift(lastItem);
                    worksArray.pop();
                    break;
                case "next":
                    worksArray.push(worksArray[0]);
                    worksArray.shift();
                    break;
                default:
                    break;
            }
            return worksArray ;
        }
    }   
};
const display = {
    template: "#js-slider-display" ,
    components:{ btns },
    props: {
        work: Object,
        worksDisplay : Array,   
        indexDisplay: Number 
    },
    data: function () {
        return {
            displayDirections: ["displayDirection"],            
            worksDisplay  : "works",     
            indexDisplay: "index"   
        };
      },
    methods: {
        slideListener: function (displayDirection) {
            this.$emit("slideListener",displayDirection );        
        }
      }
};


new Vue({
    el: "#slider-component",
    components:{ info, display },
    data(){
        return{
            works:[],
            currentIndex: 0
        }
    },
    computed:{
        currentWork(){
            return this.works[this.currentIndex]
        }
    },
    watch:{
        currentIndex(value){
            this.loopCurrentIndex(value);
        }
    },
    created(){
        const data = require("../../../data/work.json");
        this.works =data;
        this.currentWork = data[0];
    },
    methods:{
        loopCurrentIndex(value){
            const worksNumCountedFronZero = this.works.length - 1;

            if(value > worksNumCountedFronZero) this.currentIndex = 0
            if(value < 0) this.currentIndex = worksNumCountedFronZero
        },
        handleSlide(displayDirection){
            switch (displayDirection) {
                case "prev":
                    this.currentIndex = this.currentIndex - 1;
                    break;
                case "next":
                    this.currentIndex = this.currentIndex + 1;                    
                    break;            
                default:
                    break;
            }
            
        }
    },
    
    template: "#js-slider-root"
})