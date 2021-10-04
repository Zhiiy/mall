<template>
  <div class="user-info">
    <div class="user-file">
      <div class="user-img">
        <img src="@/assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="user-login">
        <div class="login-info">
          <span>登录</span>
          <span>/</span>
          <span>注册</span>
        </div>
        <div class="login-num">
          <img src="@/assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="user-more">
        <img src="@/assets/img/profile/arrow-right.png" alt="">
      </div>
    </div>
    <div class="user-wallet">
      <div class="user-money">
        <span><span class="point-num">0.00</span>元</span>
        <span>我的余额</span>
      </div>
      <div class="user-discount">
        <span><span class="point-num">0</span>个</span>
        <span>我的优惠</span>
      </div>
      <div class="user-point">
        <span><span class="point-num">0</span>分</span>
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo'
}
</script>

<style>
.user-info {
  border-bottom: 20px solid #f2f5f8;
}

.user-file {
  display: flex;
  height: 90px;
  align-items: center;
  background-color: var(--color-tint);
  font-weight: 600;
  color: #fff;
}

.user-img,
.user-more {
  width: 90px;
  text-align: center;
}

.user-login {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.user-login .login-info,
.user-login .login-num {
  flex: 1;
  margin: 3px 0;
}

.user-login .login-info {
  padding-left: 5px;
}

.user-img img {
  width: 60px;
}

.user-login .login-num img {
  width: 20px;
  vertical-align: middle;
}

.user-more img {
  width: 20px;
}

.user-wallet {
  display: flex;
}

.user-point,
.user-discount,
.user-money {
  display: flex;
  flex: 1;
  padding: 20px 0;
  flex-direction: column;
  text-align: center;
}

.point-num {
  color: #f96453;
  font-size: 22px;
  font-weight: 700;
}
</style>