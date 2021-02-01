<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="140"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-divider></v-divider>

    <v-textarea
      v-model="description"
      label="Description"
      counter
      maxlength="140"
      full-width
      single-line
    ></v-textarea>

    <v-divider></v-divider>

    <v-autocomplete
      v-model="selected"
      :items="['Customer', 'Support', 'Invest', 'Daily', 'Weekly']"
      chips
      label="Tags"
      full-width
      hide-details
      hide-no-data
      hide-selected
      multiple
      single-line
      class="pb-3"
    ></v-autocomplete>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'ReportForm',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(140) },
  },
  data() {
    return {
      name: '',
      description: '',
      selected: [],
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) {
        return errors;
      }
      if (!this.$v.name.maxLength) {
        errors.push('Name must be at most 10 characters long');
      }
      if (!this.$v.name.required) {
        errors.push('Name is required.');
      }

      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.description = '';
      this.selected = [];
    },
  },
};
</script>

<style scoped>

</style>
