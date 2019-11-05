<template>
    <div class="result">
        <b-container class="result">
            <b-row>
                <b-col></b-col>
                <b-col>
                    <h1>Resultat</h1>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
                <b-col>
                    <p>Félicitation {{$route.params.name}} !</p>
                    <p>Vous avez inscrit {{$route.params.scoreFinal}} bonnes réponses ! </p>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
                <b-col>
                    <b-button variant="primary" v-on:click="goToQuestion">Recommencer le test</b-button>
                    <b-button variant="danger" v-on:click="goToLogin">Quitter</b-button>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'result',
    data() {
        return {
            form: {
                email: this.$route.params.email,
                name: this.$route.params.name,
                company: this.$route.params.company
            }
        }
    },
    created() {
        console.log(this.$route.params.scoreFinal);
    },
    methods: {
        goToQuestion() {
            this.$router.push({name: "question", params: this.form});
        },
        goToLogin() {
            this.$router.push({name: "login"});
        }
    }
}
</script>