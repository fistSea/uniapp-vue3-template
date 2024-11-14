<template>
  <view class="zz">
    213123111231
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
// #ifdef MP-WEIXIN
import { useShare } from '@/hooks';
// #endif

// #ifdef MP-WEIXIN
// 分享使用示例
const { onShareAppMessage, onShareTimeline } = useShare({
  title: '首页',
  path: 'pages/tab/home/index',
  imageUrl: '',
});
onShareAppMessage();
onShareTimeline();
// #endif

const title = ref<string>();
title.value = import.meta.env.VITE_APP_TITLE;

const store = useUserStore();
console.log('store.user_name', store.user_name);

const showAgreePrivacy = ref(false);
// 同意隐私协议
function handleAgree() {
  console.log('同意隐私政策');
}
</script>
<style scoped lang="scss">
.zz{
  width: 750rpx;
  height: 200rpx;
  background: red;
}
</style>
