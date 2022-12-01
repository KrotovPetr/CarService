<template>
  <my-header></my-header>
  <menu-page></menu-page>
<!--  <login-page></login-page>-->
<!--  <h1>{{likes}}</h1>-->
<!--  <button @click="addLikes()">Add likes!</button>-->

<!--  <br/>-->
<!--  <hr/>-->
<!--  <p>Создание нового поста</p>-->
<!--  <input placeholder="author" ref="authorInput"/>-->
<!--  <input placeholder="description" ref="descriptionInput"/>-->
<!--  <button @click="addNewPost()">Создать пост</button>-->
<!--  <div v-for="post in posts" v-bind:key="post.id">-->
<!--    <div>-->
<!--    <h3>{{post.author}}</h3>-->
<!--    <p>{{post.description}}</p>-->
<!--    <button @click="deleteCurrentPost(post.id)">Удалить пост</button>-->
<!--    </div>-->
<!--    <br/>-->
<!--  </div>-->
</template>

<script>
import MyHeader from "./Components/Header/PersHeader";
// import LoginPage from "./Pages/LoginPage/LoginPage";
import MenuPage from "@/Pages/MenuPage/MenuPage";
export default {
  name: "App",
  components: {MenuPage, MyHeader},
  data() {
    return {
      likes: 0,
      posts: [
        {id: 1, author: "Peter", description: "Car washing"},
        {id: 2, author: "Peter2", description: "Car washing2"},
        {id: 3, author: "Peter3", description: "Car washing3"}
      ]
    }
  },
  methods: {
    addLikes() {
      return this.likes++;
    },
    addNewPost(){
      let newPost =  {id: Date.now(),author: this.$refs.authorInput.value ,description:this.$refs.descriptionInput.value};
      this.posts.push(newPost);
    },
    deleteCurrentPost(id){this.posts = this.posts.filter((elem)=>elem.id!==id);

    }
  }

}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>