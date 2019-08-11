<template lang="pug">
  div(class="section")

    h1(class="title is-1") {{title}}

    Row
      input(
        class="input"
        type="text"
        placeholder="Nueva fruta"
        v-model="newFruit"
        @keyup.enter='addFruit')
      button(class="button is-info" @click='addFruit') Agregar

    ul
      Li(v-for='fruit of fruits' :key="fruit.name")
        Button(class="button is-success is-small is-rounded" @click='fruit.amount++')
          span +
        Button(
          class="button is-danger is-small is-rounded"
          @click='fruit.amount > 0 ? fruit.amount-- : 0'
          :disabled='fruit.amount === 0 ? true : false')
          span -
        p {{fruit.amount}} - {{fruit.name}}
        span(v-if='fruit.amount === 0') - sin stock

    h3(class="subtitle is-3") Total: {{totalFruits}}

</template>


<script>
import { Row, Li, Button } from './stylesBasic';


export default {
  name: 'basic',
  components: {
    Row,
    Li,
    Button,
  },
  data() {
    return {
      title: 'Mi hermoso título',
      fruits: [
        { name: 'Banana', amount: 5 },
        { name: 'Melon', amount: 0 },
        { name: 'Manzana', amount: 3 },
        { name: 'Limon', amount: 2 },
      ],
      newFruit: '',
    };
  },

  methods: {
    addFruit() {
      this.fruits.push({ name: this.newFruit, amount: 0 });
      this.newFruit = '';
    },
    restFruit(e) {
      console.log(e.target)
    }
  },

  computed: {
    totalFruits() {
      let total = 0;
      this.fruits.forEach(element => {
        total += element.amount;
      });

      return total;
    }
  }
};
</script>
