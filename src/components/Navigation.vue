```vue
<template>
  <header class="navbar">
    <div class="logo">
      <img src="@/assets/Velorant.app.logo2.svg" alt="logo" />

      <div>
        <h2>Velorant Academy</h2>
        <p>WHERE STRATEGY MEETS SKILL</p>
      </div>
    </div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admissions">Admissions</router-link>
      <router-link to="/academics">Academics</router-link>
      <router-link to="/campus">Campus Life</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/contact">Contact</router-link>

      <button>Player Login</button>
    </nav>
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #fff;
  margin-left: 180px;
  margin-right: 180px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 17px;
}

.logo img {
  width: 70px;
}

.logo h2 {
  color: #432080;
  font-size: 30px;
  margin-bottom: 1px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.logo p {
  color: #9b7b17;
  letter-spacing: 3px;
  font-size: 12px;
  font-weight: 1000;
}

nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

nav a {
  text-decoration: none;
  color: #34136d;
  font-weight: 700;
  cursor: pointer;
}

nav a.router-link-active {
  color: #432080;
  border-bottom: 3px solid #C8A100;
  padding-bottom: 5px;
}

button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2B1B5E;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #432080;
}

@media (max-width: 900px) {
  .navbar {
    margin-left: 0;
    margin-right: 0;
    padding: 20px 30px;
  }

  .logo h2 {
    font-size: 22px;
  }

  nav {
    gap: 15px;
  }
}

@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>