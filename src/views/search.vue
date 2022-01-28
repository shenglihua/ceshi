<template>
    <div>
<head_  :title="title"></head_>
<div class="search">
<el-input
  placeholder="请输入商家名称"
  v-model="value"
  class="lookfor"
  clearable>
</el-input>
<button @click="submit">提交</button>
</div>

<div class="shop" v-for="item in shop" :key="item.id">
  <img :src="`http://cangdu.org:8001/img/${item.image_path}`" alt="">
  <div class="shop_r">
      <span>{{item.name}}</span>
      <span>月售{{item.recent_order_num}}单</span>
      <span>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}</span>
  </div>
</div>
    </div>
</template>

<script>
import head_ from '../components/header.vue'
import http from '../http'
export default {
    props: {

    },
    data() {
        return {
          title:'搜索',
          value:'',
          shop:'',
        };
    },
    methods: {
          submit(){
            http({
               url:`/search_shops?keyword=${this.value}&geohash=40.10038,116.36867`
            }).then(res=>{
              this.shop=res.data
             
            })
           

       
           
          }
    },
    components: {
      head_,
    },
};
</script>

<style scoped lang="scss">
  .search{
    display: flex;
    justify-content: space-between;
    padding: 0.08rem;
    margin-top: 0.12rem;
    margin-bottom: 0.1rem;
    button{
      border-radius: 0.01rem;
      width: 0.65rem;
      height: 0.35rem;
      background-color: #02a774;
      font-size: 0.16rem;
      color: #fff;
    }
  }
  .shop{
   
    height: 0.7rem;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #f4f4f4;
    img{
      margin: 0 0.15rem;
      width: 0.5rem;
      height: 0.5rem;
    }
    .shop_r{
        display: flex;
        flex-direction: column;
        span{
          font-weight: bold;
          line-height: 1em;
          color: #010101;
          font-size: 0.12rem;
          margin-bottom: 0.07rem;
        }
    }
  }
</style>
