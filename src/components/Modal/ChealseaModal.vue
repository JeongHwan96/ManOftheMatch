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
    <div class="modal-btn">
      <div class="CareExplaneSection">
        <div class="careTitleSection">
          <div class="caretitle">Summary</div>
          <div class="caretitleSub">e-Centric Care 솔루션 검증</div>
        </div>

        <div class="careDurationSection">
          <div class="careDuration">Duration</div>
          <div class="careDurationSub">24.02.02 ~ 24.04.02</div>
        </div>

        <div class="careissuemanagementSection">
          <div class="careissue">Issue ManageMent</div>
          <div class="careissueSub">Jira</div>
        </div>

        <div class="careCategorySection">
          <div class="carecategory">Category</div>
          <div class="carecategorySub">Web</div>
        </div>
      </div>
      <!-- underline -->

      <!-- description -->
      <div class="MainTest_Item_Wrap">
        <div class="descriptionImgWrap">
          <h2 class="MainTestItem_Title">Main Test Item (주요 테스트 항목)</h2>
        </div>

        <div class="MainTestItem_Description_Wrap">
          <ul>
            <li class="MainTestItem_Description">원격으로 상태 진단에 대한 동작성 확인</li>
            <li class="MainTestItem_Description">OTA 및 일반 Update(USB) 동작성 확인</li>
            <li class="MainTestItem_Description">원격 제어를 통한 관리에 대한 동작성 확인</li>
          </ul>
        </div>
      </div>
      <!-- underline -->

      <!-- TestCaseWrap  -->
      <div class="testCaseWrap">
        <div class="testCaseImgWrap">
          <h2 class="TestCaseTitle">TestCase</h2>

          <div class="TestCaseImgDescription">TestCase 생성 전 Mind Map으로 전체적인 기능 확인</div>

          <div class="TestCaseImgDescription">
            Mind Map으로 생성 한 내용을 토대로 Test Case 작성
          </div>
        </div>

        <div class="careTestcaseDescriptionWrap">
          <ul>
            <li class="CareTestCaseDescription">
              해당 TestCase 생성 시 UX 시나리오 문서, SRS(Software Requirment Specification)문서
              기반으로 작성 하였습니다
            </li>
            <li class="TestCase_Info">
              TestCase 생성 할 때는 ALM Site에서 직접 생성 하기 때문에 임의로 Excel 파일로 변경 하여
              작성 하였고 내용이 많아 일부분만 표기 하였습니다
            </li>
            <li class="TestCase_Info">마인드 맵 이미지는 내용이 많아 일부만 캡쳐하여 올렸습니다</li>
          </ul>
        </div>
      </div>
      <!-- underline -->

      <div class="IssueWrap">
        <div class="IssueImgWrap">
          <h2 class="TestCaseTitle">Issue</h2>

          <div class="IssueImgDescription">시험 차수별, Priority(중요도)별 이슈 현황</div>

          <div class="IssueImgDescription">1~4차 까지 이슈 중 일부</div>
        </div>

        <ul>
          <li class="Issue_Info">preFC(Feature Complete)부터 FC4차까지의 이슈 관리함</li>
          <li class="Issue_Info">
            테스트 방법은 블랙박스 테스트(오류 예측 테스트, 원인-효과 테스트)을 사용 하여 테스트
            진행
          </li>
          <li class="TestCase_Info">
            Test 진행 시 발견된 이슈는 Singlex ALM에서 관리 하고 있으며 보안 문제로 임의로 Excel
            파일로 변경 하여 일부분만 표기 하였습니다
          </li>
        </ul>
      </div>
      <!-- underline -->

      <!-- Issue Detail  Section -->
      <div class="IssueWrap">
        <div class="IssueImgWrap">
          <h2 class="TestCaseTitle">Issue ManageMent</h2>
          <div class="IssueDetailDescription">
            이슈 등록과 이슈 처리과정등 이슈 관리에 대한 내용
          </div>

          <div class="IssueImgDescription">TestCase 중 어느 sequence에서 이슈가 나왔는지 표시</div>

          <div class="IssueImgDescription">이슈 등록 시 이슈 재현 조건 및 상세 정보 기입</div>

          <div class="IssueImgDescription">
            이슈 등록 후 개발팀과 Comment로 지속적인 Comunication
          </div>

          <div class="IssueImgDescription">지속적인 Comunication 후 개발팀에서 원인/대책 기입</div>

          <div class="IssueImgDescription">
            개발팀에서 원인/대책을 기반으로 확인시험(개선확인)을 진행 후 어떤 식으로 진행 하였는지
            Comment 기입
          </div>

          <div class="IssueDetailFinish">
            모든 것이 마무리 되어서 해당 이슈 Close(이슈개선 완료)
          </div>
        </div>
      </div>
      <!-- underline -->

      <!-- Test Result  Section -->
      <div class="TestResultWrap">
        <h2 class="TestCaseTitle">Test Result</h2>
        <div class="TestResultImgWrap">
          <div class="IssueImgDescription">Test 현황</div>

          <div class="IssueImgDescription">차수별 시험 상세 시험 결과(시험 결과서)</div>
          <ul>
            <li class="Issue_Info">
              Test진행은 LG CNS에서 제작한 ALM(Application LifeCycle Management) 시스템으로 시험을
              진행 하였습니다
            </li>
            <li class="Issue_Info">
              ALM 시스템에서 진행을 진행 하고 진행 한 결과를 토대로 시험 Excel로결과서를 작성하였고
              ALM 시스템에서 관리 하였습니다
            </li>
            <li class="TestCase_Info">
              시험 결과서 같은 경우 보안이 필요한 부분이 포함 되어 있어 일부만 표기 하였습니다
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="@/components/Modal/ModalTS/ChealseaModal.ts"></script>

<style>
@import '@/assets/css/Modal.css';
</style>
