<template>
	<div>
		<div v-for="(question, index) in questions" :key="question.id">
			<div v-show="index === questionIndex">
				<h2>{{ question.text }}</h2>
				<div v-for="(response,index) in question.options" :key="response.id">
					<v-btn color="primary" @click="next">{{response}}</v-btn>
				</div>
				<v-btn large class="error" @click="skip">Skip</v-btn>
			</div>
		</div>
		<div v-show="questionIndex === questions.length">
			<h2>Thanks for taking the Quiz</h2>
			<h3>Below are your scores:</h3>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';

	export default {
	    data() {
	        return {
	            questions: '',
	            questionIndex: 0
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

	        score: function() {}
	    },

	    created: function() {
	        this.singleText();
	    }
	};
	// };
</script>
