<template>
    <div class="login">
       <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
          <div class="box">
             <p class="title">蜂鸟外卖</p> 
             <div class="box">
                 <div class="choose">
                     <router-link to="/login/msg" tag="button">短信登录</router-link>
                     <router-link to="/login/login_m" tag="button">密码登录</router-link>
                 </div>
                  <router-view></router-view>
             </div>
           
          </div>

    
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
       back(){
           this.$router.push('/index')
       }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
  .login{
      overflow: hidden;
      position:relative;
      width: 100%;
      .fa{
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
          font-size: 0.2rem;
      }
      .box{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.63rem;
          .title{
              line-height: 1em;
              font-size: 0.4rem;
              font-weight: bolder;
              color: #02a774;
          }
          .choose{
              width: 1.6rem;
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.08rem;
              button{
                background-color: transparent;
                padding-bottom: 0.07rem;
                color: #333333;
              }
              .router-link-active{
                  color: #02a774;
                  border-bottom: 0.02rem solid #02a774;
              }
          }
      }
  }

  
</style>
