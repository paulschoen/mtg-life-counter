<template>
  <GridLayout @swipe="onSwipe" rows="auto, *" columns="auto, *" class="life-wrapper" :backgroundColor="player.backgroundColor">
    <Button col="0" rowSpan="2" width="25%" class="subtract animate wobble" @tap="onPressButtonSubtract" text="-"/>    
    <Label col="1" row="0" width="50%" class="life-text animate wobble">{{player.life}}</Label>
    <Label @longpress="nameModal" col="1" row="1" width="50%" class="name-text animate wobble">{{player.name}}</Label>
    <Button col="2" rowSpan="2" width="25%"  class="add animate wobble" @tap="onPressButtonAdd" text="+"/>
  </GridLayout>
</template>

<script>
export default {
  name: 'Life',
  props: {
    player: Object,
    activeView: Object
  },
  methods: {
    onPressButtonAdd: function() {
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
      })
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
  .life-wrapper {
    color: black;
    width: 50%;
    height: 50%;
    justify-content: center;
    align-items: center;
    borderRadius:10;
  }
  .life-text {
    horizontal-align: left;
    vertical-align: center;
    font-size: 200;
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .name-text {
    horizontal-align: left;
    vertical-align: center;
    font-size: 24;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 200
  }

  .subtract {
      horizontal-align: left;
      vertical-align: center;
    }

  .add {
    horizontal-align: right;
    vertical-align: center;
  }

  Button {
    border-color: transparent;
    border-width: 1;
    z-index: 0;
    font-size: 50;
  }
</style>