<script setup>
</script>

<template>
  <div class="page">

    <header class="hero">
      <div class="container">
        <p class="contact">Contact Us</p>
        <h1>Velorant Academy</h1>
        <h3>WHERE STRATEGY MEETS SKILL</h3>
        <p class="lead">
          Have questions about enrollment, training tracks, or tournaments? Reach out to our team below — we're here to help you get started.
        </p>
      </div>
    </header>

    <main class="container main">

      <section class="card">
        <h2>Contact Information</h2>

        <div class="programs">
          <div class="program">
            <h3>MAIN</h3>
            <p>+63 (33) 329-1971</p>
          </div>

          <div class="program">
            <h3>TRUNKLINE</h3>
            <p>+63 (33) 330-7200</p>
          </div>

          <div class="program">
            <h3>MOBILE</h3>
            <p>+63 921 760 2647</p>
          </div>

          <div class="program">
            <h3>EMAIL</h3>
            <p><a href="mailto:ReynaldoTalabucon@velorantacademy.com">ReynaldoTalabucon@velorantacademy.com</a></p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background-color: #f5f6fa;
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #f4c430 100%);
  color: #fff;
  padding: 50px 0;
}

.contact {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #c8c800;
  margin: 0 0 8px;
  font-weight: 600;
}

.hero h1 {
  font-size: 32px;
  margin: 0 0 12px;
}

.lead {
  max-width: 640px;
  margin: 0;
  line-height: 1.6;
}

.main {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  background-color: #fff;
  border: 1px solid #eee0b8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(43, 27, 94, .06);
}

.card h2 {
  font-size: 20px;
  margin: 0 0 20px;
  color: #1e3a8a;
}

.programs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.program {
  padding: 16px;
  border: 1px solid #eee0b8;
  border-radius: 8px;
}

.program h3 {
  color: #1e3a8a;
  margin: 0 0 8px;
  font-size: 16px;
}

.program p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.card ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
  color: #2B1B5E;
}

</style>