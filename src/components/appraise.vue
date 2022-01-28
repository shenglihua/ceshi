<template>
  <div v-if="data">
    <div class="rate">
      <div class="rate_l">
        <span>{{ data.info.score }}</span>
        <p>综合评分</p>
        <div>高于周边商家99%</div>
      </div>
      <div class="rate_r">
        <div class="score">
          <el-rate
            v-model="data.info.serviceScore"
            disabled
            text-color="#ff9900"
          >
          </el-rate>
          <span
            >服务态度
            <span class="score_">{{ data.info.serviceScore }}</span></span
          >
        </div>
        <div class="score">
          <el-rate v-model="data.info.foodScore" disabled text-color="#ff9900">
          </el-rate>
          <span
            >商品评分
            <span class="score_">{{ data.info.foodScore }}</span></span
          >
        </div>

        <div class="time">
          <p>送达时间</p>
          <span>{{ data.info.deliveryTime }}分钟</span>
        </div>
      </div>
    </div>

    <div class="pinglun">
      <div class="button">
        <button :class="all ? 'choose_p' : ''" @click="al">
          全部{{ data.ratings.length }}
        </button>
        <button :class="satisfy_ ? 'choose_p' : ''" @click="sa">
          满意{{ this.satisfy.length }}
        </button>
        <button :class="dissatisfied_ ? 'choose_p' : ''" @click="dis">
          不满意{{ this.dissatisfied.length }}
        </button>
      </div>
      <div class="have" @click="text_">
        <i class="fa fa-check-square" :class="text?'text':''" aria-hidden="true"></i>
        <span>只看有内容的评价</span>
      </div>
    </div>
    <pinglun :text="this.text" :pinglun="this.data.ratings" v-if="all"></pinglun>
    <pinglun :text="this.text" :pinglun="this.satisfy" v-if="satisfy_"></pinglun>
    <pinglun :text="this.text" :pinglun="this.dissatisfied" v-if="dissatisfied_"></pinglun>
  </div>
</template>

<script>
import pinglun from "./all.vue";
export default {
  props: {},
  data() {
    return {
      text: false,
      all: true,
      satisfy_: false,
      dissatisfied_: false,
      satis: [],
    };
  },
  methods: {
    al() {
      this.all = true;
      this.satisfy_ = false;
      this.dissatisfied_ = false;
      this.all = true;
    },
    sa() {
      this.all = false;
      this.satisfy_ = false;
      this.dissatisfied_ = false;
      this.satisfy_ = true;
    },
    dis() {
      this.all = false;
      this.satisfy_ = false;
      this.dissatisfied_ = false;
      this.dissatisfied_ = true;
    },
    text_(){
        this.text=!this.text;
    }
  },
  components: {
    pinglun,
  },
  computed: {
    data() {
      return this.$store.state.shop_info;
    },
    satisfy() {
      return this.data.ratings.filter((item) => {
        return item.score >= 3;
      });
    },
    dissatisfied() {
      return this.data.ratings.filter((item) => {
        return item.score < 3;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.rate {
  width: 100%;
  height: 1.2rem;
  padding: 0.2rem 0;
  border-bottom: 0.01rem solid #e6e7e8;
  display: flex;
  margin-bottom: 0.15rem;
  .rate_l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.39rem;
    height: 0.8rem;
    border-right: 0.01rem solid #e6e7e8;
    font-size: 0.12rem;
    span {
      font-size: 0.18rem;
      color: #ffac2f;
      margin-bottom: 0.1rem;
    }
    p {
      color: #07111b;
      margin-bottom: 0.05rem;
    }
    div {
      color: #93999f;
    }
  }
  .rate_r {
    width: 2.37rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .score {
      display: flex;
      justify-content: center;
      margin-bottom: 0.1rem;
      span {
        margin-left: 0.1rem;
        color: #07111b;
      }
      .score_ {
        margin: 0;
        color: #ffc56f;
      }
    }
    .time {
      margin-left: 0.24rem;
      display: flex;
      p {
        color: #07111b;
        margin-right: 0.12rem;
      }
      span {
        color: #c2c5c9;
      }
    }
  }
}

.pinglun {
  width: 100%;
  height: 1.16rem;
  padding-left: 0.18rem;
  border-bottom: 0.01rem solid #e6e7e8;
  .button {
    margin-top: 0.18rem;
    margin-bottom: 0.3rem;
    button {
      width: 0.65rem;
      height: 0.3rem;
      margin-right: 0.13rem;
      background-color: #dbdddf;
      color: #636a71;
    }
  }
  .have {
    display: flex;
    align-items: center;
    .fa-check-square {
      color: #02a774;
      font-size: 0.22rem;
      margin-right: 0.05rem;
    }
    .text {
      color: gray;
    }
    span {
      color: #93999f;
      font-size: 0.12rem;
    }
  }
}
.choose_p {
  background-color: #02a774 !important;
  color: #fff !important;
}
</style>
