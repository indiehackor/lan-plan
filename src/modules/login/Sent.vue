<template>
    <main>
        <h1>epost sendt!</h1>
        <p>Sjekk eposten din for å sette et nytt passord.</p>
        <router-link class="login-link" to="/login">Logg inn</router-link>
    </main>
</template>

<script>
  export default {
    name: 'Sent'
  }
</script>

<style scoped>
    .login-link {
        font-size: 40px;
        color: white;
    }
</style>
