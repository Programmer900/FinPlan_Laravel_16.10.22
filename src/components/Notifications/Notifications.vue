<template>
  <div class="notification">
    <transition-group name="v-transition-animate" class="messages_list" tag="div">
      <div
      class="notification__content"
      v-for="message in messages"
      :key="message.id"
      :class="message.type"
    >
      <div class="content__text">
        <div class="icon" :class="message.icon ? message.icon : 'icon-play_square'"></div>
        {{ message.name }}
      </div>
      <div v-if="false" class="content__buttons">
        <button>Ok</button>
        <button>Close</button>
      </div>
    </div>
    </transition-group>
  </div>
</template>

<script>
  import { mapActions } from "vuex"

  export default {
    name: "Notifications",
    props: {
      messages: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      ...mapActions({
        clearNotification: 'notifications/clear',
      }),
    },
  }
</script>

<style scoped lang="sass">
.notification
  position: fixed
  top: 80px
  right: 16px
  z-index: 90
  .messages_list
    //display: flex
    //flex-direction: column-reverse
  &__content
    padding: 25px
    border-radius: 5px
    color: #fff
    display: flex
    justify-content: space-between
    align-items: center
    height: 40px
    margin-bottom: 5px
    color: #fff
    .icon
      margin-right: 5px
    &.great
      background: rgba(255,176,0,0.9)
      background: -moz-linear-gradient(90deg, rgba(255,176,0,0.9) 0%, rgba(255,232,21,0.9) 50%, rgba(255,176,0,0.9) 100%)
      background: -webkit-linear-gradient(90deg, rgba(255,176,0,0.9) 0%, rgba(255,232,21,0.9) 50%, rgba(255,176,0,0.9) 100%)
      background: linear-gradient(90deg, rgba(255,176,0,0.9) 0%, rgba(255,232,21,0.9) 50%, rgba(255,176,0,0.9) 100%)
    &.warning
      background-color: #FF0000
    &.success
      background-color: #00a44c

  .v-transition-animate-enter
    transform: translateX(120px)
    opacity: 0
  .v-transition-animate-enter-active
    transition: all .6s ease
  .v-transition-animate-enter-to
    opacity: 1
  .v-transition-animate-leave
    height: 50px
    opacity: 1
  .v-transition-animate-leave-active
    transition: transform .6s ease, opacity .6s, height .6s .2s
  .v-transition-animate-leave-to
    //height: 0
    transform: translateX(120px)
    opacity: 0
  .v-transition-animate-move
    transition: transform .6s ease

</style>
