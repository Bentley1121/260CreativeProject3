<template>
<div class="add-recipe">
  <div class="flex-center-child">
    <form class="pure-form form-container" @submit.prevent="addRecipe">
      <h1 class="page-header">Add a new recipe</h1>
      <fieldset>
        <input v-model="title" placeholder="Title">
      </fieldset>
      <fieldset>
        <div class="imageInput" @click="chooseImage">
          <img v-if="url" :src="url" />
          <div v-if="!url" class="placeholder">
            Choose an Image
          </div>
          <input class="fileInput" ref="fileInput" type="file" @input="fileChanged">
        </div>
        <p v-if="error" class="error">{{error}}</p>
      </fieldset>
      <fieldset>
        <textarea v-model="ingredients" placeholder="Ingredients"></textarea>
      </fieldset>
      <fieldset>
        <textarea v-model="instructions" placeholder="Instructions"></textarea>
      </fieldset>
      <fieldset>
        <input v-model="submittedBy" placeholder="Name (Optional)">
      </fieldset>
      <div class="flex-center-child">
        <fieldset class="buttons">
          <button type="submit" class="pure-button pure-button-primary right">Add Recipe</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'add-recipe',
  data() {
    return {
      title: "",
      url: '',
      file: null,
      ingredients: "",
      instructons: "",
      submittedBy: ""
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },
    addRecipe() {
      let newRecipe = {
        id: this.$root.$data.nextId,
        photoPath: this.url,
        title: this.title,
        userName: (this.submittedBy == "") ? "Anonymous" : this.submittedBy,
        ingredients: this.ingredients.replace(/(?:\r\n|\r|\n)/g, '<br>'),
        instructions: this.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>'),
      }
      this.$root.$data.nextId++;
      this.$root.$data.recipes.push(newRecipe);
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
}

.flex-center-child {
  display: flex;
  justify-content: center;
}

.add-recipe {
  padding-top: 60px;
}

.page-header {
  color: rgb(0, 0, 0);
  font-size: 24px;
}

form {
  font-size: 11pt;
}

input {
  width: 450px;
}

textarea {
  width: 450px;
  height: 100px;
}

.placeholder {
  background: #F0F0F0;
  width: 450px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.placeholder:hover {
  background: #E0E0E0;
}

.fileInput {
  display: none;
  width: 300px;
}

img {
  width: 200px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>