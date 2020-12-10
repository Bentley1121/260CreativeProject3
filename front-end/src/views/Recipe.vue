<template>
  <div class="recipeContainer flex-center-child">
    <div class="recipe">
        <img :src="recipe.photoPath" />
        <div class="recipeInfo">
            <p class="recipeTitle">{{recipe.title}}</p>
            <p class="recipeUserName">By <em>{{recipe.userName}}</em></p>
            <h4>Ingredients</h4>
            <p class="recipeIngredients" v-html="recipe.ingredients"></p>
            <h4>Preparation</h4>
            <p class="recipeInstructions" v-html="recipe.instructions"></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe',
  data() {
    return {
      recipe: null
    }
  },
  created() {
    let recipeId = this.$route.params.id;
    this.recipe = this.$root.$data.recipes.find(function(element) {
      return element.id == recipeId;
    })
  }
}
</script>

<style scoped>
.recipe {
  width: 400px;
}

.flex-center-child {
  display: flex;
  justify-content: center;
}

.recipe img {
  width: 400px;
}

.recipeTitle {
  font-weight: bold;
}

.recipeIngredients {
  margin: 0;
}

.recipeInstructions {
  margin: 0 0 40px 0;
}

h4 {
  margin-bottom: 5px;
}

.recipeContainer {
  padding-top: 60px;
}
</style>