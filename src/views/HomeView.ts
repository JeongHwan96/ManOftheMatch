import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Mom_Header from '../components/Mom_Header.vue';
import PlayerSelect from '../components/PlayerSelect.vue';

@Component({
  components: { Mom_Header, PlayerSelect },
})
export default class App extends Vue {
  @Prop({ default: () => [] }) teams!: any[];
}
