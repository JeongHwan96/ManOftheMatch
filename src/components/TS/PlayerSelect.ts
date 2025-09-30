import Vue from 'vue';
import axios from 'axios';
import { Component, Prop } from 'vue-property-decorator';
import ChelseaModal from '../Modal/ChelseaModal.vue';

@Component({
  components: {
    ChelseaModal,
  },
})
export default class Player extends Vue {
  @Prop({ default: () => [] }) teams!: any[];
  // Modal 관련
  isShow = false;
  ChelseaModalCheck = false;
  loading = false;
  selectedTeam: any = null;
  error: string | null = null;
  // 전체 팀 목록 가져오기

  // 특정 팀 상세 정보 가져오기
  async OpenModal(teamId: string) {
    try {
      this.loading = true;
      const url = `http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/${teamId}`;
      const res = await axios.get(url);
      this.selectedTeam = {
        id: res.data.team.id,
        displayName: res.data.team.displayName,
        logo: res.data.team.logos[0].href,
      };
      console.log(this.selectedTeam.id);
      // 모달에 전달할 데이터
    } catch (err) {
      this.error = '팀 목록을 불러오는 중 오류가 발생했습니다.';
      console.error('팀 상세 API 호출 실패:', err);
    } finally {
      this.loading = false;
    }
  }

  // 모달 닫기 콜백
  getModaldata(ChealseaModal: boolean) {
    console.log('Get ModalStatus', this.ChelseaModalCheck);
    this.ChelseaModalCheck = ChealseaModal;
    this.isShow = false;
    this.selectedTeam = null;
  }
}
