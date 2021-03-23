# JavaScript Essentials_JS

1. 포로젝트 초기화
  > npm init -y
  > npm i parcel-bundler -D
  > package.json {"dev": "parcel index.html", "build":"parcel build index.html"}
  > npm run dev

2. JavaScript
  - test.js / getType.js / getRandom.js
  - 기본, 함수, 클래스 : main01.js

3. JavaScript : main02.js
  - Data

  - google > string mdn > [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String]

  - google > Math mdn > [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math]

  - google > array mdn > [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array]

  - google > object mdn > [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object]

  - 깊은복사구현 => lodash 사용 [npm i lodash]
  - google > lodash > [https://lodash.com/docs/4.17.15] 

4. JavaScript : main03.js
  - Module
    - Import 
    - Default export  : 이름 지정하지 않아도 된다 => import 시 이름 변경해서 사용 가능 
    - Named export    : 이름 지정해야 한다   => import 시 { } 이용해서 사용 (여러 개 사용 가능)
    - { name1 , name2 as newName } from './xxx'
    - import * as R from './xxx'  : 한번에 모두 불러와서 할당 (default & named)

  - lodash
    > _.uniqBy()
    > _.unionBy()
    > _.find()
    > _.findIndex()
    > _.remove()

  - JSON
    > JSON.stringify()
    > JSON.parse()

  - google > local storage mdn > [https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage]
    > localStorage.setItem('key', 'value')
    > localStorage.getItem('key')
    > localStorage.removeItem('key')

  - google > lowdb > [https://github.com/typicode/lowdb]

5. JavaScript : main04.js
  - OMDb API : http://www.omdbapi.com/?apikey=[yourkey]&
  - Query String: 주소?속성=값&속성=값&속성=값

  - google > axios > [https://github.com/axios/axios]
    > npm i axios
    > axios.get().then()



# 정규표현식(RegExp)
  main 04.js
  정규식, Regular Expression

## 역할

  - 문자 검색(search)
  - 문자대체(replace)
  - 문자추출(extract)

## 테스트 사이트

  [https://regexr.com/]

## 정규식 생성
```js
// 생성자
new RegExp('표헌', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자 
```js
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
the quick brown fox jumps over the lazy dog.
theabbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일차(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패터(표현)

패턴 | 설명
--|--
^ab | 줄(line) 시작에 있는 ab와 일치
ab$ | 줄(line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)