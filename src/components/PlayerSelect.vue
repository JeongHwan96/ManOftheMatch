<template>
  <!-- 로딩 & 에러 표시 -->
  <div v-if="loading">팀 목록 불러오는 중...</div>
  <div v-else-if="error">{{ error }}</div>

  <!-- 팀 로고 나열 -->
  <div v-else class="teams">
    <div v-for="team in teams" :key="team.id" class="team">
      <img class="LogoImg" :src="team.logo" :alt="team.displayName" />
      <p class="TeamName">{{ team.displayName }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./TS/PlayerSelect.ts"></script>

<style>
@import '../assets/css/PlayerSelect.css';
</style>
