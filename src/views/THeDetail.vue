<template>
  <div>
    <p>{{ article.id }}</p>
    <p>{{ article.userId }}</p>
    <p>{{ article.title }}</p>
    <p>{{ article.body }}</p>
    <br />
    <el-button @click="goBack">Back</el-button>
    <el-button @click="editArticle">수정</el-button>
  </div>
</template>

<script>
import apiBoard from '@/api/board'

export default {
    data(){
        return{
            article:"",
        }
    },
    mounted(){
      apiBoard.getArticle(this.$route.params.id)
      .then((response)=>{
        this.article = response.data;
      })
      .catch((e)=>{
        alert(e);
      })
        // this.article = this.$route.params.id;
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      editArticle(){
        this.$router.path({ path:`/board/write/${this.$route.params.id}`})
      }
    }
}
</script>
