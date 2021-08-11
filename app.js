const app = Vue.createApp({
  data() {
    return {
      question: '',
      timer: '',
      starts:'Start',
      q:[],
      t:[],
      timestamp:'',
      isActive: true,
      istimer: false,
      errors:[]
    };
    
  },
  created() {
    setInterval(this.cr, 1000);
},
  methods: {
    addgoal()
    {
      if (!this.question) {
        this.errors.push('Question required.');
      }
    else if (!this.timer) {
        this.errors.push('Timer required.');
      }
      else{
      this.q.push(this.question);
      this.t.push(this.timer);
      this.isActive=false;
      
      }
      // console.log(" q length" + this.q.length);
      // console.log(" t length" + this.t.length);
      //this.start();
    },
    cr(){
 
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime =  time;
        this.timestamp = dateTime;

    },
    start() {
     this.starts = ' Exam Started....';
     this.istimer= true;
      for( let i=0; i< this.q.length; i++)
      {
        
       // console.log("timer"+this.q[i]);
        for(let j=0;j<this.q[i];j++)
        {
          if(j ==this.q[i] )
        {
          this.starts = ' Exam End';
          this.play();
        }
          setTimeout(() => {
                this.play(),
                console.log("start");
                
              //console.log(j);
              //console.log("timer"+this.t[i]);
              //console.log("question"+this.q[i]);
              //}, j * this.t[i] *60* 1000);
            }, j*this.t[i]*60*1000);
             
        }

      }
    },
    play() {
      this.$refs.audioElm.play();
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
    },
  },
});

app.mount('#user-goals');
