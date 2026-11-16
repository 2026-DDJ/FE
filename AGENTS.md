# UI 색상 규칙

- 새 UI나 기존 UI를 수정할 때 `src/styles/Common.styles.js`의 `COLORS`를 우선 재사용합니다. 메인 컬러는 `COLORS.pink`입니다.
- 컴포넌트에 색상 값을 직접 추가하기보다 공통 토큰을 사용합니다. 가독성이나 키보드 포커스 때문에 추가 색상이 필요하면 공통 `COLORS`에 정의한 뒤 재사용합니다.
