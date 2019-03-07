<template>
    <div id="login">
        <p>控福试验·测试系统</p>
        <div class="con">
            <input type="text" placeholder="手机号/账号" v-model="form.username">
            <input type="password" placeholder="密码" v-model="form.password">
            <div>忘记密码？</div>
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "login",
        data(){
            return{
                popupVisible:false,
                form:{
                    username:'',
                    password:''
                }
            }
        },
        created(){

        },
        methods:{
            login(){


                if(!this.form.username || !this.form.password){
                    this.toast({
                        message: '请先输入用户名密码 !',
                        position: 'bottom',
                        duration: 2000
                    });
                    return
                }
                this.axios.post(this.api.login,this.form).then(res=>{
                   if(res.data){
                       this.toast({
                           message: '登录成功',
                           iconClass: 'icon iconfont icon-chenggongbiaoqing1',
                           duration: 1500
                       });
                       localStorage.setItem('token1',res.data.token)
                      setTimeout(()=>{
                          this.$router.push('/')
                      })
                   }
                }).catch(err=>{
                    this.toast({
                        message: err.data,
                        iconClass: 'icon iconfont icon-shibaibiaoqing',
                        duration: 1500
                    });
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    input::-webkit-input-placeholder{color:#fff !important;font-size: 0.3rem;}
    #login{
        padding-top: 2rem;
        box-sizing: border-box;
        /*background-image: url("../assets/image/bg.png");
        background-size:cover;*/
        p{
            font-size:0.46rem;
            text-align: center;
            color:rgba(2,246,255,1);
            background:linear-gradient(0deg,rgba(0,137,221,1) 0%, rgba(0,228,255,1) 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
        }
        .con{
            width: 6rem;
            padding-top: 2rem;
            margin: 0 auto;
            input{
                padding-left: 0.4rem;
                box-sizing: border-box;
                width:100%;
                height:0.9rem;
                background:rgba(255,255,255,0.4);
                color:#fff;
                font-family:SimHei;
                border-radius:45px;
                margin-bottom: 0.4rem;
                font-size: 0.3rem;
            }
            input:last-of-type{
                margin-bottom: 0.2rem;
            }
            div{
                text-align: right;
                padding-right: 0.2rem;
                box-sizing: border-box;
                font-size:0.24rem;
                font-family:SimHei;
                color: #fff;
                font-weight: 200;
                padding-bottom: 3rem;
            }
            button{
                width:100%;
                height:0.9rem;
               background:linear-gradient(98deg,rgba(19,185,104,1) 0%,rgba(169,227,254,1) 100%);
                border-radius:45px;
                font-size:0.36rem;
                font-family:SimHei;
                font-weight: 200 !important;
                border: none;
                color: #fff;
            }

        }
    }
</style>