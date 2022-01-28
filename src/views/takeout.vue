<template>
  <div>
    <head_>
      <template>
        <div class="head">
          <i class="fa fa-search" aria-hidden="true" @click="search"></i>
          <span class="title">{{ title }}</span>
          <i
            class="fa fa-user-circle"
            v-if="this.$store.state.login == 0"
            aria-hidden="true"
            @click="my"
          ></i>
          <span v-else @click="login">登录|注册</span>
        </div>
      </template>
    </head_>
    <!-- 轮播图 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <moveImg :img_list="img_before"></moveImg>
        </div>
        <div class="swiper-slide">
          <moveImg :img_list="img_after"></moveImg>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--附近商家-->
    <div class="near">
      <p class="headline">
        <i class="fa fa-list" aria-hidden="true"></i><span>附近商家</span>
      </p>
      <ul>
        <li @click="shop_" v-for="item in shop" :key="item.id">
          <img :src="item.image_path" alt="" class="shop_img" />
          <div class="shop_r">
            <div class="shop_r1">
              <div class="shop_r11">
                <button>品牌</button>
                <span>{{ item.name }}</span>
              </div>
              <div class="shop_r12">
                <button v-for="ite in item.supports" :key="ite.id">
                  {{ ite.icon_name }}
                </button>
              </div>
            </div>
            <div class="shop_r2">
              <div class="shop_r21">
                <el-rate
                  v-model="item.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  :score-template="`${item.rating}`"
                  class="star"
                >
                </el-rate>
                <span>月售{{ item.recent_order_num }}单</span>
              </div>
              <div class="shop_r22">
                <button>{{ item.delivery_mode.text }}</button>
              </div>
            </div>
            <div class="shop_r3">
              ￥{{ item.float_minimum_order_amount }}起送
              <span>/</span>
              {{ item.piecewise_agent_fee.tips }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import head_ from "../components/header.vue";
import http from "../http";
import moveImg from "../components/move_img.vue";

export default {
  props: {},
  mounted() {
    http({
      url: "/position/40.10038,116.36867",
    }).then((res) => {
      this.title = res.data.name;
    });
    //首页轮播图数据
    http({
      url: "/index_category",
    }).then((res) => {
      (this.img_before = [...res.data].splice(0, 8)),
        (this.img_after = [...res.data].splice(8, 15));
    });
    //轮播图启动
    this.mySwiper.slideTo(3, 1000, false);
    //获取首页商铺列表
    http({
      url: "/shops?latitude=40.10038&longitude=116.36867",
    }).then((res) => {
      this.shop = res.data;
    });
  },
  data() {
    return {
      title: "",
      img_before: [],
      img_after: [],
      shop: [],
      //   轮播图
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    search() {
      this.$router.push("/index/search");
    },
    my() {
      this.$router.push("/index/mine");
    },
    shop_() {
      this.$router.push("/shop_detils");
    },
  },
  components: {
    head_,
    moveImg,
  },
};
</script>

<style scoped lang="scss">
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.15rem;
  i,
  span {
    color: white;
  }
  .fa {
    font-size: 0.23rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 1.7rem;
    font-size: 0.18rem;
  }
}

.near {
  border-top: 0.01rem solid #e4e4e4;
  width: 100%;
  .headline {
    margin-top: 0.14rem;
    margin-left: 0.1rem;
    font-size: 0.12rem;
    .fa {
      color: #000;
      margin-right: 0.07rem;
    }
    span {
      color: #999999;
    }
  }
  ul {
    width: 100%;
    li {
      padding: 0 0.08rem;
      width: 100%;
      height: 1.05rem;
      border-bottom: 0.01rem solid #e4e4e4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shop_img {
        width: 0.73rem;
        height: 0.73rem;
      }
      .shop_r {
        width: 2.75rem;
        height: 0.73rem;
        .shop_r1 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.15rem;
          .shop_r11 {
            button {
              margin-right: 0.05rem;
              width: 0.28rem;
              height: 0.15rem;
              background-color: #ffd930;
              color: 333333;
              font-size: 0.11rem;
            }
            span {
              font-size: 0.16rem;
              color: #333333;
            }
          }
          .shop_r12 {
            display: flex;
            margin-left: 0.32rem;
            button {
              background-color: transparent;
              height: 0.12rem;
              border: 0.01rem solid #f1f1f1;
              font-size: 0.11rem;
              color: #b1b1b1;
            }
          }
        }
        .shop_r2 {
          margin-bottom: 0.1rem;
          height: 0.12rem;
          display: flex;
          justify-content: space-between;
          .shop_r21 {
            display: flex;
            span {
              margin-left: 0.07rem;
              font-size: 0.09rem;
              color: #666666;
            }
          }
          .shop_r22 {
            button {
              border: 0.01rem solid #4ec29e;
              border-radius: 0.01rem;
              //   width: 0.37rem;
              //   height: 0.12rem;
              background-color: #fff;
              color: #4ec29e;
              font-size: 0.09rem;
            }
          }
        }
        .shop_r3 {
          color: #666666;
          span {
            color: #d4d4d4;
          }
        }
      }
    }
  }
}
</style>
