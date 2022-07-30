# [원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

---

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
    - [X] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
    - [X] 이메일 조건 : 최소 `@`, `.` 포함
    - [ ] 비밀번호 조건 : 8자 이상 입력
    - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
    - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
    - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
    - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요