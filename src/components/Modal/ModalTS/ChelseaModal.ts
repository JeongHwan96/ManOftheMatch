import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ChealseaModal extends Vue {
  modalCheck = false;
  modalClose() {
    this.$emit('SendModalStatus', this.modalCheck);
    console.log('sendStatus', this.modalCheck);
  }
  @Prop({ default: () => [] }) selectedTeam!: any;
}
