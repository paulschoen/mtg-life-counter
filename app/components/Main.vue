<template>
  <Page actionBarHidden=true @loaded='loadedFunction'>
      <FourPlayerLayout :players='players' :colors='colors'></FourPlayerLayout>
  </Page>
</template>

<script>
import Vue from 'nativescript-vue';
import FourPlayerLayout from './FourPlayerLayout'
import StatusBar from "nativescript-status-bar";
import { android as androidApp } from 'tns-core-modules/application';
import { device } from 'tns-core-modules/platform';

export default {
  name: 'FourPlayerLayout',
  components: {
    FourPlayerLayout
  },
  data() {
    const colors = [
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
    ]
    return {
      colors: colors,
      settings: false,
      players: [
        {
          id: 0,
          backgroundColor: colors[Math.floor(Math.random()*colors.length)].hex,
          life: 40,
          name: 'Player One',
          index: 1,
          cmdDmg: []
        },
        {
          id: 1,
          backgroundColor: colors[Math.floor(Math.random()*colors.length)].hex,
          life: 40,
          name: 'Player Two',
          index: 1,
          cmdDmg: []
        },
        {
          id: 2,          
          backgroundColor: colors[Math.floor(Math.random()*colors.length)].hex,
          life: 40,
          name: 'Player Three',
          index: 1,
          cmdDmg: []
        },
        {
          id: 3,
          backgroundColor: colors[Math.floor(Math.random()*colors.length)].hex,
          life: 40,
          name: 'Player Four',
          index: 1,
          cmdDmg: []
        }
      ]
    }
  },
  methods: {
    showSettings() {
      this.settings = !this.settings;
    },
    loadedFunction(){
      if (androidApp && device.sdkVersion >= '21') {
        const View = android.view.View;
        const window = androidApp.startActivity.getWindow();
        const decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_FULLSCREEN |
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        );
      }
    },
    resetPlayers() {
      this.players.forEach(player => this.resetPlayer(player))
    },
    resetPlayer(player) {
      player.life = 40;
      player.cmdDmg = [];
      if (player.index === 1) {
        player.index = '1';
      } else {
        player.index = 1;
      }
    }
  }
}
</script>

<style>


</style>
