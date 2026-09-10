<script setup>
</script>

<template>
    <section class="admissions-preview">
        <div class="section-intro">
            <p class="community">JOIN THE ROSTER</p>
            <h2>Admissions</h2><span></span>
        </div>

        <div class="admission-grid">
            <article>
                <div class="icon"></div>
                <h3>Enrollment Process</h3>
                <p>Submit an online application, complete the skill assessment, and attend a coach interview.</p>
                <RouterLink to="/admissions">Learn more →</RouterLink>
            </article>

            <article>
                <div class="icon gold"></div>
                <h3>Requirements</h3>
                <p>Prepare your rank verification, valid ID, and signed code of conduct agreement.</p>
                <RouterLink to="/admissions">View checklist →</RouterLink>
            </article>

            <article>
                <div class="icon"></div>
                <h3>Programs Offered</h3>
                <p>Explore training tracks for rookie, amateur, semi-pro, and pro-tier players.</p>
                <RouterLink to="/admissions">View programs →</RouterLink>
            </article>
        </div>
    </section>
</template>

<style scoped>
.admissions-preview {
    background: #f9f9fb;
    padding: 80px clamp(24px, 8vw, 120px) 60px;
}

.section-intro {
    text-align: center;
}

.community {
    color: #c69214;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
}

.section-intro h2 {
    color: #1b0b3b;
    font-size: 34px;
    margin: 10px 0 14px;
}

.section-intro span {
    background: #c69214;
    display: inline-block;
    height: 2px;
    width: 45px;
}

.admission-grid {
    display: grid;
    gap: 150px;
    grid-template-columns: repeat(3, 1fr);
    margin: 35px auto 0;
    max-width: 2000px;
    max-height: 2500px;
}

.admission-grid article {
    background: #fff;
    border: 1px solid #e2dbe9;
    border-radius: 9px;
    padding: 28px 25px;
}

.icon {
    align-items: center;
    background: #f3eff9;
    border-radius: 50%;
    color: #1b0b3b;
    display: flex;
    font-size: 21px;
    height: 42px;
    justify-content: center;
    width: 42px;
}

.icon.gold {
    background: #fbf6e8;
    color: #c69214;
}

.admission-grid h3 {
    color: #1b0b3b;
    font-size: 19px;
    margin: 20px 0 12px;
}

.admission-grid p {
    color: #524765;
    font-size: 13px;
    line-height: 1.7;
    min-height: 65px;
}

.admission-grid a {
    color: #1b0b3b;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
}

.admission-grid a:hover {
    color: #c69214;
}

</style>