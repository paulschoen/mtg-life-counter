<template>
  <Page actionBarHidden=true @loaded='loadedFunction'>
    <GridLayout class="container" rows="auto, *" columns="auto, *" v-if='loaded'>
      <PlayerPanel width="100%" height="50%" row="0" col="0" :colors='colors' :players='players' class="rotated large" :player="players[0]"></PlayerPanel>
      <PlayerPanel width="100%" height="50%" row="1" col="0" :colors='colors' :players='players' class="large" :player="players[1]"></PlayerPanel>
      <fab
        @tap="showPlayers"
        v-if='settings'
        row="0"
        col="0"
        icon="~/images/players.png"
        rippleColor="#f1f1f1"
        class="fab-button two-player"
      ></fab>
      
      <fab
        @tap="showSettings"
        row="0"
        col="0"
        icon="res://icon"
        rippleColor="#f1f1f1"
        class="fab-button settings two-player"
      ></fab>
      <fab
        v-if='settings'
        @tap="resetPlayers"
        row="0"
        col="0"
        icon="~/images/undo.png"
        rippleColor="#f1f1f1"
        class="fab-button reset two-player"
      ></fab>

      <fab
        @tap="showPlayers"
        v-if='showPlayerButtons'
        row="0"
        col="0"
        icon="~/images/1.png"
        rippleColor="#f1f1f1"
        class="fab-button one two-player"
      ></fab>

      <fab
        @tap="goToTwoPlayer"
        v-if='showPlayerButtons'
        row="0"
        col="0"
        icon="~/images/2.png"
        rippleColor="#f1f1f1"
        class="fab-button two two-player"
      ></fab>

      <fab
        @tap="goToThreePlayer"
        v-if='showPlayerButtons'
        row="0"
        col="0"
        icon="~/images/3.png"
        rippleColor="#f1f1f1"
        class="fab-button three two-player"
      ></fab>

      <fab
        @tap="goToFourPlayer"
        v-if='showPlayerButtons'
        row="0"
        col="0"
        icon="~/images/4.png"
        rippleColor="#f1f1f1"
        class="fab-button four two-player"
      ></fab>
    </GridLayout>

  </Page>
</template>

<script>
import Vue from 'nativescript-vue';
import PlayerPanel from './PlayerPanel'
import TwoPlayerLayout from './TwoPlayerLayout'
import ThreePlayerLayout from './ThreePlayerLayout'
import FourPlayerLayout from './FourPlayerLayout'
import OrientationModule from"nativescript-screen-orientation";
import StatusBar from "nativescript-status-bar";
import { android as androidApp } from 'tns-core-modules/application';
import { device } from 'tns-core-modules/platform';

export default {
  name: 'FourPlayerLayout',
  components: {
    PlayerPanel
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
      loaded: false,
      colors: colors,
      settings: false,
      showPlayerButtons: false,
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
        }
      ]
    }
  },
  methods: {
    loadedFunction(){
      OrientationModule.setCurrentOrientation("portrait",function(){
        console.log("portrait orientation set");
      });

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
      
      setTimeout(()=>{
        this.loaded = true;
      },500)
    },
    showPlayers() {
      this.showPlayerButtons = !this.showPlayerButtons
    },
    showSettings() {
      this.settings = !this.settings
      this.showPlayerButtons = false
    },
    resetPlayers() {
      this.players.forEach(player => this.resetPlayer(player))
    },
    goToTwoPlayer() {
      this.$navigateTo(TwoPlayerLayout);
    },
    goToThreePlayer() {
      this.$navigateTo(ThreePlayerLayout);
    },
    goToFourPlayer() {
      this.$navigateTo(FourPlayerLayout);
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
