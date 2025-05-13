import Vue from 'vue';
import { defineComponent } from 'vue';
interface Team {
  name: string;
  route: string;
  routeName: string;
  className: string;
}

export default defineComponent({
  name: 'SelectTeam',
  data() {
    return {
      teams: [
        {
          name: 'Chelsea',
          route: '/chelsea',
          routeName: 'chelsea',
          className: 'team-chelsea',
          identifier: 1,
        },
        {
          name: 'Arsenal',
          route: '/arsenal',
          routeName: 'arsenal',
          className: 'team-arsenal',
          identifier: 2,
        },
        {
          name: 'Bournemouth',
          route: '/bournemouth',
          routeName: 'bornemouth',
          className: 'team-bournemouth',
          identifier: 3,
        },
        {
          name: 'Aston Villa',
          route: '/astonVilla',
          routeName: 'astonvilla',
          className: 'team-astonVilla',
          identifier: 4,
        },
        {
          name: 'Brentford',
          route: '/brentford',
          routeName: 'brentford',
          className: 'team-brentford',
          identifier: 5,
        },
        {
          name: 'Brighton',
          route: '/brighton',
          routeName: 'brighton',
          className: 'team-brighton',
          identifier: 6,
        },
        {
          name: 'Crystal Palace',
          route: '/crystalPalace',
          routeName: 'crystalpalace',
          className: 'team-crystal_palace',
          identifier: 7,
        },
        {
          name: 'Everton',
          route: '/everton',
          routeName: 'everton',
          className: 'team-everton',
          identifier: 8,
        },
        {
          name: 'Fulham',
          route: '/fulham',
          routeName: 'fulham',
          className: 'team-fulham',
          identifier: 9,
        },
        {
          name: 'Ipswich Town',
          route: '/ipswichTown',
          routeName: 'ipswichtown',
          className: 'team-ipswichTown',
          identifier: 10,
        },
        {
          name: 'Leicester City',
          route: '/leicesterCity',
          routeName: 'leicestercity',
          className: 'team-leicesterCity',
          identifier: 11,
        },
        { name: 'Liverpool', route: '/liverpool', className: 'team-liverpool', identifier: 12 },
        {
          name: 'Manchester City',
          route: '/manchesterCity',
          routeName: 'manchestercity',
          className: 'team-manCity',
          identifier: 13,
        },
        {
          name: 'Manchester United',
          route: '/manchesterUnited',
          routeName: 'manchesterunited',
          className: 'team-manUnited',
          identifier: 14,
        },
        {
          name: 'Newcastle',
          route: '/newcastleUnited',
          routeName: 'newcastleunited',
          className: 'team-newcastle',
          identifier: 15,
        },
        {
          name: 'Nottingham',
          route: '/nottinghamForest',
          routeName: 'nottinghamforest',
          className: 'team-nottingham',
          identifier: 16,
        },
        {
          name: 'Southampton',
          route: '/southampton',
          routeName: 'southampton',
          className: 'team-southampton',
          identifier: 17,
        },
        {
          name: 'Tottenham',
          route: '/tottenhamHotspur',
          routeName: 'tottenhamhotspur',
          className: 'team-tottenham',
          identifier: 18,
        },
        {
          name: 'West Ham',
          route: '/westHamUnited',
          routeName: 'westhamunited',
          className: 'team-westham',
          identifier: 19,
        },
        {
          name: 'Wolves',
          route: '/wolverhampton',
          routeName: 'wolverhanton',
          className: 'team-wolves',
          identifier: 20,
        },
      ],
    };
  },
  methods: {
    goToDetail(team: any) {
      this.$router.push('/team-detail/$(routeName)');
    },
  },
});
