<template>
  <div class="calculator">
    <DisplayVue :value="displayValue"/>
    <ButtonVue label="AC" triple
    @onCalcButtonClick="clearMemory"/>
    <ButtonVue label="/" operation
     @onCalcButtonClick="setOperation"/>
    <ButtonVue label="7"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="8"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="9"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="*" operation
    @onCalcButtonClick="setOperation"/>
    <ButtonVue label="4"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="5"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="6"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="-" operation
    @onCalcButtonClick="setOperation"/>
    <ButtonVue label="1"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="2"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="3"
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="+" operation
    @onCalcButtonClick="setOperation"/>
    <ButtonVue label="0" double
    @onCalcButtonClick="addDigit"/>
    <ButtonVue label="."/>
    <ButtonVue label="=" operation
    @onCalcButtonClick="setOperation"/>
  </div>
</template>

<script>
 import ButtonVue from "../components/ButtonVue"
 import DisplayVue from "../components/DisplayVue"
export default {
  data:function(){
    return{
      displayValue:"0",
      clearDisplay:false,
      operation:null,
      values:[0,0],
      current:0
    }
  },
  components:{ ButtonVue,DisplayVue },
  methods:{
    clearMemory(){
      Object.assign(this.$data,this.$options.data())
    },
    setOperation(operation){
      if(this.current === 0){
        this.operation = operation
        this.current = 1
        this.clearDisplay = true
      }else{
        const equals = operation === "="
        const currentOperation = this.operation

        try{
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}` 
          )
        } catch(e){
          this.$emit('onError',e)
        }

        this.values[1] = 0
        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0:1
        this.clearDisplay = !equals
      }
    },
    addDigit(n){
      if(n === "." && this.displayValue.includes(".")){
        return
      }
      const clearDisplay = this.displayValue === "0"
      || this.clearDisplay
      const currentValue = clearDisplay ? "": this.displayValue
      const displayValue = currentValue + n

      this.displayValue = displayValue
      this.clearDisplay = false

      this.values[this.current] = displayValue
      /*
      if(n !== "."){
        const i = this.current
        const newValue = parseFloat(displayValue)
        this.values[i] = newValue
      }*/

    }
  }
}
</script>

<style>
  .calculator{
    height: 32px;
    width: 235px;
    border-radius: 5px;
    /*overflow: hidden;*/
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
  }
</style>