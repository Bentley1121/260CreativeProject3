<template>
    <div class="image">
        <img :src="photo.path" />
        <div class="photoInfo">
            <p class="photoTitle">{{photo.title}}</p>
            <p class="photoName">{{photoUserFirstName}} {{photoUserLastName}}</p>
        </div>
        <p class="photoDate">{{formatDate(photo.Created)}}</p>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'photo',
  data() {
    return {
      photo: null,
      photoUserFirstName: "default",
      photoUserLastName: "default",
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/photos/' + this.$route.params.id);
      console.log(response.data);
      this.photo = response.data[0];
      this.photoUserFirstName = response.data[1];
      this.photoUserLastName = response.data[2];
    } catch (error) {
      this.photo = null;
    }
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
  }
}
</script>