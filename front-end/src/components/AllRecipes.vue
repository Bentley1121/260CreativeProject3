<template>
<div>
  <section class="all-recipes">
    <div class="image" v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ name: 'recipe', params: { id: recipe.id }}"><img :src="recipe.photoPath" /></router-link>
      <div class="recipeInfo">
        <p class="recipeTitle">{{recipe.title}}</p>
        <p class="recipeUserName">{{recipe.userName}}</p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'AllRecipes',
  props: {
    recipes: Array
  }
}
</script>

<style scoped>
.recipeInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8em;
}

.recipeTitle {
  font-weight: bold;
}

.recipeInfo p {
  margin: 0px;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.all-recipes {
  column-gap: 1em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

.all-recipes {
  padding-top: 60px;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .all-recipes {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .all-recipes {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .all-recipes {
    column-count: 2;
  }
}
</style>