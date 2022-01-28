<template>
  <div v-if="data">
    <div ref="topHeight">
      <header v-if="data" :style="{ background: `url(${data.info.bgImg})` }">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i>
        <img :src="data.info.avatar" alt="" />
      </header>
      <nav v-if="data">
        <div class="nav1" @click="intr_s">
          <button>品牌</button>
          <span>{{ data.info.name }}</span>
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </div>
        <div class="nav2">
          <span>{{ data.info.score }}</span>
          <span>月售{{ data.info.sellCount }}单</span>
          <span>{{ data.info.description }}</span>
          <span>约{{ data.info.deliveryTime }}分钟</span>
          <span>距离{{ data.info.distance }}</span>
        </div>
        <div class="nav3" @click="discount">
          <button>{{ data.info.supports[0].name }}</button>
          <p>{{ data.info.supports[0].content }}</p>
          <span
            >{{ data.info.supports.length }}个优惠<i
              class="fa fa-caret-down"
              aria-hidden="true"
            ></i
          ></span>
        </div>
        <div class="nav4">
          <router-link tag="button" to="/shop_detils/food">点餐</router-link>
          <router-link tag="button" to="/shop_detils/appraise"
            >评价</router-link
          >
          <router-link tag="button" to="/shop_detils/business"
            >商家</router-link
          >
        </div>
      </nav>
    </div>
    <router-view ref="bot_height" :style="{height:height_}"></router-view>

    <div class="active" v-if="data" v-show="vol">
      <i class="fa fa-times" aria-hidden="true" @click="close"></i>
      <p class="active1">优惠活动</p>
      <ul>
        <li v-for="item in data.info.supports" :key="item.content">
          <button>{{ item.name }}</button>
          <span>{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <div class="introduce" v-if="data" v-show="intr">
      <div class="introduce_">
        <div class="introduce1">
          <button>品牌</button>
          <span>{{ data.info.name }}</span>
        </div>
        <div class="introduce2">
          <ul>
            <li>
              <p>{{ data.info.score }}</p>
              <span>评分</span>
            </li>
            <li>
              <p>{{ data.info.sellCount }}单</p>
              <span>月售</span>
            </li>
            <li>
              <p>{{ data.info.description }}</p>
              <span>约{{ data.info.deliveryTime }}分钟</span>
            </li>
            <li>
              <p>{{ data.info.deliveryPrice }}元</p>
              <span>配送费用</span>
            </li>
            <li>
              <p>{{ data.info.distance }}m</p>
              <span>距离</span>
            </li>
          </ul>
        </div>
        <div class="introduce3">
          <div class="notice">
            <div class="notice1"></div>
            <span class="notice2">公告</span>
            <div class="notice3"></div>
          </div>
          <div class="intr">
            {{ data.info.bulletin }}
          </div>
        </div>
      </div>
      <i class="fa fa-times-circle" aria-hidden="true" @click="intr_h"></i>
    </div>
  </div>
</template>

<script>
import http from "../http/index";
export default {
  props: {},
  data() {
    return {
        height_:null,
      intr: false,
      data: null,
      vol: false,
    };
  },
  methods: {
    //优惠显示隐藏
    discount() {
      this.vol = true;
    },
    close() {
      this.vol = false;
    },
    intr_s() {  
      this.intr = true;
    },
    intr_h() {
      this.intr = false;
    },
    back(){
      this.$router.push('/index')
    }
  },
  components: {},
  created() {
    http({
      url: "/shop",
    }).then((res) => {
      //   console.log(res);
      this.data = res.data;
      this.$store.state.shop_info = res.data; 
      //改变点餐的高度   
         this.$nextTick(()=>{
      if (Object.keys(this.$refs).length && this.$refs.topHeight.offsetHeight) {
        this.height_= (document.documentElement.clientHeight - this.$refs.topHeight.offsetHeight) / 100 + "rem"
     
      }
   
   
    })      
      
      
    });

    
  
  },

     

   
 
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 0.5rem;
  background-size: contain;
  position: relative;
  .fa-arrow-left {
    position: absolute;
    top: 0.17rem;
    color: #fff;
    left: 0.1rem;
    font-size: 0.18rem;
  }
  img {
    position: absolute;
    left: 50%;
    top: 0.1rem;
    width: 0.65rem;
    transform: translateX(-50%);
  }
}
nav {
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.01rem solid #eee;
  .nav1 {
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
    button {
      width: 0.36rem;
      height: 0.18rem;
      background-color: #ffef05;
      color: #6a3709;
      margin-right: 0.08rem;
    }
    span {
      font-size: 0.2rem;
      font-weight: bold;
    }
  }
  .nav2 {
    font-size: 0.11rem;
    color: #333333;
    margin-bottom: 0.05rem;
    span {
      margin-right: 0.1rem;
    }
  }
  .nav3 {
    display: flex;
    width: 3.15rem;
    height: 0.24rem;
    border: 0.01rem solid #eeeeee;
    //  justify-content: center;
    align-items: center;
    button {
      margin-left: 0.07rem;
      margin-right: 0.05rem;
      font-size: 0.1rem;
      width: 0.24rem;
      //  height: 0.13rem;
      background-color: #70bc46;
      color: #fff;
    }
    p {
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 0.1rem;
    }
  }
  .nav4 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      color: #7e8c8d;
      //  width: 33.33%;
      height: 0.39rem;
      background-color: transparent;
    }
    .router-link-active {
      color: #02a774;
      border-bottom: 0.02rem solid #02a774;
    }
  }
}

