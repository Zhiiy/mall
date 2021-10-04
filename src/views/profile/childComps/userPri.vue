<template>
  <div class="user-pri">
    <div class="user-mes">
      <div><img src="@/assets/img/profile/message.svg" alt=""></div>
      <span>我的消息</span>
    </div>
    <div class="user-point-shop">
      <div><img src="@/assets/img/profile/pointer.svg" alt=""></div>
      <span>积分商城</span>
    </div>
    <div class="user-member">
      <div><img src="@/assets/img/profile/vip.svg" alt=""></div>
      <span style="border-bottom: 0px">会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userPri'
}
</script>

<style>
.user-pri {
  padding: 8px;
  border-bottom: 20px solid #f2f5f8;
}

.user-pri span {
    flex:1;
    border-bottom: 1px solid #e7e7e7;
}

.user-mes,
.user-point-shop,
.user-member {
  display: flex;
  line-height: 45px;
}

.user-pri div img {
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>