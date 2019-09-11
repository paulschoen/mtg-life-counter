<template>
  <FlexboxLayout>
    <CommanderDamage :cmdDmg='player.cmdDmg[index]' v-for="(enemy, index) in enemyPlayers" v-bind:key="enemy" :backgroundColor="enemy.backgroundColor"/>
  </FlexboxLayout>
</template>

<script>
import CommanderDamage from './CommanderDamage'

export default {
  name: 'Commander Panel',
  components: {
    CommanderDamage
  },
  props: {
    player: Object,
    players: Array
  },
  computed: {
    enemyPlayers: function() {
      let enemyArr = [];
      let players = this.players
      let currentPlayerKey = this.player.id

      if (players && players.length) {
        players.forEach(player => {
          if (player.id !== currentPlayerKey) {
            enemyArr.push(player);          
          }
        });
      }

      if (!this.player.cmdDmg.length) {
        enemyArr.forEach(enemy => {
          this.player.cmdDmg.push(0);
        })
      }

      return enemyArr
    }
  },
}
</script>

<style>

</style>