<template>
  <div id="profile">
    <nav-bar class="home-nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <user-info></user-info>
    <user-pri></user-pri>
    <user-shop></user-shop>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import userInfo from './childComps/userInfo'
import userPri from './childComps/userPri'
import userShop from './childComps/userShop'

export default {
  name: 'profile',
  components: {
    NavBar,
    userInfo,
    userPri,
    userShop
  }
}
</script>

<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-weight: 600;
}
</style>