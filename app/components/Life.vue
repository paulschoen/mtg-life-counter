<template>
  <GridLayout rows="auto, *" columns="auto, *" class="life-wrapper" :backgroundColor="player.backgroundColor">
    <Button col="0" rowSpan="2" width="25%" height="100%" class="subtract" @tap="onPressButtonSubtract" text="-"/>    
    <Label col="1" row="0" width="50%" class="life-text animate wobble">{{player.life}}</Label>
    <Label @longpress="nameModal" col="1" row="1" width="50%" class="name-text animate wobble">{{player.name}}</Label>
    <Button col="2" rowSpan="2" width="25%" height="100%"  class="add" @tap="onPressButtonAdd" text="+"/>
  </GridLayout>
</template>

<script>
import StatusBar from "nativescript-status-bar";

export default {
  name: 'Life',
  props: {
    player: Object,
    activeView: Object
  },
  data(){
    return {
      runAdd: false,
      runSub: false
    }
  },
  methods: {
    onPressButtonAdd: function(e) {
      let newLife = this.player.life++
      // console.log(this.life)
    },
    onPressButtonSubtract: function() {
      let newLife = this.player.life--
    },
    nameModal() {
      prompt('Enter Your Name', this.player.name)
      .then(result => {
        this.player.name = result.text
        StatusBar.hide();
      })
    }
  }
}
</script>

<style>

</style>