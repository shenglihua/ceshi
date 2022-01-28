<template>
   <div class="foot">
    <router-link :to="item.path" v-for="item in navList" :key="item.picture">

       <p v-html="item.picture" class="normal"></p>
       <p  class=" title">{{ item.title }}</p>
   
    </router-link>
  </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
      navList:[
          {  
              path:'/index/takeout',
              picture:` <i class="fa fa-mobile normal" aria-hidden="true" ></i>`,
              title:'外卖'
          },
            {
              path:'/index/search',
              picture: `<i class="fa fa-search" aria-hidden="true"></i>`,
              title:'搜索'
             
          },  { path:'/index/orders',
              picture:`<i class="fa fa-file-text-o" aria-hidden="true"></i>`,
              title:'订单'
          },  {
              path:'/index/mine',
              picture:` <i class="fa fa-user" aria-hidden="true"></i>`,
              title:'我的'
          },
      ]
        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.foot {
  border-top: 0.01rem solid #cccccc;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  font-size: 10px;
  display: flex;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
 
  }
  .normal,.title{
      color: #999999;
  }
  .normal{
      font-size: 0.23rem;
  }
  .title{
      font-size: 0.13rem;
  }
  .router-link-active {
      .normal,.title{
     color: #6caf8a;
  }
        
      
  }
}
</style>
