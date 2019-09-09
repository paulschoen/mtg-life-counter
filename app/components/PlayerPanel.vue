<template>
  <GridLayout rows="auto, 1" columns="auto, 1">
    <Life class="player-panel" width="100%" height="100%" :activeView="activeView" :player='player' v-if="activeView.life"/>
    <Options class="player-panel" width="100%" height="100%"  :activeView="activeView" :player='player' v-if="activeView.options"/>
  </GridLayout>
</template>

<script>
import Life from './Life'
import Options from './Options'

export default {
  name: 'Player Panel',
  props: {
    player: Object
  },
  components: {
    Life,
    Options
  },
  data() {
    return {
      activeView: {
        life: true,
        options: false,
        commander: false,
        counters: false
      }
    }
  }
}
</script>

<style>
  .player-panel {
    border-width: 3;
    border-color: black;
    border-radius: 20;
  }
</style>