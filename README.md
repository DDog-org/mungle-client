# 🐶 댕글

강아지 미용 중계 서비스 🐶 댕글 🐶

<br/>

## 기술 스택

- Turborepo
- Next.js, React
- SCSS Modules
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
├── node_modules
├── package.json
├── packages
│   ├── eslint-config
│   ├── typescript-config
│   └── design-system
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

<br/>

## 패키지 설명

- `apps/daengle` 일반 사용자들이 이용하는 서비스입니다.
- `apps/groomer` 미용사들이 이용하는 서비스입니다.
- `apps/vet` 병원이 이용하는 서비스입니다.
- `packages/eslint-config` 프로젝트 공통으로 사용되는 ESLint 설정 관련 패키지입니다.
- `packages/typescript-config` 프로젝트 공통으로 사용되는 TypeScript 설정 관련 패키지입니다.
- `packages/design-system` 프로젝트 공통으로 사용되는 디자인 컴포넌트 패키지입니다.

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
