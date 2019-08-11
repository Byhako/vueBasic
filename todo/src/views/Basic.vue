<template lang="pug">
  div

    h1 {{title}}

    input(type='text' v-model="newFruit" v-on:keyup.enter='addFruit')
    button(@click='addFruit') Agregar

    ul
      li(v-for='fruit of fruits') {{fruit.amount}} - {{fruit.name}}
        span(v-if='fruit.amount === 0') - sin stock

</template>


<script>
// @ is an alias to /src
// import Login from '@/components/Login/Login.vue';

export default {
  name: 'basic',
  // components: {
  //   Login,
  // },
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
      this.fruits.push({ name: this.newFruit, amount:0 });
      this.newFruit = '';
    },
  },
};
</script>
