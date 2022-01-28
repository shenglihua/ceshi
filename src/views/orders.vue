<template>
    <div >
<head_  :title="title"></head_>
<div class="run" v-if="this.$store.state.login==1">
  <img src="../assets/img/订单列表.png" alt="">
  <button @click="login">立即登录</button>
</div>
    </div>
</template>

<script>
import head_ from '../components/header.vue'
export default {
    props: {

    },
    data() {
        return {
          title:'订单列表'

        };
    },
    methods: {
     login(){
         this.$router.push('/login')
     }
    },
    components: {
head_,
    },
};
</script>

<style scoped lang="scss">
body{
    position: relative;
}
.run{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50% ,-50%, 0);

    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 1.85rem;
    }
    button{
        border-radius: 0.05rem;
        margin-top: 0.1rem;
        width: 0.95rem;
        height: 0.4rem;
        background-color: #02a774;
        color: #fff;
        font-size: 0.14rem;
    }
}
</style>
