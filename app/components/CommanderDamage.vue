<template>
  <GridLayout rows="auto, *" columns="auto, *">
    <Button row="0" col="0"  width="100%" height="33%" class="cmd-add" @tap="onPressButtonAdd" text="+"/>
    <Label row="1" col="0" width="100%" height="33%" class="cmd-text animate wobble">{{cmdDmg}}</Label>
    <Image row="2" col="0" width="100%" height="10%" stretch="aspectFit" class="cmd-logo" src="~/images/cmd.png" />
    <Button row="3" col="0"  width="100%" height="33%" class="cmd-subtract" @tap="onPressButtonSubtract" text="-"/>    
  </GridLayout>
</template>

<script>
export default {
  name: 'Commander Damage',
  props: {
    cmdDmg: Number
  },
  methods: {
    onPressButtonAdd: function() {
      this.cmdDmg++
    },
    onPressButtonSubtract: function() {
      let newLife = this.cmdDmg--
    },
  }
}
</script>

<style>

</style>