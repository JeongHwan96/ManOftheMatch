<template>
  <div>
    <!-- 로딩 & 에러 표시 -->
    <div v-if="loading">팀 목록 불러오는 중...</div>
    <div v-else-if="error">{{ error }}</div>

    <!-- 팀 목록 -->
    <div v-else class="teams">
      <div
        v-for="(team, index) in teams"
        :key="team.id + '-' + index"
        class="team"
        @click="OpenModal(team.id)"
      >
        <img class="LogoImg" :src="team.logo" :alt="team.displayName" />
        <p class="TeamName">{{ team.displayName }}</p>
      </div>
    </div>

    <!-- 선택된 팀 모달 -->
    <ChelseaModal
      v-show="selectedTeam"
      :team="selectedTeam"
      :class="selectedTeam ? ['show', selectedTeam.displayName] : 'none'"
      @SendModalStatus="getModaldata"
      :selectedTeam="selectedTeam"
    />
  </div>
</template>

<script lang="ts" src="./TS/PlayerSelect.ts"></script>

<style>
@import '../assets/css/PlayerSelect.css';
</style>
