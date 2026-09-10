<script setup>
</script>

<template>
  <div class="page">

    <header class="hero">
      <div class="container">
        <p class="about">About</p>
        <h1>Velorant Academy</h1>
        <h3>Precision Et Discipline</h3>
        <p class="lead">
          Velorant Academy is a premier esports training ground built for players who want to compete at the highest level. Through structured coaching, tactical drills, and relentless practice, we turn raw talent into championship-ready skill.
        </p>
      </div>
    </header>

    <main class="container main">
      <section class="card">
        <h2>Our Academy</h2>
        <p>
          Founded to bridge the gap between casual play and competitive
          excellence, Velorant Academy brings together seasoned coaches,
          dedicated squads, and a rigorous training program. From tactical
          fundamentals to advanced team strategy, every player is pushed
          to sharpen their instincts and rise through the ranks.
        </p>
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

.about {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #c8a100;
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
}

.card {
  background-color: #fff;
  border: 1px solid #eee0b8;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(43, 27, 94, 0.06);
}

.card h2 {
  font-size: 22px;
  margin: 0 0 16px;
  color: #1e3a8a;
}

.card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #555;
}
</style>