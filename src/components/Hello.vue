<template lang="pug">
  div
    h1.title Hi, I'm ViPro.
    article.main-article
      p This is my first github.io page.
      p.code echo
        = ' '
        span.highlight-text >>
        = ' '
        | 'Hello World!
        span.cursor '
    div.pages
      mu-raised-button(@click="open(githubUrl)")
        img.github(:src="githubImg")
        | &nbsp;GitHub
      mu-raised-button(@click="open(codepenUrl)")
        img.codepen(:src="codepenImg")
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      codepenUrl: 'https://codepen.io/VdustR',
      codepenImg: require('@/assets/img/codepen.svg'),
      githubUrl: 'https://github.com/VdustR',
      githubImg: require('@/assets/img/github.svg')
    }
  },

  methods: {
    open (url) {
      open(url, '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>
$primaryColor: red

.terminal-font
  font-family: 'VT323', monospace

@keyframes blink
  0%
    background-color: rgba(255, 255, 255, 0)
  50%
    background-color: rgba(255, 255, 255, 255)
  100%
    background-color: rgba(255, 255, 255, 0)

.title
  @extend .terminal-font
  transform: translateX(0px) translateY(2rem) rotateZ(-30deg)
  display: inline-block
  color: $primaryColor

.highlight-text
  color: $primaryColor

.main-article
  padding-left: 10rem

.pages img
  height: 1em

.github
  filter: invert(100%)

.cursor
  animation-name: blink
  animation-duration: 0.5s
  animation-iteration-count: infinite
  animation-timing-function: ease
  display: inline-block

.code
  @extend .terminal-font
  font-size: 2rem
</style>
