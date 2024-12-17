# 🐶 댕글 🐾

![Header](https://github.com/user-attachments/assets/02a1beaa-e38c-4287-b13a-42faef2ac270)

댕글 🐾 은 반려견을 위한 견적 매칭 플랫폼입니다.  
반려견 미용 서비스✂️와 동물병원🏥 가격비교 및 예약 서비스를 제공합니다.

<br/>

## 서비스 이용해 보기 🔗

| Type           | URL                         |
| -------------- | --------------------------- |
| 🐾 일반 사용자 | www.daengle.com             |
| ✂️ 미용사      | https://groomer.daengle.com |
| 🏥 동물병원    | https://vet.daengle.com     |

<br/>

## 기술 스택

- Turborepo
- Next.js, React
- emotion
- Zustand, Tanstack-query
- Storybook

<br/>

## 폴더 구조

```plaintext
.
├── README.md
├── apps
│   ├── daengle
│   ├── groomer
│   ├── storybook
│   └── vet
├── packages
│   ├── core
│   │   ├── design-system
│   │   ├── eslint-config
│   │   ├── stylelint-config
│   │   └── typescript-config
│   └── services
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

<br/>

## 패키지 설명

- `apps/daengle` 일반 사용자들이 이용하는 서비스입니다.
- `apps/groomer` 미용사들이 이용하는 서비스입니다.
- `apps/vet` 동물병원이 이용하는 서비스입니다.
- `packages/core/design-system` 프로젝트 공통으로 사용되는 디자인 컴포넌트 패키지입니다.
- `packages/core/eslint-config` 프로젝트 공통으로 사용되는 ESLint 설정 관련 패키지입니다.
- `packages/core/stylelint-config` 프로젝트 공통으로 사용되는 Stylelint 설정 관련 패키지입니다.
- `packages/core/typescript-config` 프로젝트 공통으로 사용되는 TypeScript 설정 관련 패키지입니다.
- `packages/services` 프로젝트 공통으로 사용되는 서비스 코드를 모아놓은 패키지입니다.

<br/>

## 로컬 실행 방법

- 본 프로젝트에서는 20.17.0 버전을 사용하므로 nvm을 이용하여 노드 버전을 맞춰 주세요!

  ```bash
  node --version
  ```

  - 만약 버전이 다르다면 `nvm`을 이용하여 node 버전을 변경합니다.

- 아래 코드는 클론 후 최초 1번만 실행합니다.
  ```bash
  npm install -g pnpm@9.9.0
  pnpm install
  ```
- 서버를 실행합니다.
  - 모든 서비스가 각각 다른 포트번호로 실행됩니다.
    ```bash
    pnpm dev
    ```
  - 관리자 서비스(admin)를 실행합니다.
    ```bash
    pnpm admin
    ```
  - 사용자 서비스(daengle)를 실행합니다.
    ```bash
    pnpm daengle
    ```
  - 미용사 서비스(groomer)를 실행합니다.
    ```bash
    pnpm groomer
    ```
  - 병원 서비스(vet)를 실행합니다.
    ```bash
    pnpm vet
    ```

<br/>

## 프론트엔드 팀원 정보

| <img src="https://avatars.githubusercontent.com/u/79887293?v=4" width=150px> | <img src="https://avatars.githubusercontent.com/u/46440436?v=4" width=150px> | <img src="https://avatars.githubusercontent.com/u/98331998?v=4" width=150px> | <img src="https://avatars.githubusercontent.com/u/96318529?v=4" width=150px> |
| :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                  [김주현](https://github.com/corinthionia)                   |                     [고윤정](https://github.com/jejukyj)                     |                   [김윤일](https://github.com/kyoul10121)                    |                    [문소연](https://github.com/MOONProd)                     |
