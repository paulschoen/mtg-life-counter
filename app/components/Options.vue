<template>
  <ScrollView @swipe="onSwipe" orientation="verticle">
    <WrapLayout :backgroundColor="player.backgroundColor">
      <Button v-for="color in colors" v-bind:key="color.hex" @tap="changePlayerColor(color.hex)" class="color animate bounceIn" width="30%" height="30%" :backgroundColor=color.hex></Button>
    </WrapLayout>
  </ScrollView>
</template>

<script>
export default {
  name: 'Options',
  props: {
    player: Object,
    activeView: Object
  },
  data(){
    return {
      colors: [
        {hex: '#ef5350'},
        {hex: '#D81B60'},
        {hex: '#AB47BC'},
        {hex: '#7E57C2'},
        {hex: '#5C6BC0'},
        {hex: '#42A5F5'},
        {hex: '#29B6F6'},
        {hex: '#26C6DA'},
        {hex: '#26A69A'},
        {hex: '#66BB6A'},
        {hex: '#9CCC65'},
        {hex: '#D4E157'},
        {hex: '#FFEE58'},
        {hex: '#FFCA28'},
        {hex: '#FFA726'},
        {hex: '#FF7043'},
        {hex: '#8D6E63'},
        {hex: '#BDBDBD'},
        {hex: '#78909C'},
        {hex: '#212121'},
      ]
    }
  },
  computed: {
    delay(index) {
      return `animation-delay: ${10 + (10 * index)}ms;`
    }
  },
  methods: {
    changePlayerColor(hex){
      this.player.backgroundColor = hex;
      this.activeView.options = false
      this.activeView.life = true
    },
    onSwipe(args) {
      if (args.direction === 1) {
        this.activeView.options = true
        this.activeView.life = false
      } else if (args.direction === 2) {
        this.activeView.options = false
        this.activeView.life = true
      }
    }
  }
}
</script>

<style>
  .color {
    margin: 10;
    z-index: 10;
  }
</style>