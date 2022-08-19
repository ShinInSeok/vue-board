import axios from "axios";

const BASE_USR ="https://jsonplaceholder.typicode.com/";

export default{
    getArticle : function(id){
        return axios.get(BASE_USR + `posts/${id}`);
    },

    getArticles:function(page){
console.log(page)
return axios.get(BASE_USR + "posts");
    },

    postArticle:function(userId,title,body){
        return axios.post( 
            BASE_USR + "posts",
        {
            userId:userId,
            title:title,
            body:body,
        }
    
    
    );
    },
       patchArticle:function(id,title,body){
        return axios.post( 
            BASE_USR + `posts/${id}`,
        {
            title:title,
            body:body,
        }
    
    
    );
    },
}