import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Mom_Header from './components/Mom_Header.vue';

@Component({
  components: { Mom_Header },
})
export default class App extends Vue {}
