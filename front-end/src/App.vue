<template>
  <div id="app">
    <header id="header">
      <nav>
        <router-link to="/">
          <h1>Recipe Mash</h1>
        </router-link>
        <router-link to="/add-recipe">
          <div class="upload-button">
            <i class="upload-icon fas fa-file-upload">
            </i>
            <h1>Add</h1>
          </div>
        </router-link>
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

h1 {
  color: rgb(0, 0, 0);
  font-size: 18px;
  float: left;
}

h2 {
  font-size: 12px;
}

#header .fas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
  color: #000;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}

.upload-button {
  float: right;
  display: flex;
}

.upload-icon {
  width: 25px !important;
}
</style>
