<template>
  <form @keyup.enter="submit">
    <v-text-field
      pattern="^([a-z])$"
      v-model="name"
      :error-messages="nameErrors"
      :counter="140"
      label="Name*"
      required
      outlined
      clearable
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      hint="Only lowercase latin and _"
      persistent-hint
    ></v-text-field>

    <v-divider></v-divider>

    <v-textarea
      v-model="description"
      label="Description*"
      :error-messages="descriptionErrors"
      :counter="140"
      required
      outlined
      clearable
      maxlength="140"
      full-width
      single-line
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
    ></v-textarea>

    <v-divider></v-divider>

    <v-autocomplete
      v-model="tags"
      :items="allTags"
      chips
      label="Tags"
      full-width
      hide-details
      hide-no-data
      hide-selected
      multiple
      outlined
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
import { lowercaseValidator } from '@/utils/lowercase-validator';
import { reportTags } from '@/data/reportTags';

export const maxTextSize = 140;

export default {
  name: 'ReportForm',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(maxTextSize), lowerCase: lowercaseValidator },
    description: { required, maxLength: maxLength(maxTextSize) },
  },
  data() {
    return {
      name: '',
      description: '',
      tags: [],
      allTags: reportTags,
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) {
        return errors;
      }
      if (!this.$v.name.maxLength) {
        errors.push(`Name must be at most ${maxTextSize} characters long`);
      }
      if (!this.$v.name.required) {
        errors.push('Name is required.');
      } else if (!this.$v.name.lowerCase) {
        errors.push('Name should consist of only lowercase latin and _.');
      }

      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) {
        return errors;
      }
      if (!this.$v.description.maxLength) {
        errors.push(`Description must be at most ${maxTextSize} characters long`);
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

      if (this.nameErrors.length === 0 && this.descriptionErrors.length === 0) {
        const { name, description, tags } = this;
        this.$store.dispatch('addReport', { name, description, tags });
      }
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.description = '';
      this.tags = [];
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
