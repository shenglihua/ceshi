<template>
  <div class="input">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="手机/邮箱/用户名"
          class="input_"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          v-model="ruleForm.pass"
          placeholder="密码"
          class="input_"
          show-password
        >
          <!-- <i slot="suffix-icon" >
             <el-switch
         v-model="value"
         active-color="#13ce66"
       inactive-color="#ff4949">
         </el-switch>
         </i> -->
        </el-input>
      </el-form-item>
      <el-form-item prop="code"> 
          <button v-html="then_code" class="code" @click="code"></button>
        <el-input v-model="ruleForm.code" placeholder="密码" class="input_" >
   

        </el-input>
      </el-form-item>
    </el-form>
      <button class="login_" @click="submit">登录</button>
              <p class="about"> 关于我们</p>
  </div>
</template>

<script>
import http from "../http";
export default {
  props: {},
  data() {
    return {
      value: true,
      then_code: "",
      ruleForm: {
        name: "15037299823",
        pass: "123456",
        code: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 4, max: 12, message: "密码4-12位", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "请输入正确验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
   code(){
        http({
      url: "/captcha",
    }).then((res) => {
      this.then_code = res;
     
    });
   },
   submit(){
  http({
       url:'/login_pwd',
       method:'post',
       data:{
           name: this.ruleForm.name,
           pwd:this.ruleForm.pass,
           captcha:this.ruleForm.code,
       }
  }).then(res=>{
      if(res.code==0){
         this.$store.state.login=res.code,
            this.$store.state.phone=this.ruleForm.name
        this.$router.push('/index')
     
      }
  })
   }
  },
  components: {},
  
  created() {
    http({
      url: "/captcha",
    }).then((res) => {
      this.then_code = res;
 
    });
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.input_ {
  width: 3rem;
}
.code{
    background-color: transparent;
    position: absolute;
    right: 0;
    z-index: 999;
}
 .login_{
      background-color: #4cd96f;
      width: 3rem;
      height: 0.42rem;
      font-size: 0.15rem;
      color: #fff;
      margin-bottom: 0.2rem;
  }
  .about{

      color: #999999;
      font-size: 0.12rem;
  }
</style>
