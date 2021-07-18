<template>
  <div class="tab-bar-item"  @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
<!--  <div class="tab-bar-item" @click="itemClick">-->
<!--    <div v-if="!isActive"><slot name="item-icon"></slot></div>-->
<!--    <div v-else><slot name="item-icon-active"></slot></div>-->
<!--    <div :style="activeStyle"><slot name="item-text"></slot></div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
    type: String,
    default: 'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      // console.log(this);
      // console.log(this.$route); //当前激活的页面路由信息
      // console.log(this.$router); //整体的路由信息，可以控制跳转
      this.$router.push(this.path)
    }
  }
}
</script>

<style>


.tab-bar-item{
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
