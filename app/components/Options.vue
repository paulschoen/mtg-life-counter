<template>
  <ScrollView orientation="verticle">
    <WrapLayout :backgroundColor="player.backgroundColor">
      <Button v-for="color in colors" v-bind:key="color.hex" @tap="changePlayerColor(color.hex)" class="color" width="20%" height="20%" :backgroundColor=color.hex></Button>
    </WrapLayout>
  </ScrollView>
</template>

<script>
export default {
  name: 'Options',
  props: {
    player: Object,
    activeView: Object,
    colors: Array
  },
  methods: {
    changePlayerColor(hex){
      this.player.backgroundColor = hex;
      if (this.player.index === '1') {
        this.player.index = 1
      } else {
        this.player.index = '1'
      }
    }
  }
}
</script>

<style>

</style>