<template>
  <div class="box">
    <div class="nav_left">
      <ul>
        <li v-for="item in goods" :key="item.name">
          <img :src="item.icon" alt="" v-if="item.icon" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="nav_right">
      <ul v-for="item in goods" :key="item.name">
        <p class="cheap">{{ item.name }}</p>
        <li v-for="ite in item.foods" :key="ite.name">
          <img :src="ite.icon" alt="" />
          <div class="cheap_right">
            <p>{{ ite.name }}</p>
            <span class="mb">{{ ite.description }}</span>
            <div class="mb">
              <span>月售{{ ite.sellCount }}份</span>
              <span>好评率{{ ite.rating }}%</span>
            </div>
            <div class="price">
              <span>￥{{ ite.price }}</span>
              <div class="com">
                <i
                  class="fa fa-minus-circle"
                  aria-hidden="true"
                  @click="min(ite)"
                ></i>
                <span>{{ ite.sum }}</span>
                <i
                  class="fa fa-plus-square"
                  aria-hidden="true"
                  @click="add(ite)"
                ></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="shop_m">
      <div class="shop_a">
        <div class="shop_b">
          <p>购物车</p>
          <span>清空</span>
        </div>
        <ul class="foods">
          <li v-for="it in price_list" :key="it.icon + Math.random()">
            <p>{{ it.name }}</p>
            <div class="com">
              <p>￥{{ it.price }}</p>
              <i
                class="fa fa-minus-circle"
                aria-hidden="true"
                @click="min(it)"
              ></i>
              <span>{{ it.sum }}</span>
              <i
                class="fa fa-plus-square"
                aria-hidden="true"
                @click="add(it)"
              ></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="end">
        <div class="circle"></div>
        <div class="end_l">
          <div class="end_l1">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
          <div class="end_l2">
            <span>￥{{ sum }}</span>
            <p>另需配送费￥{{ info.deliveryPrice }}元</p>
          </div>
        </div>
        <button>￥{{ info.minPrice }}元起送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      price_list: [],
      sum: 0,
    };
  },
  methods: {
    add(ite) {
      ite.sum++;
    },
    min(ite) {
      if (ite.sum > 0) {
        ite.sum--;
      } else {
        ite.sum = 0;
      }
    },
  },
  computed: {
    goods() {
      return this.$store.state.shop_info.goods;
    },
    info() {
      return this.$store.state.shop_info.info;
    },
  },
  watch: {
    goods: {
      handler(newName) {
        this.price_list = [];

        newName.forEach((item) => {
          this.price_list.push(
            ...item.foods.filter((it) => {
              return it.sum > 0;
            })
          );
        });
        this.sum = this.price_list.reduce((prev, cur) => {
          return cur.price * cur.sum + prev;
        }, 0);
      },
      deep: true,
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
}
.nav_left {
  flex: none;
  overflow: auto;
  width: 0.8rem;
  ul {
    background-color: #f3f5f7;
    display: flex;
    flex-direction: column;
    width: 0.8rem;
    li {
      height: 0.55rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.01rem solid #e7eaeb;
      &:nth-child(1) {
        background-color: #fff;
      }

      img {
        margin-right: 0.05rem;
        width: 0.12rem;
        height: 0.12rem;
      }
      span {
        font-size: 0.11rem;
        color: #9c9e9f;
      }
    }
  }
}
.nav_right {
  overflow: auto;
  .cheap {
    // padding-left: 0.13rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.25rem;
    background-color: #f3f5f7;
    border-left: 0.02rem solid #d9dde1;
    color: #93999f;
  }
  ul {
    //   height: 4.45rem;
    overflow: auto;
    li {
      padding: 0 0.15rem;

      // margin-left: 0.85rem;
      display: flex;
      align-items: center;
      height: 1.15rem;
      border-bottom: 0.01rem solid #f3f5f7;
      font-size: 0.12rem;
      img {
        margin-right: 0.1rem;
        width: 0.58rem;
        height: 0.58rem;
      }
      .cheap_right {
        flex: 1;
        p {
          line-height: 1em;
          margin-bottom: 0.08rem;
          color: #07111b;
        }
        span {
          line-height: 1em;
          color: #93999f;
        }
        .price {
          display: flex;
          justify-content: space-between;
          span {
            color: red;
          }
          .fa {
            font-size: 0.2rem;
            color: #02a774;
          }
        }
        .mb {
          line-height: 1em;
          margin-bottom: 0.05rem;
          span {
            margin-right: 0.15rem;
          }
        }
      }
    }
  }
}

.end {
  height: 0.48rem;
  background-color: #141d27;
  display: flex;
  justify-content: space-between;
  .circle {
    width: 0.45rem;
    height: 0.45rem;
    background-color: #141d27;
    position: absolute;
    border-radius: 50%;
    bottom: 0.18rem;
    left: 0.18rem;
  }
  .end_l {
    margin-left: 0.18rem;
    display: flex;
    .end_l1 {
      z-index: 99;
      margin-right: 0.08rem;
      width: 0.45rem;
      height: 0.45rem;
      background-color: #2b343c;
      border-radius: 50%;
      margin-top: -0.07rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .fa-shopping-cart {
        font-size: 0.25rem;
      }
    }
    .end_l2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        margin-left: 0.08rem;
        color: #fff;
        font-size: 0.12rem;
      }
      p {
        color: #72777d;
      }
    }
  }
  button {
    color: #fff;
    width: 1.05rem;
    background-color: #2b333b;
  }
}
.com {
  display: flex;
  align-items: center;
  span {
    color: #000 !important;
    font-size: 0.14rem;
    margin: 0 0.1rem;
  }
}

.shop_m {
  position: fixed;
  bottom: 0;
  width: 100%;
  // padding-bottom: ;
  .shop_a {
    width: 100%;
    // height: 500px;
    background-color: #fff;
  }
}
</style>
