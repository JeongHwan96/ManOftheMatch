import Vue from 'vue';
import Component from 'vue-class-component';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router/types/composables';

interface TeamInfo {
  identifier: number;
  team_name_kr: string;
  team_name_en: string;
  nickname: string;
  establish: string;
  league: string;
  hometown: string;
  homestadium: string;
  rival: string;
  rival2: string;
  coach: string;
  captin: string;
  subCaptin: string;
}

export default defineComponent({
  data() {
    return {
      TeamInfo: [
        {
          identifier: 1,
          team_name_kr: '아스널 FC',
          team_name_en: 'Arsenal FC',
          nickname: '거너스 (TheGunners)',
          establish: '1886년10월',
          league: '프리미어 리그 (PremierLeague)',
          hometown: '런던 이슬링턴 구 (London-Islington)',
          homestadium: '에미레이트 스타디움 (EmiratesStadium)',
          rival: '토트넘 홋스퍼 FC - 북런던 더비 (TottenhamHotspurFC-NorthLondonDerby)',
          rival2: '첼시 FC - 런던 더비 (ChelseaFC-LondonDerby)',
          coach: '미켈 아르테타 (MikelArteta)',
          captin: ' 마르틴 외데고르 (MartinØdegaard)',
          subCaptin: '그라니트 자카 (GranitXhaka)',
        },
        {
          identifier: 2,
          team_name_kr: '첼시 FC',
          team_name_en: 'ChelseaFootballClub',
          nickname: 'TheBlues',
          establish: '1905년3월10일',
          league: '프리미어 리그 (PremierLeague)',
          hometown: '런던 버로우 오브 해머스미스 앤드 풀럼(London-Hammersmith and Fulham)',
          homestadium: '스탬포드 브릿지(Stamford Bridge)',
          rival:
            '아스널 FC,토트넘 홋스퍼 FC- 북서런던 더비 (Arsenal FC,Tottenham Hotspur FC- North West London Derby)',
          rival2:
            '브렌트포드FC, 풀럼 FC, 퀸즈 파크 레인저스FC- 서런던 더비 (Brentford FC, Fulham FC, Queens Park Rangers FC- West London Derby)',
          coach: '엔초 마레스카 (Enzo Maresca)',
          captin: '리스 제임스 (Reece James)',
          subCaptin: '엔소 페르난데스 (Enzo Fernández)',
        },
      ],
    };
  },
});
