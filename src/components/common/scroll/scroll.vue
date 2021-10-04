<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveImage from '@better-scroll/observe-image'
import Pullup from '@better-scroll/pull-up'

BScroll.use(ObserveImage)
BScroll.use(Pullup)

export default {
  name: 'Scroll',
  props: {
    observeImage: {
      type: Boolean,
      default: true
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeImage: this.observeImage,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          this.scroll.finishPullUp()
        })
      }
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    },
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    setTimeout(() => {
      this.initScroll()
    }, 100)
  }
}
</script>

<style>
.wrapper {
  overflow: hidden;
}
</style>