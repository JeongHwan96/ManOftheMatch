import Vue from 'vue';
import axios from 'axios';
import { Component } from 'vue-property-decorator';
interface Team {
  id: string;
  displayName: string;
  logo: string;
}
@Component
export default class Player extends Vue {
  teams: Team[] = [];
  selectedTeam: any = null;
  error: string | null = null;
  loading = false;
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

  // methods: {
  //   goToDetail(team: any) {
  //     this.$router.push('/team-detail/$(routeName)');
  //   },
  // },
}
