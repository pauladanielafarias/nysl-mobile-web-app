///json of the game schedule table (game-schedule.js)
const septemberGames= scheduleTable.septemberGames;
const octoberGames= scheduleTable.octoberGames;

//Vue.js - app
var app = new Vue({
  el:'#app',
  data:{
    septemberGamesData: septemberGames,
    octoberGamesData: octoberGames,
    matchId: "",
    monthData:"",
    showMoreButton:{
      text: "Show More [+]"
    },
    shown: false,
    signform: false,
  },
  methods:{
    showCurrent: function(hash){
        var currentPage =document.querySelector(".current") ;
        if(currentPage !==null) {
            currentPage.classList.remove("current");
            document.querySelector(hash).classList.add("current")
        }
    },/*
    onLoad: function(){
      window.onload=this.showCurrent;
    },*/
    showDetails: function(hash, id, month){
      var currentPage =document.querySelector(".current") ;
      if(currentPage !==null && window.orientation == 0 ) {
          currentPage.classList.remove("current");
          document.querySelector(hash).classList.add("current")
      }
      
        this.matchId = id;
        this.monthData = month; 
      
  },
    showMoreLess:function(){
      this.shown =!this.shown;
      this.showMoreButton.text = this.shown ? "Show Less [-]" : "Show More [+]"  
      }
  },
    orientationChange: function(){
      var detailsTable = document.querySelector("#game-details") ;
      window.onorientationchange = function() { 
        if(window.onorientationchange){
          detailsTable = this.showDetails() 
        }
      }
    },
    components: {
      loc: {
        props: ['location'],
        template: `
        <iframe :src="location" width="250" height="100"></iframe>
        `
      }
    }


});

