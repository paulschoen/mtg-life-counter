<template>
  <Pager height="100%" class="player-panel" v-bind:class="{ turnedLeft: turnLeft,  'turnedRight': turnRight}" :selectedIndex='player.index'>

    <PagerItem class="border-radius">
      <Options :colors='colors' width="100%" height="100%" :player='player'/>
    </PagerItem>

    <PagerItem >
      <Life  width="100%" height="100%" :player='player'/>
    </PagerItem>

    <PagerItem>
      <CommanderCounters width="100%" height="100%" :players='players' :player='player'/>
    </PagerItem>

  </Pager>
</template>
<script>
import Life from './Life'
import CommanderCounters from './CommanderCounters'
import Options from './Options'

export default {
  name: 'Player Panel',
  props: {
    player: Object,
    players: Array,
    colors: Array,
    turnLeft: Boolean,
    turnRight: Boolean
  },
  components: {
    Life,
    CommanderCounters,
    Options
  }
}
</script>

<style>

</style>