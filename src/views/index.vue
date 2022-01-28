<template>
    <div class="box">
<router-view></router-view>
  <foot_></foot_>
    </div>
</template>

<script>
import foot_ from '../components/footer.vue'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
     foot_,
      
    },
};
</script>

<style scoped lang="scss">
.box{
    padding-bottom: 0.5rem;
}
</style>
