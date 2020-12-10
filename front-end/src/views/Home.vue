<template>
<div class="home">
  <all-recipes :recipes="recipes" />
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>

<script>
import AllRecipes from '@/components/AllRecipes.vue';
export default {
  name: 'Home',
  components: {
    AllRecipes,
  },
  data() {
    return {
      photos: [],
      error: '',
    }
  },
  computed:
  {
    recipes() {
      return this.$root.$data.recipes;
    }
  }
}
</script>