.active {
  position: fixed;
  bottom: 0;
  padding-left: 0.15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2.04rem;

  background-color: #f5f5f5;
  padding-bottom: 0.2rem;
  .fa-times {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    font-size: 0.2rem;
  }
  .active1 {
    font-weight: bold;
    font-size: 0.16rem;
    color: black;
    line-height: 0.47rem;
  }
  ul {
    padding-right: 0.35rem;
    overflow: auto;
    height: 1.55rem;
    li {
      margin-bottom: 0.12rem;
      &:nth-child(1) > button {
        background-color: #70bc46;
      }
      &:nth-child(2) > button {
        background-color: #f07373;
      }
      button {
        width: 0.36rem;
        height: 0.18rem;
        background-color: #f1884f;
        margin-right: 0.12rem;
        color: #fff;
      }
      span {
        font-size: 0.12rem;
        color: #9a9a9a;
      }
    }
  }
}

.introduce {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.3);
  .fa-times-circle {
    font-size: 0.3rem;
    color: white;
  }
  .introduce_ {
    width: 3.4rem;
    height: 2.35rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.3rem;
    .introduce1 {
      display: flex;
      align-items: center;
      // justify-content: center;
      button {
        margin-left: 0.47rem;
        margin-right: 0.1rem;
        width: 0.36rem;
        height: 0.18rem;
        background-color: #fff008;
        color: #6a3709;
        font-size: 0.11rem;
      }
      span {
        font-size: 0.19rem;
        color: #000;
      }
    }
    .introduce2 {
      margin-top: 0.23rem;
      margin-bottom: 0.18rem;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          font-size: 0.12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            color: #000;
            font-weight: bold;
            margin-bottom: 0.1rem;
          }
          span {
            color: #999999;
          }
        }
      }
    }
    .introduce3 {
      .notice {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.2rem;
        .notice1 {
          width: 0.25rem;
          height: 0.01rem;
          background-image: linear-gradient(to right, #fff, #000);
        }
        .notice2 {
          margin: 0 0.05rem;
          font-size: 0.11rem;
          color: #999999;
        }

        .notice3 {
          width: 0.25rem;
          height: 0.01rem;
          background-image: linear-gradient(to right, #000, #fff);
        }
      }
      .intr {
        padding: 0 0.2rem;
        font-size: 0.12rem;
        color: #333333;
        line-height: 0.2rem;
      }
    }
  }
}
</style>
