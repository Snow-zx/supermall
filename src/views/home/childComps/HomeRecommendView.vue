<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommends:{
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  position: relative;
  display: flex;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid rgba(1,1,1,.07);
  font-size: 12px;
  text-align: center;
}

.recommend-item{
  flex:1
}

.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
