<template>
     <div class="container">
        <post v-for="post of posts" :data = "post" v-bind:key="post.id"></post>
        <slider :photos = "photos"> </slider>
      </div>
 
</template>

<script>
import Post from "@/components/Post"
import Slider from "@/components/Slider"

import fakedata from "./../fakedata.json"

export default {
  name: "app",
  components: {
    Post,
    Slider
  },
  data() {
    return {
      posts: fakedata.posts,
      photos: [
         "img/posts/js-carousel/00.jpg",
         "img/posts/js-carousel/01.jpg",
         "img/posts/js-carousel/02.jpg"
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
