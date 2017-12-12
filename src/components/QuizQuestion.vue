<template>
  <div>
    <div v-for="(question, index) in questions" :key="question.id">
      <div v-show="index === questionIndex">
        <h2>{{ question.text }}</h2>
        <div v-for="(response,index) in question.options" :key="response.id">
          <v-btn color="primary" @click="next" :value="question.answer" v-model="userResponse[index]">{{response}}</v-btn>
        </div>
        <v-btn large class="error" @click="skip">Skip</v-btn>
      </div>
    </div>
    <div v-show="questionIndex === questions.length">
      <h2>Thanks for taking the Quiz</h2>
      <h3>Below are your scores:</h3>
      <h3>Total score:{{ score() }}/{{questions.length}}</h3>
      <div class="inline">
        <v-flex xs4 ml-5>
          <v-card dark color="primary">
            <v-card-text class="px-0 white--text">Correct Answer</v-card-text>
          </v-card><br>
          <li v-for="question in questions" :key="question.id">
            {{question.answer}}
          </li>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="error">
            <v-card-text class="px-0 white--text">Your Answer</v-card-text>
          </v-card><br>
          <li v-for="question in questions" :key="question.id">
            {{question.answer}}
          </li>
        </v-flex>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
      data() {
          return {
              questions: '',
              questionIndex: 0,
              userResponse: Array(8).fill(false)
          };
      },

      methods: {
          singleText: function() {
              axios.get('../../static/data/questions.json').then(response => {
                  this.questions = response.data;
                  console.log(this.questions);
              });
          },

          next: function() {
              this.questionIndex++;
          },

          skip: function() {
              this.questionIndex++;
          },

          score: function() {
              return this.userResponse.filter(function(val) {
                  return val;
              }).length;
          }
      },

      created: function() {
          this.singleText();
      }
  };
  // };
</script>

<style>
  .inline {
      display: flex;
  }
</style>
