<template>
  <div class="test">
    <h4 style="text-align: right; margin-right: 50px;" >
    Seconds Elapsed since Exam Start: {{ time }}
   </h4>
    <h1>{{ test[0].name }}</h1>

      <div v-for="question, index in test[0].questions" >
          <h2 v-bind:class="index" v-on:click="handleClickEvents(index)">{{question}}</h2>
          <br>
          <textarea v-bind:class="index" placeholder="Answer here..." style="width: 500px;" @change="handleTextEvents(index)" v-on:click="handleClickEvents(index)"></textarea>
      </div>
      <br>
      <br>
      <video id="videoElement" controls poster="velocity-thumbnail.jpg" @playing="handleVideoEvents()" @pause="handleVideoEvents()">
          <source src="https://s3-ap-northeast-1.amazonaws.com/daniemon/demos/Velocity-Mobile.mp4" type="video/mp4" media="all and (max-width:680px)"> 
          <source src="https://s3-ap-northeast-1.amazonaws.com/daniemon/demos/Velocity-Mobile.webm" type="video/webm" media="all and (max-width:680px)"> 
          <source src="https://s3-ap-northeast-1.amazonaws.com/daniemon/demos/Velocity-SD.mp4" type="video/mp4">
          <source src="https://s3-ap-northeast-1.amazonaws.com/daniemon/demos/Velocity-SD.webm" type="video/webm">
          <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
      </video>

      <br>
      <br>
      <br>
      <button v-on:click="getAnswers()">Submit Answers</button>
  </div>
</template>

<script>
import TestService from '@/services/TestService'
import producerService from '@/services/producerService'
export default {
  name: 'test',
  data () {
    return {
      time: 0,
      test: []
    }
  },
  mounted () {
    this.toggleTimer()
    this.getTest()
  },
  methods: {
    async getTest () {
      const response = await TestService.fetchTest()
      this.test = response.data
    },
    getTime: function (){
        var timeTest= {
        testId: this.test[0]._id, //Id of the test
        time: this.time,//Time it took the student to finish the test
      };
      producerService.sendMessage(timeTest);
    },
    getAnswers: function (){
        //get answers from questions and finish test logic
        this.getTime();
    },
    handleTextEvents: function (index){
      var textareaEvent= {
        testId: this.test[0]._id,//Id of the test
        event: 1,//Text changed event identifier/ event# 1
        question: index
      };
      producerService.sendMessage(textareaEvent);

    },
    handleClickEvents: function (index){
      var clickEvent= {
        testId: this.test[0]._id,//Id of the test
        event: 2,//Question clicked event identifier/ event# 2
        question: index
      };
      producerService.sendMessage(clickEvent);

    },
    handleVideoEvents: function (){
      var videoEvent= {
        testId: this.test[0]._id,//Id of the test
        event: 3,//Question clicked event identifier/ event# 2
        question: "video"
      };
      producerService.sendMessage(videoEvent);

    },
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
        console.log('timer stops');
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning
    },
    incrementTime() {
      this.time = parseInt(this.time) + 1;
    }
  }
}
</script>
