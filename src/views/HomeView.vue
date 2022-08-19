<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-table @row-click="rowClicked" :data="articles" style="width:100%">
        <el-table-column prop="id" label="id" witdh="20px"></el-table-column>
        <el-table-column prop="userId" label="userId" witdh="20px"></el-table-column>
        <el-table-column prop="title" label="title"></el-table-column>
        <el-table-column prop="body" label="body"></el-table-column>
      </el-table>
    </el-col>
  </el-row>

  <a href="/board/write" class="write_btn">
    <img src="C:\Users\atlas\Desktop\BoardList\vue-board\src\img\back.png" />
  </a>
</template>

<script>
// @ is an alias to /src
import apiBoard from '@/api/board'

export default {
  data(){
    return{
      title:"hi!",
      articles:null,
    }
  },
  mounted(){

    apiBoard.getArticles(0)
      .then((response) => {
        console.log("getArticles", response);
        this.articles = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods :{
    rowClicked(row){
      this.$router.push({
        path:`/board/detail/${row.id}`
      });
    }
  }
}
</script>

<style>
.write_btn{
  position:fixed;
  bottom:40px;
  right:40px;
  width:48px;
  height: 48px;
  border-radius: 50px;
  box-shadow: 0px 10px 20px rgba(red, green, blue, alpha);
  z-index: 10;
  display:inline-block;
}
.write_btn img{
  position: relative;
  top:50%;
  left:25%;
  transform: translate(-50%,-55%);
}
</style>
