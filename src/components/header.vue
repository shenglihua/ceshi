<template>
  <div class="box">
    <slot></slot>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
      title:{
          type:String,
      }
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.box{
    width: 100%;
    height: 0.45rem;
    background-color: #02a774;
  display: flex;
   justify-content: center;
   align-items: center;
   p{
       color: #fff;
       font-size: 0.18rem;
      

   }
}
</style>
