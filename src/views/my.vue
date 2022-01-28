<template>
  <div>
    <head_ :title="title"></head_>
    <nav>
      <div class="nav_l">
        <i class="fa fa-users" aria-hidden="true"></i>
        <div class="nav_lr" v-if="this.$store.state.login == 1">
          <p class="login" @click="login">登录/注册</p>
          <p class="center">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <div class="nav_lr" v-if="this.$store.state.login == 0">
          <p class="center">
            <i class="fa fa-mobile" aria-hidden="true"></i> <span>尊敬的{{phone}}你好</span>
          </p>
        </div>
      </div>
      <span class="arrowhead">></span>
    </nav>
    <div class="money">
      <ul>
        <li>
          <p><span class="balance">0.00</span>元</p>
          <span>我的余额</span>
        </li>
        <li>
          <p><span class="preferential">0</span>个</p>
          <span>我的优惠</span>
        </li>
        <li>
          <p><span class="integral">0</span> 分</p>
          <span>我的积分</span>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list1" :key="item.title">
          <span v-html="item.img" class="font_img"></span>
          <div class="list_r">
            <p>{{ item.title }}</p>
            <span>></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list2" :key="item.title">
          <span v-html="item.img" class="font_img"></span>
          <div class="list_r">
            <p>{{ item.title }}</p>
            <span>></span>
          </div>
        </li>
      </ul>
    </div>
    <button class="quit" @click="quit" v-if="this.$store.state.login == 0">退出登录</button>
    <div class="exit" v-if="this.exit">
      <div class="tips">
           <div class="title">
              <p>提示</p>
              <span>确认退出吗</span>
           </div>
           <div class="choose">
             <button @click="cancel">取消</button>
             <button @click="confirm">确定</button>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
import head_ from "../components/header.vue";
import http  from '../http/index'
export default {
  props: {},
  data() {
    return {
      exit:false,
      title: "我的",
      list1: [
        {
          img: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
          title: "我的订单",
        },
        {
          img: '<i class="fa fa-money" aria-hidden="true"></i>',
          title: "积分商城",
        },
        {
          img: '<i class="fa fa-vimeo-square" aria-hidden="true"></i>',
          title: "蜂鸟外卖会员卡",
        },
      ],
      list2: [
        {
          img: '<i class="fa fa-building" aria-hidden="true"></i>',
          title: "服务中心",
        },
      ],
    };
  },
  methods: {
    quit(){
      this.exit=true
    },
    login(){
      this.$router.push('/login')
    },
    cancel(){
         this.exit=false
    },
    confirm(){
       http({
        url:'/logout'
      }).then(res=>{
        if(res){
            this.$store.state.login=1;
            this.$router.push('/login')
             this.exit=false
        }
      
      })
      
    }
  },
  components: {
    head_,
  },
   computed:{
    phone(){
      return this.$store.state.phone;
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  border-top: 0.01rem solid #fff;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #02a774;
  .nav_l {
    display: flex;
    // align-items: center;
    .fa-users {
      display: flex;
      color: #fff;
      margin-left: 0.1rem;
      margin-right: 0.15rem;
      font-size: 0.6rem;
    }
    .nav_lr {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      //  margin-top: 0.1rem;
      color: #fff;
      .center {
        display: flex;
        align-items: center;
      }
      .login {
        // margin-top: 0.1rem;

        font-size: 0.18rem;
        margin-bottom: 0.12rem;
      }
      .fa-mobile {
        margin-right: 0.05rem;
        font-size: 0.2rem;
      }
      span {
        font-size: 0.11rem;
      }
    }
  }
  .arrowhead {
    font-size: 0.12rem;
    color: #fff;
    margin-right: 0.15rem;
  }
}
.money {
  height: 0.8rem;
  margin-bottom: 0.1rem;
  ul {
    display: flex;
    height: 0.8rem;
    border-bottom: 0.01rem solid #eaeaea;
    li {
      font-size: 0.15rem;
      width: 33.33%;
      height: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666666;
      &:nth-last-child(n + 2) {
        border-right: 0.01rem solid #eaeaea;
      }
      p {
        // margin-top: 0.15rem;
        margin-bottom: 0.1rem;
        span {
          font-size: 0.24rem;
        }
        .balance {
          color: #ff9900;
        }
        .preferential {
          color: #ff5f3e;
        }
        .integral {
          color: #6ac20b;
        }
      }
    }
  }
}
.list {
  margin-bottom: 0.1rem;
  border-top: 0.01rem solid #eaeaea;
  ul {
    li {
      height: 0.55rem;
      display: flex;
      .font_img {
        font-size: 0.2rem;
        width: 0.35rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 0.05rem;
        align-items: center;
      }
      .list_r {
        width: 3.4rem;
        border-bottom: 0.01rem solid #eaeaea;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.12rem;
          margin-right: 0.1rem;
          color: #c7c7c7;
        }
        p{
          font-size: 0.15rem;
          color: #929292;
        }
      }
    }
  }
}
.quit{
  width: 100%;
  height: 0.41rem;
  background-color: #ef4f4f;
  font-size: 0.17rem;
  color: #fff;
  border-radius: 0.03rem;
}

.exit{
  z-index: 999;
 position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .tips{
    display: flex;
    flex-direction: column;
     width: 3.2rem;
  // height: 1.35rem;
    .title{
   height: 0.92rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  background-color: #fff;
  p{
    font-size: 0.17rem;
    color: black;
    margin-bottom: 0.2rem;
  }
  span{
    font-size: 0.17rem;
    color: #b5b5b5;
  }
}
    .choose{
    
      button{ 
        background-color: #fff;
        width: 50%;
        height: 0.4rem;
        &:nth-child(2){
          color: #26a2ff;
        }
      }

    }
  }
}

</style>
