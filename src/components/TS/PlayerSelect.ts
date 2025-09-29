import Vue from 'vue';
import axios from 'axios';
import { Component } from 'vue-property-decorator';
import ChealseaModal from '../Modal/ChealseaModal.vue';

interface Team {
  id: string;
  displayName: string;
  logo: string;
}

@Component({
  components: {
    ChealseaModal,
  },
})
export default class Player extends Vue {
  teams: Team[] = [];
  selectedTeam: any = null;
  error: string | null = null;
  loading = false;

  // Modal 관련
  isShow = false;
  ChelseaModalCheck = false;

  // 전체 팀 목록 가져오기
  async mounted() {
    try {
      this.loading = true;
      const url = 'http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams';
      const res = await axios.get(url);
      console.log(res.data);

      this.teams = res.data.sports[0].leagues[0].teams.map((t: any) => ({
        id: t.team.id,
        displayName: t.team.displayName,
        logo: t.team.logos[0].href,
      }));
    } catch (err) {
      this.error = '팀 목록을 불러오는 중 오류가 발생했습니다.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  // 특정 팀 상세 정보 가져오기
  async OpenModal(teamId: string) {
    try {
      this.loading = true;
      const url = `http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams/${teamId}`;
      const res = await axios.get(url);
      this.selectedTeam = {
        id: res.data.team.id,
        displayName: res.data.team.displayName,
      }; // 모달에 전달할 데이터
      console.log(this.selectedTeam);
    } catch (err) {
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
