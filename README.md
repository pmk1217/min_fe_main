# PSM-AI-FRONTEND

```text
PSM-AI FRONT-END 소스 입니다.
```

## 네이밍 규칙

- 디렉토리 이름은 camel case 사용 ( ex : clientRouter, dialogStore)
- 파일 이름은 pascal case 사용 (ex : ClientQuery, SampleDialog)
- interface, enum 이름은 pascal case 사용
  ex :

```ts
export interface SampleModel {
  id: number;
  name: string;
}

export enum SampleEnum {
  APPLE = 'Apple',
  BANANA = 'Banana',
}
```

## 폴더 구조

- 이 프로젝트는 react, vite로 구성 되어 있습니다.

```

  ├─apis             # api request module
  ├─assets           # 폰트, 이미지 등 static files
  ├─components       # 화면 구성 component
  │   └─groupName    # 컴포넌트별 그룹명 ( ex: checkbox, editor, table)
  │
  ├─locales             # 다국어 처리를 위한 glossary keys
  │  └─glossarykeys
  ├─models              # 데이터 model 정보
  │  ├─admin
  │  └─client
  ├─queries             # react query
  │  ├─admin
  │  ├─client
  │  └─common
  ├─store             # react zustand store
  │  ├─admin
  │  └─client
  ├─theme               # mui 공통 theme
  ├─utils               # 공통 util 기능
  └─views               # 화면 pages
  ├─common           # 공통 view(component의 상위 개념, ex: error boundary, notification boundary, catalog)
  ├─dialog           # dialog
  ├─layout           # 화면 layout
  ├─pages
  │  ├─admin
  │  └─client
  └─routers          # router
```

## 빌드 및 서버실행

```bash
npm build
```

```text
1. 배포 env 파일
1) 로컬: .env.local
2) 개발: .env.development
3) 운영: .env.production
```
