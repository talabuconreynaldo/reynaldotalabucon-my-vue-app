<script setup>
</script>

<template>
  <div class="page">

    <header class="hero">
      <div class="container">
        <p class="academics">Academics</p>
        <h1>Velorant Academy</h1>
        <h3>Precision Et Discipline</h3>
        <p class="lead">
          Our training programs are built to develop every layer of a competitive player — mechanics, strategy, communication, and mindset. Each track is led by experienced coaches focused on turning practice into performance.
        </p>
      </div>
    </header>

    <main class="container main">

      <section class="card">
        <h2>Training Programs</h2>

        <div class="programs">
          <div class="program">
            <h3>Tactical Fundamentals</h3>
            <p>Master the core mechanics of aim, movement, and map awareness. This track builds the technical foundation every competitive player needs before stepping into advanced strategy.</p>
          </div>

          <div class="program">
            <h3>Strategy & Team Play</h3>
            <p>Learn how to read the game, coordinate with teammates, and execute coordinated plays. Focused on communication, positioning, and in-game decision-making under pressure.</p>
          </div>

          <div class="program">
            <h3>Competitive Coaching</h3>
            <p>One-on-one and team-based coaching sessions with analysts who break down gameplay, review VODs, and design personalized improvement plans for each player.</p>
          </div>

          <div class="program">
            <h3>Tournament Preparation</h3>
            <p>Get scrim experience, in-house tournaments, and structured practice against other squads to prepare for official competitions and ranked play.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Training Information</h2>
        <ul>
          <li>Sessions held both in-person and online</li>
          <li>Weekly performance reviews and VOD analysis</li>
          <li>Access to scrims and in-house tournaments</li>
          <li>Progress tracking across all skill tiers</li>
        </ul>
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

.academics {
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