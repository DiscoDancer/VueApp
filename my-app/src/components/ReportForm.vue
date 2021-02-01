<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="140"
      label="Name"
      required
      clearable
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      hint="Only lowercase latin and _"
      persistent-hint
    ></v-text-field>

    <v-divider></v-divider>

    <v-textarea
      v-model="description"
      label="Description"
      :error-messages="descriptionErrors"
      :counter="140"
      required
      clearable
      maxlength="140"
      full-width
      single-line
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
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
    description: { required, maxLength: maxLength(140) },
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
        errors.push('Name must be at most 140 characters long');
      }
      if (!this.$v.name.required) {
        errors.push('Name is required.');
      }

      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) {
        return errors;
      }
      if (!this.$v.description.maxLength) {
        errors.push('Description must be at most 140 characters long');
      }
      if (!this.$v.description.required) {
        errors.push('Description is required.');
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

<style lang="scss">
  .v-textarea{
    &.error--text {
      label {
        color: #ff5252;
      }
    }
  }
</style>
