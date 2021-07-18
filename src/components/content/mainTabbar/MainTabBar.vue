<template>
<div class="main-tab-bar">
  <TabBar>
    <TabBarItem path="/home" active-color="blue">
      <template #item-icon>
        <img src="~assets/img/tabbar/home.svg"  alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #item-text>
        <div>首页1</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/categories">
      <template #item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/shop">
      <template #item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
