<template>
  <div class="arsenal_total_div">
    <!-- <HeaderHe />
    <div class="logoImg">
      <img src="../assets/Logo/ars.png" alt="" class="arsenalLogo" />
      <div class="teamName-kr">
        <router-link to="/arsenal/player">
          <span>{{ teamName }} (선수 선택 하러가기)</span>
        </router-link>
      </div>
      <div class="teamName-en" style="border-bottom: 1px solid #ddd">
        <span>{{ teamName_en }}</span>
      </div> -->

    <table v-for="teamdata in TeamInfo" :key="teamdata.identifier" style="width: 100%">
      <tbody>
        <!-- 정식명칭 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>정식명칭</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.team_name_kr }}</div>
          </td>
        </tr>

        <!-- 별칭 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>정식명칭</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.nickname }}</div>
          </td>
        </tr>

        <!-- 창단일 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>창단일</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.establish }}</div>
          </td>
        </tr>

        <!-- 창단일 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>창단일</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.establish }}</div>
          </td>
        </tr>

        <!-- 소속리그 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>소속리그</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.league }}</div>
          </td>
        </tr>

        <!-- 연고지 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>연고지</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.hometown }}</div>
          </td>
        </tr>

        <!-- 홈구장 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>홈 구장</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.homestadium }}</div>
          </td>
        </tr>

        <!-- 라이벌 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>라이벌</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>
              <p>{{ teamdata.rival }}</p>
              <p>{{ teamdata.rival2 }}</p>
            </div>
          </td>
        </tr>

        <!-- 코치 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>감독</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.coach }}</div>
          </td>
        </tr>

        <!-- 주장 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>주장</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.captin }}</div>
          </td>
        </tr>

        <!-- 부주장 section -->
        <tr>
          <td class="td_style">
            <div>
              <strong>
                <p class="first">
                  <span>부주장</span>
                </p>
              </strong>
            </div>
          </td>
          <td class="underLine">
            <div>{{ teamdata.subCaptin }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./TS/Mom_Team_Detail.ts"></script>

<style></style>
