<template>
  <div  class="input">
   
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
 
      <el-form-item prop="name" >
            <button class="btn" @click="code">获取验证码</button>
        <el-input v-model="ruleForm.name" placeholder="手机号" class="input_" >
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
    
        <el-input
          v-model="ruleForm.pass"
          placeholder="验证码"
          class="input_"
        ></el-input>
      </el-form-item>
    </el-form>
    <p class="font">
      温馨提示:未注册蜂鸟外卖帐号的手机号，登录 时将自动注册，且代表已同意
      <a href="">《用户服务协议》</a>
    </p>
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
      ruleForm: {
        name: "15037289823",
        pass:'',
      },
      rules: {
        name: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" },
        ],
          pass: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 6, message: "请输入正确验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //短信登录请求
    submit(){
   http({
     url:'/login_sms',
     method:'post',
     data:{
       phone:this.ruleForm.name,
       code:this.ruleForm.pass
     }
   }).then(res=>{
 
     if(res.code==0){    
       this.$store.commit('login',res.code)
        this.$router.push('/index')
        this.$store.state.phone=this.ruleForm.name
  

   
     }
   })
    },
    //获取验证码
  code(){
    http({
      url:`/sendcode?phone=${this.ruleForm.name}`,
    }).then(res=>{
      this.ruleForm.pass=res.code
    })
  }
  },
 
  components: {},
 
};
</script>

<style  scoped lang="scss">
.input{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
   position: relative;
}
.input_{ 
   width: 3rem;
  }

.btn{
  z-index: 99;
 position: absolute;
 top: 0.15rem;
 right: 0.2rem;
 font-size: 0.14rem;
 color: #cccccc;
 background-color: transparent;
}
.font{
  width: 3rem;
  font-size: 0.14rem;
  color: #999999  ;
  margin-bottom: 0.34rem;
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
