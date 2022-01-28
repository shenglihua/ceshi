<template>
  <div>
    <ul>
      <li
        v-for="item in pinglun"
        :key="item.username + Math.random()"
        class="box"
        v-show="text?true:item.text?true:false"
      >
        <img :src="item.avatar" alt="" />
        <div class="info">
          <div class="info1">
            <span>{{ item.username }}</span>
            <p>{{ changeTime(item.rateTime) }}</p>
          </div>
          <div class="info2">
            <el-rate
              v-model="item.score"
              disabled
              text-color="#ff9900"
              score-template="{item.score}"
            >
            </el-rate>
          </div>
          <div class="info3">
            {{ item.text }}
          </div>
          <div class="info4" v-if="item.recommend != ''">
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <button v-for="ite in item.recommend" :key="ite">{{ ite }}</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pinglun: {
      type: Array,
    },
    text:{
        type:Boolean,
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTime(time) {
      var commonTime = "";
      if (time) {
        var unixTimestamp = new Date(time * 1);
        commonTime = unixTimestamp.toLocaleString('ja');
      }
      return commonTime;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  padding-top: 0.18rem;
  padding-bottom: 0.22rem;
  display: flex;
  justify-content: center;
  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-right: 0.12rem;
  }
  .info {
    width: 3.15rem;
    .info1 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.09rem;
        color: #6b7177;
      }
      p {
        font-size: 0.1rem;
        color: #a7acb1;
      }
    }
    .info2 {
      margin-bottom: 0.1rem;
    }
    .info3 {
      line-height: 0.17rem;
      color: #07111b;
      margin-bottom: 0.1rem;
    }
    .info4 {
      .fa-thumbs-o-up {
        font-size: 0.13rem;
        color: #f5a100;
        margin-right: 0.1rem;
      }
      button {
        padding: 0 0.07rem;
        background-color: #fff;
        margin-right: 0.1rem;
        margin-bottom: 0.05rem;
        border: 0.01rem solid #e6e7e8;
        color: #93999f;
      }
    }
  }
}
</style>
