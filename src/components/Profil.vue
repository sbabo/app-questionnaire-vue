<template>
  <div class="login">
      <b-container class="login">
          <b-row>
              <b-col></b-col>
              <b-col>
                <h1>Bienvenue {{$route.params.name}}</h1>
              </b-col>
              <b-col></b-col>
          </b-row>
          <b-row>
              <b-col></b-col>
              <b-col>
                  <b-button>Commencer le test</b-button>
              </b-col>
              <b-col></b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'profil',
    data() {
        return {
            form: {
                email: this.$route.params.email,
                name: this.$route.params.name,
                company: this.$route.params
            },
        }
    },
    methods: {
        navigate() {
            router.push({name: "questionnaire", params: this.form});
        }
    }
}
</script>