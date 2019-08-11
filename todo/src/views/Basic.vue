<template lang="pug">
  div(class="section")

    h1(class="title is-1") {{title}}

    Row
      input(class="input" type="text" placeholder="Nueva fruta" v-model="newFruit" v-on:keyup.enter='addFruit')
      button(class="button is-info" @click='addFruit') Agregar

    ul(class="menu-list")
      Li(v-for='fruit of fruits')
        Button(class="button is-success is-small") +
        Button(class="button is-danger is-small") -
        p {{fruit.amount}} - {{fruit.name}}
        span(v-if='fruit.amount === 0') - sin stock

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
  },
};
</script>
