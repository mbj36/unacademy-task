<template>

    <div>

        <div v-for="(question, index) in questions" :key="question.id">

            <div v-show="index === questionIndex">

                <!-- Displaying Text -->
                <h2>{{ question.text }}</h2>

                <!-- Displaying Options -->
                <div v-for="(response,index) in question.options" :key="response.id">
                    <v-btn color="primary" @click="next">{{response}}</v-btn>
                </div>

                <!-- Skip Button -->
                <v-btn large class="error" @click="skip">Skip</v-btn>

            </div>

        </div>

        <div v-show="questionIndex === questions.length">

            <h2>Thanks for taking the Quiz</h2>

            <h3>Checkout your scores:</h3>

            <div class="inline">

                <v-flex xs4 ml-5>

                    <v-card dark color="primary">
                        <v-card-text class="px-0 white--text">Correct Answer</v-card-text>
                    </v-card><br>

                    <li v-for="(question, index) in questions" :key="question.id">
                        {{question.answer}}
                    </li>

                </v-flex>

                <v-flex xs4>

                    <v-card dark color="error">
                        <v-card-text class="px-0 white--text">Your Answer</v-card-text>
                    </v-card><br>

                    <li v-for="x in userResponse" :key="x.id">
                        {{x}}
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
                userResponse: [] //For getting User responses
            };
        },

        methods: {
            // Getting JSON data
            singleText: function() {
                axios.get('../../static/data/questions.json').then(response => {
                    this.questions = response.data;
                    console.log(this.questions);
                });
            },

            next: function(e) {
                this.questionIndex++;
                var clickedElement = e.target.innerHTML;
                this.userResponse.push(clickedElement);
            },

            skip: function(e) {
                this.questionIndex++;
                var clickedElement = e.target.innerHTML;
                this.userResponse.push(clickedElement);
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
        margin-left: 15%;
    }
</style>
