<script setup>
</script>

<template>
<div class="page">
<!-- Page header -->
<header class="hero">
<div class="container">
<p class="admission">Admissions</p>
<h1>Apply, Train, Compete</h1>
<p class="lead">
Velorant Academy is now accepting applications for aspiring competitive players. Whether you're chasing your first tournament or aiming for the pro circuit, our program gives you the coaching, structure, and community to get there.

</p>
</div>
</header>

<main class="container main">
<!-- Admission requirements -->
<section class="card">
<h2>Enrollment Requirements</h2>
<div class="requirements-grid">
<ul>
<li>Completed enrollment application form </li>
<li>Minimum in-game rank or trial assessment </li>
<li>Valid government-issued ID </li>
<li>Parent/guardian consent (for minors) </li>
</ul>
<ul>
<li>Stable internet connection and compatible PC setup </li>
<li>Availability for scheduled training sessions </li>
<li>Signed code of conduct agreement </li>
<li>Recommendation letter (optional, for scholarship track) </li>
</ul>
</div>
</section>

<!-- Tuition calculator -->
<section class="card">
<h2>Training Fee Calculator</h2>
<p class="muted">
Select your track and training load to estimate your fees for one
term. This is an estimate only — final assessment is issued by
the Academy Office.
</p>

<div class="form-grid">
<label class="field">
<span>Program</span>
<select>
<option>Competitive Team Track</option>
<option>Individual Skill Development</option>
<option>Coaching & Strategy Track</option>
<option>Content & Broadcast Track</option>
<option>Youth Development Program</option>
</select>
</label>

<label class="field">
<span>Tier Level</span>
<select>
<option>Rookie Tier</option>
<option>Amateur Tier</option>
<option>Semi-Pro Tier</option>
<option>Pro Tier</option>
</select>
</label>

<label class="field">
<span>Training hours this month: 21</span>
<input type="range" min="12" max="27" value="21" />
<div class="range-labels">
<span>12</span>
<span>27</span>
</div>
</label>
</div>

<div class="field payment-terms">
<span>Payment terms</span>
<div class="button-group">
<button type="button" class="pill active">Full payment</button>
<button type="button" class="pill">3 installments</button>
<button type="button" class="pill">5 installments</button>
</div>
</div>

<!-- Breakdown table -->
<div class="table-wrap">
<table>
<thead>
<tr>
<th class="align-left">Schedule of Fees</th>
<th class="align-right">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Training Fee (21 hrs × ₱650)</td>
<td class="align-right">₱13,650</td>
</tr>
<tr>
<td>Facility & Equipment Fee (21 hrs × ₱150)</td>
<td class="align-right">₱3,150</td>
</tr>
<tr>
<td>Miscellaneous Fee (8% of training fee)</td>
<td class="align-right">₱1,092</td>
</tr>
<tr class="muted-row">
<td>Registration Fee</td>
<td class="align-right">₱750</td>
</tr>
<tr class="muted-row">
<td>Coaching Materials Fee</td>
<td class="align-right">₱500</td>
</tr>
<tr class="muted-row">
<td>Tournament Fee</td>
<td class="align-right">₱350</td>
</tr>
<tr class="muted-row">
<td>Medical & Wellness Fee</td>
<td class="align-right">₱400</td>
</tr>
<tr class="muted-row">
<td>Performance Testing Fee</td>
<td class="align-right">₱300</td>
</tr>
<tr class="muted-row">
<td>ID & Insurance Fee</td>
<td class="align-right">₱450</td>
</tr>
<tr class="muted-row">
<td>Team Organization Fee</td>
<td class="align-right">₱250</td>
</tr>
</tbody>
<tfoot>
<tr class="total-row">
<td>Total Assessment (Rookie Tier)</td>
<td class="align-right">₱20,892</td>
</tr>
</tfoot>
</table>
</div>

<p class="fine-print">
* Rates shown are sample figures for demonstration purposes.
Replace with your academy's actual schedule of fees.
</p>
</section>

<!-- CTA -->
<section class="cta">
<button type="button" class="primary-btn">Start Your Application</button>
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

/* Header */
.hero {
background: linear-gradient(135deg, #1e3a8a 0%, #f4c430 100%);
color: #ffffff;
padding: 50px 0;
}

.admission {
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
color: #ffffff;
margin: 0;
line-height: 1.6;
}

/* Main content */
.main {
padding: 40px 24px;
display: flex;
flex-direction: column;
gap: 32px;
}

.card {
background-color: #ffffff;
border: 1px solid #eee0b8;
border-radius: 12px;
padding: 24px;
box-shadow: 0 4px 12px rgba(43,27,94,.06);
}

.card h2 {
font-size: 20px;
margin: 0 0 16px;
color: #1e3a8a;
}

.muted {
font-size: 14px;
color: #777;
margin: 0 0 24px;
}

/* Requirements */
.requirements-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
font-size: 14px;
}

.requirements-grid ul {
margin: 0;
padding-left: 20px;
color: #2b1b5e;
line-height: 1.8;
}

/* Calculator form */
.form-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
margin-bottom: 24px;
}

.field {
display: block;
font-size: 14px;
}

.field > span {
display: block;
font-weight: 600;
color: #2B1B5E;
margin-bottom: 6px;
}

select {
width: 100%;
padding: 8px 12px;
border: 1px solid #2b1b5e;
border-radius: 6px;
background-color: #ffffff;
font-size: 14px;
color: #444;
}

input[type="range"] {
width: 100%;
margin-top: 12px;
accent-color: #CBA100;
}

.range-labels {
display: flex;
justify-content: space-between;
font-size: 12px;
color: #999;
margin-top: 4px;
}

.payment-terms {
margin-bottom: 24px;
}

.button-group {
display: flex;
gap: 8px;
}

.pill {
padding: 6px 14px;
border-radius: 6px;
font-size: 14px;
border: 1px solid #d9c98a;
background-color: #ffffff;
color: #2B1B5E;
cursor: pointer;
}

.pill.active {
background-color: #2B1B5E;
border-color: #2B1B5E;
color: #ffffff;
}

/* Table */
.table-wrap {
border: 1px solid #cba100;
border-radius: 8px;
overflow: hidden;
}

table {
width: 100%;
border-collapse: collapse;
font-size: 14px;
}

thead {
background-color: #2B1B5E;
color: #CBA100;
text-transform: uppercase;
font-size: 12px;
}

th,
td {
padding: 10px 16px;
text-align: left;
}

.align-right {
text-align: right;
}

.align-left {
text-align: left;
}

tbody tr {
border-top: 1px solid #f5f0dc;
}

.muted-row {
color: #888;
}

.total-row {
background-color: #fdf8e8;
border-top: 1px solid #eee0b8;
font-weight: 700;
color: #2B1B5E;
}

.fine-print {
font-size: 12px;
color: #999;
margin: 16px 0 0;
}

/* CTA */
.cta {
text-align: center;
padding: 24px 0;
}

.primary-btn {
background-color: #2b1b5e;
color: #ffffff;
border: none;
padding: 12px 28px;
border-radius: 8px;
font-size: 15px;
font-weight: 700;
cursor: pointer;
}

.primary-btn:hover {
background-color: #2b1b5e;
}

/* Responsive */
@media (max-width: 640px) {
.form-grid {
grid-template-columns: 1fr;
}
.requirements-grid {
grid-template-columns: 1fr;
}
}
</style>