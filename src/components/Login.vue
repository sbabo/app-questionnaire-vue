<template>
  <div class="login">
      <b-container class="login">
          <b-row>
              <b-col></b-col>
              <b-col>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your first name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          required
          placeholder="Enter your first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your last name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter your last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label= "Your company:" label-for="input-3">
          <b-form-input
          id="input-3"
          v-model="form.company"
          required
          placeholder="Enter your company's name"
          ></b-form-input>
      </b-form-group>
<!--
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
-->

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
              </b-col>
              <b-col>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
  export default {
      name: 'login',
    data() {
      return {
        form: {
          email: '',
          name: '',
          company: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$router.push({name: "profil", params: this.form});
      },

      navigate() {
        router.push({name: "Profil"})
      },


      //Reset tous les champs du formulaire
      onReset(evt) {
        evt.preventDefault()

        this.form.email = ''
        this.form.name = ''
        this.form.company = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>