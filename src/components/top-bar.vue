<template>
  <header>
    <img src="../assets/image/back.png" alt="" v-if="flag" @click="back">
    <h2>{{msg}}</h2>
    <slot name="search"></slot>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
      return{
          flag:true,
      }
    },
    props:['msg'],
    created(){

    },
    mounted(){

    },
    methods:{
      back(){
          this.$router.go(-1)
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit css to this component only -->
<style scoped lang="scss">
header{
  height: 1rem;
  border-bottom: 1px solid #233DAE;
  padding:  0 0.3rem 0 ;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #50D293;
  width: 100%;
  img{
    width: 0.21rem;
    height: 0.35rem;
  }
  h2{
    flex: 1;
    text-align: center;
    font-size:0.36rem;
    font-weight:400;
    color:#FFF;
   
  }
}
</style>
