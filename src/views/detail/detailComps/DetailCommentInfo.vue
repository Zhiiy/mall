<template>
  <div class="detail-com-info">
    <div class="comment-title">
      <span class="title-name">用户评价</span>
      <span class="title-more">更多</span>
    </div>
    <div class="comment-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="">
      <span> {{commentInfo.user.uname}} </span>
    </div>
    <div class="comment-info" v-if='Object.keys(commentInfo).length'>
      <div class="comment-text"> {{commentInfo.content}} </div>
      <div class="comment-date"> {{commentInfo.created | showDate}} {{commentInfo.style}} </div>
    </div>
    <div class="comment-img" v-for="item in commentInfo.images">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/common/utils'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {}
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
.detail-com-info {
  padding: 5px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 12px;
  color: #333;
}

.comment-title {
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
}

.comment-title .title-more {
  position: absolute;
  right: 15px;
}

.comment-title .title-more::after {
  position: absolute;
  top: -2px;
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background: url('~@/assets/img/detail/right_arrow.svg');
  background-size: 20px 20px;
}

.comment-user {
    display: flex;
    padding: 10px 0;
    line-height: 30px;
}

.comment-user img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
}

.comment-info .comment-date {
    padding: 5px 0;
    color: #999;
}

.comment-img {
  display: inline-block;
}

.comment-img img {
    height: 65px;
    margin-right: 5px;
}
</style>