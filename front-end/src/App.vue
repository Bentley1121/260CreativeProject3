<template>
  <div id="app">
    <header id="header">
      <h1>Recipe Mash</h1>
      <nav>
        <router-link to="/"><i class="fas fa-home">Home</i></router-link>
        <router-link to="/dashboard"><i class="fas fa-file-upload"></i>Upload Recipe</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #000;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}
</style>
