<template>
  <div class="players">
    <div
      class="player"
      v-for="team in teams"
      :key="team.identifier"
      @click="goToDetail(team.routeName)"
    >
      <router-link :to="{ name: 'TeamDetail', params: { team } }">
        <div class="image" :class="team.className"></div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./TS/PlayerSelect.ts"></script>

<style>
@import '../assets/css/PlayerSelect.css';
</style>
