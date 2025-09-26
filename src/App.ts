import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HomeView from '../src/views/HomeView.vue';

@Component({
  components: { HomeView },
})
export default class App extends Vue {}
