<template>
  <div>
    <div class="modal-btn">
      <img
        loading="lazy"
        class="CloseButton"
        @click="modalClose"
        src="@/assets/img/Close.png"
        alt=""
      />
    </div>
    <div class="ModalContents">
      <div class="LogoSection">
        <div class="LogoDescription">
          <div class="SelectTeamLogoImgWrap">
            <img
              :src="selectedTeam.logo"
              :alt="selectedTeam.displayName"
              class="SelectTeamLogoImg"
            />
            <div class="TeamName">{{ selectedTeam.displayName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="@/components/Modal/ModalTS/ChelseaModal.ts"></script>

<style>
@import '@/assets/css/Modal.css';
</style>
