# JavaScript Essentials_Node.js

1. NVM 설치
  > node 버전 관리
  > google > nvm-windows > (download)[https://github.com/coreybutler/nvm-windows]
  > download and install
  > nvm --version
  > nvm ls
  > nvm install 12.14.1   [노드버전별-설치]
  > nvm ls                [설치된노드버전-리스트]
  > nvm use 12.14.1       [설치된노드버전-선택]
  > nvm uninstall 12.14.1 [노드버전별-삭제]
  > node --version
  > node.js 현재 추천버전 : 12.xx.x

2. npm
  > 패키지, 모듈 관리
  > npm --version
  > npm init -y                      [package.json-생성]
  > npm install parcel-bundler -D    [모듈설치]
  > npm install lodash
  > npm info lodash   [lodash-버전정보]
  > npm install       [package.json-관련모듈설치]

3. package.json
```json
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
```
4. Semantic Versioning, SemVer
  > ^Major.Minor.Patch
  > Major: 기존 버전과 호환되지 않는 새로운 버전
  > Minor: 기존 버전과 호환되는 새로운 기능이 추가된 버전
  > Patch: 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
  > ^: Major 버전 안에서 가장 최신 버전으로 업데이트 가능 => Minor, Patch에 적용
  > npm info lodash => latest: 4.17.21
  > npm install lodash@4.17.20  [한단계낮은-최신버전설치]
  > npm update lodash [4.17.21-설치]   =>  json파일에 ^4.17.21 (^있어야 최신으로 update)

5. git 설정
  > .gitignore [Untracked files]
  {
    .cache/
    dist/
    node_modules/
  }


