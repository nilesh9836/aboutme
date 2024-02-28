<template>
  <div class="contact">
    <h2>Contact</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
    }
  }
};
</script>

<style scoped>
.contact {
  /* Add your custom styles here */
}
</style>
