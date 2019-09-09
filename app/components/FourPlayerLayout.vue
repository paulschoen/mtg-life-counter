<template>
  <Page actionBarHidden=true>
    <GridLayout class="container" rows="auto, *" columns="auto, *">
      <PlayerPanel width="50%" height="50%" row="0" col="0" class="rotated" :player="playerOne">Hello</PlayerPanel>
      <PlayerPanel width="50%" height="50%" row="0" col="1" class="rotated" :player="playerTwo">Hello</PlayerPanel>
      <PlayerPanel width="50%" height="50%" row="1" col="0" :player="playerThree">Hello</PlayerPanel>
      <PlayerPanel width="50%" height="50%" row="1" col="1" :player="playerFour">Hello</PlayerPanel>

      <fab
        @tap="showDialog"
        row="1"
        col="1"
        icon="res://icon"
        rippleColor="#f1f1f1"
        class="fab-button"
      ></fab>
    </GridLayout>

  </Page>
</template>

<script>
import Vue from 'nativescript-vue';
import PlayerPanel from './PlayerPanel'
import { CFAlertDialog,
         DialogOptions,
         CFAlertGravity,
         CFAlertActionAlignment,
         CFAlertActionStyle,
         CFAlertStyle } from 'nativescript-cfalert-dialog';

Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

export default {
  name: 'FourPlayerLayout',
  components: {
    PlayerPanel
  },
  data() {
    return {
       DialogOptions : {
        // Options go here
        dialogStyle: CFAlertStyle.BOTTOM_SHEET,
        backgroundBlur: true,
        title: "Game Options",
        simpleList: {
          items: ['Reset Game'],
          onClick: (arg, index)=>{
            if (index === 0) {
              this.playerOne.life = 40;
              this.playerTwo.life = 40;
              this.playerThree.life = 40;
              this.playerFour.life = 40;
            }
          }
        },
      },
      cfalertDialog: null,

      playerOne: {
        id: 1,
        backgroundColor: 'skyblue',
        life: 40,
        name: 'Player One'
      },
      playerTwo: {
        id: 2,
        backgroundColor: 'skyblue',
        life: 40,
        name: 'Player Two'
      },
      playerThree: {
        id: 3,
        backgroundColor: 'skyblue',
        life: 40,
        name: 'Player Three'
      },
      playerFour: {
        id: 4,      
        backgroundColor: 'skyblue',
        life: 40,
        name: 'Player Four'
      }
    }
  },
  mounted() {
    this.cfalertDialog = new CFAlertDialog();
  },
  methods: {
    showDialog() {
      let options = this.DialogOptions
      this.cfalertDialog.show(options)
    }
  }
}
</script>

<style>
.container {
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  background: black;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
}

.rotated {
  transform: rotate(180deg);
}

.fab-button {
  height: 70;
  width: 70; 
  margin: -32;
  background-color: black;
  horizontal-align: left;
  vertical-align: top;
  z-index: 1;
}

</style>
