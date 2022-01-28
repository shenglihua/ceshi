<template>
    <div class="box">
   <ul >
       <li v-for="item in img_list" :key="item.id">
           <img :src='`https://fuss10.elemecdn.com${item.image_url}`' alt="">
           <span>{{item.title}}</span>
       </li>
   </ul>
    </div>
</template>

<script>
export default {
    props: {
       img_list:{
           type:Array,
       }
    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 2.15rem;
    border-bottom: 0.01rem solid #f1f1f1;
    margin-bottom: 0.1rem;
    ul{
        display: flex; 
         flex-wrap: wrap ;
        li{
            width: 25%;
            height:1.05rem;
            display: flex;
          
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                margin-bottom: 0.15rem;
                width: 0.48rem;
                height: 0.38rem;
            }
            span{
                font-size: 0.12rem;
                color: #666666;
            }
        }
    }
}
</style>
