<script setup>
</script>

<template>
  <div class="page">

    <header class="hero">
      <div class="container">
        <p class="news">News</p>
        <h1>Velorant Academy</h1>
        <h3>Precision Et Discipline</h3>
        <p class="lead">
          Stay up to date with the latest from Velorant Academy — tournament results, roster updates, coaching announcements, and everything happening across our training programs.
        </p>
      </div>
    </header>

    <main class="container main">
      <section class="card">
        <h2>Academy Championship Week</h2>
        <p>
          This month, Velorant Academy hosted its annual Championship Week,
          bringing together squads from every training tier for a series
          of scrims, in-house tournaments, and coaching showcases.
          Players competed for top standings while coaches ran live
          strategy breakdowns between matches, giving newer members a
          front-row look at high-level decision-making.
          The week wrapped up with an awards ceremony recognizing standout
          performances, most-improved players, and the top-ranked squad
          of the term — capping off weeks of intense practice with a
          celebration of the academy's growing competitive community.
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

.news {
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