<template>
  <div>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col>
          <h1>Question n°{{this.countQuestion+1}}</h1>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col cols="9">
          <h2>{{obj[countQuestion].text}}</h2>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <div>
            <b-form-group label="Choisissez une ou plusieurs réponses:">
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="selected"
                :options="obj[countQuestion].answers"
                name="flavour-1"
              ></b-form-checkbox-group>
            </b-form-group>

            <div>Réponse: <strong>{{ selected }}</strong></div>
            <div>
              <b-button v-on:click="validResponse">Valider et passer à la question suivante</b-button>
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import axios from 'axios'
import Questions from '@/components/json/Questions.json'

var selected = []
  export default {
    data() {
      return {
        countQuestion: 0,
        score: 0,
        obj: Questions.questions,
        selected: [], // Must be an array reference!
        form: {
          email: this.$route.params.email,
          name: this.$route.params.name,
          company: this.$route.params.company,
          scoreFinal: 0
        }
      }
    },
    created(){
    // Fetch Data
    },
    methods: {
      fetchData(){

      },
      increment() {
        this.countQuestion++;
      },
      validResponse() {
        if(this.selected[0] == this.obj[this.countQuestion].answer) {
          this.score++;
        }
        this.increment();
        this.selected = [];


        if (this.countQuestion == this.obj.length) {
          this.form.scoreFinal = this.score;
          console.log(this.form.scoreFinal);
          this.$router.push({name: "result", params: this.form})
          console.log("C'est fini")
        }
      },
    }
  }
</script>