<template>
  <div v-if="goods != []">
    <div class="info" v-if="goods != []">
      <p class="info1">配送信息</p>
      <div class="info2">
        <button>{{ goods.info.description }}</button>
        <span
          >由商家配送提供配送，约{{ goods.info.deliveryTime }}分钟送达，距离{{
            goods.info.distance
          }}</span
        >
      </div>
      <span class="info3">配送费￥{{ goods.info.deliveryPrice }}</span>
    </div>
    <div class="active">
      <p class="active1">活动与服务</p>
      <ul v-if="goods != []">
        <li v-for="item in goods.info.supports" :key="item.content">
          <button>{{ item.name }}</button>
          <span>{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <div class="real" v-if="goods != []">
      <p>商家实景</p>
      <div>
        <img v-for="item in goods.info.pics" :key="item" :src="item" alt="" />
      </div>
    </div>
    <div class="shop">
      <p class="shop1">商家信息</p>
      <div class="shop2">
        <p>品类</p>
        <span>{{ goods.info.category }}</span>
      </div>
      <div class="shop2">
        <p>商家电话</p>
        <span>{{ goods.info.phone }}</span>
      </div>
      <div class="shop2">
        <p>地址</p>
        <span>{{ goods.info.address }}</span>
      </div>
      <div class="shop2">
        <p>营业时间</p>
        <span>{{ goods.info.workTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    goods() {
      return this.$store.state.shop_info;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
html{
  background-color: #1a1c1f;

}
body {
  background-color: #1a1c1f;
}
.info {
  width: 100%;
  height: 1.25rem;
  border-bottom: 0.01rem solid #dbdee1;
  padding-left: 0.14rem;
  padding-right: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.15rem;
  .info1 {
    color: #474747;
    font-size: 0.16rem;
    margin-bottom: 0.15rem;
  }
  .info2 {
    margin-bottom: 0.12rem;
    button {
      line-height: 0.2rem;
      width: 0.56rem;
      height: 0.2rem;
      font-size: 0.11rem;
      background-color: #0097ff;
      color: #fff;
      margin-right: 0.15rem;
      border-radius: 0.03rem;
    }
    span {
      font-size: 0.12rem;
      color: #ababab;
    }
  }
  .info3 {
    color: #ababab;
  }
}
.active {
  border-top: 0.01rem solid #dbdee1;
  border-bottom: 0.01rem solid #dbdee1;
  padding-left: 0.15rem;
  width: 100%;
  height: 3.02rem;
  margin-bottom: 0.15rem;
  .active1 {
    font-size: 0.16rem;
    color: black;
    line-height: 0.47rem;
  }
  ul {
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
.real {
  border-top: 0.01rem solid #dbdee1;
  border-bottom: 0.01rem solid #dbdee1;
  padding-left: 0.15rem;
  margin-bottom: 0.15rem;
  p {
    line-height: 0.49rem;
    font-size: 0.16rem;
    color: black;
  }
  div {
    display: flex;
    margin-bottom: 0.15rem;
    img {
      margin-right: 0.05rem;
      width: 1.2rem;
      height: 0.9rem;
    }
  }
}
.shop {
  width: 100%;
  padding-left: 0.15rem;
  padding-right: 0.05rem;
  border-bottom: 0.01rem solid #eeeeee;
  border-top: 0.01rem solid #eeeeee;

  .shop1 {
    margin-top: 0.15rem;
    margin-right: 0.15rem;
    font-size: 0.16rem;
    color: black;
  }
  .shop2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0.48rem;
    border-bottom: 0.01rem solid #eeeeee;
    p {
      font-weight: bold;
      color: #333333;
    }
    span {
      margin-right: 0.12rem;
      color: #9a9a9a;
    }
  }
}
</style>
