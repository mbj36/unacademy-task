<template>
  <div class="center">
    <h3>
      Are you ready to start the quiz ?
    </h3>
    <br>
    <br>
    <router-link to="/quiz">
      <v-btn class="primary" dark large>
        Start Quiz
      </v-btn>
    </router-link>

  </div>

</template>

<script>
  export default {};
</script>

<style>
  .center {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 300px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  a,
  u {
      text-decoration: none;
  }
</style>
