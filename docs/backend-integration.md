# MEDICAST 백엔드 연동

기준: `2026-DDJ/BE`의 `dev` 브랜치, `docs/predictions-api.yaml` 및 Spring Controller.

## 연동된 플로우

- 설문 4단계 → `POST /predictions` (15개 입력을 백엔드 DTO로 변환)
- 예측 중 화면 → 응답 `COMPLETED`면 결과로 이동, `FAILED`면 오류 표시
- 결과 화면 → `GET /predictions/{predictionId}` (완료될 때까지 PENDING 폴링)
- 시뮬레이션 → `POST /predictions/{predictionId}/simulations` (BMI 15~40, 운동 여부 변경)
- 예측 ID: 탭 내 `sessionStorage`에 저장
- 서버 오류 또는 인증 요구는 그대로 사용자에게 알림. 예시 의료비로 자동 대체하지 않음.

**로그인·회원가입·로그아웃은 이번 PR의 범위가 아닙니다.** 관련 페이지는 변경하지 않습니다.

## API 서버 / 배포 설정

프론트 환경변수 `VITE_API_BASE_URL`을 설정하지 않으면 `https://medicast-be.onrender.com`을 사용합니다.

**중요:** 현재 백엔드 소스의 `AUTH_ENABLED` 기본값은 `true`입니다. 로그인 없이 의료비 예측 기능을 사용하려면 **백엔드 배포 환경에서** `AUTH_ENABLED=false`로 설정되어 있어야 합니다. 이 경우 백엔드의 `RequestUserIdResolver`가 공용 데모 사용자로 요청을 처리합니다. 프론트에서 인증을 우회하지 않습니다.

또한 백엔드 `CORS_ALLOWED_ORIGINS`에 실제 프론트 배포 도메인을 포함해야 합니다. 로컬 개발 시 기본 허용 Origin은 `http://localhost:5173`과 `http://localhost:3000`입니다.

## 확인 항목

1. 백엔드 서버가 실행 중이고 `POST /predictions`가 HTTP 201을 반환하는지
2. 예측 완료 상태가 `COMPLETED`인지. 실패할 경우 `errorCode` 확인
3. `GET /predictions/{id}`가 예측 금액 및 비교 통계를 반환하는지. null 값은 미제공으로 표시
4. 시뮬레이션 응답의 `before`, `after`, `annualMedicalCostDifference`가 화면에 반영되는지
5. HTTP 401이면 인증 없는 배포 구성 여부, CORS 오류면 배포 Origin 허용 목록 확인

단위 테스트: `node --test tests/*.test.js`. 앱 빌드: `npm run build`.

**참고:** Swagger 서버의 실시간 API 응답은 현재 작업 환경에서 직접 확인되지 않았으므로, BE 저장소의 명세를 기준으로 구현했습니다. 서버 접근이 가능해지면 실 요청으로 최종 통합 검증이 필요합니다.
