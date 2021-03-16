# STEP01 (HTML & CSS)

1. 라브우저 스타일 초기화
  - reset.css CDN :: [www.jsdelivr.com] 

2. <script defer src="./filename.js"></script>
  - defer: html 문서 로딩 완료 후 스크립트 적용

3. dataset
  {
    <div data-fruit-name="apple">사과</div>
    <div data-fruit-name="banana">바나나</div>

    <script>
      const els = document.querySelectorAll('div')
      els.forEach(el => {
        console.log(el.dataset.fruitName);  // apple banana
      })
    </script>
  }

4. 박스모델
  - auto : 기본값 (요소에 이미 들어있는 속성의 값)
           브라우저가 너비를 계산
  - 단위 : px, em, vw
 
5. CSS 속성
  - min-width, min-height
  - max-width, max-height

6. 단위
  - px  : 픽셀
  - %   : 상대적 백분율
  - em  : 요소의 글꼴 크기
  - rem : 루트 요소(html)의 글꼴 크기
  - vw  : 뷰포트 가로 너비의 백분율
  - vh  : 뷰포트 세로 너비의 백분율

7. 여백
  - margin : 음수사용 가능
  - auto : 브라우저가 여백을 계산
  - padding 

8. border
  - border 
  - border-width
  - border-style  : solid dashed dotted
  - border-color
  - border-top
  - border-top-width
  - border-top-style
  - border-top-color
  - border-radius

9. box-sizing
  - content-box : 요소의 내용(content)으로 크기 계산(기본)
  - border-box : 요소의 내용 + padding + border로 크기 계산

10. overflow
  - visible : (기본)
  - hidden
  - auto    : 넘칠경우만 생성
  - scroll  : 스크롤바 생성 (x,y)
  - overflow-x
  - overflow-y

11. display
  - block inline inline-block
  - flex  : 1차원 레이아웃
  - grid  : 2차원 레이아웃
  - none table table-row table-cell ...

12. opacity
  - 0.07 : 7%

13. font
  - font-weight: normal(400) bold(700) 100~900
  - font-style
  - font-family: 글꼴, .., 글꼴계열(serif/non-serif)
  - line-height

14. 문자
  - text-indent : (+/-)
  - text-align
  - text-decoration

15. 배경
  - background-color: transparent(기본)
  - background-image: none(기본)
  - background-image: url("경로") center/contain no-repeat
  - background-repeat: repeat(기본) no-repeat repeat-x repeat-y
  - background-position: 10px 20px / 0~100% / [방향] center top bottom left right 
  - background-size:
      + auto(실제크기:기본) / 100px(하나넣어도 자동조절) / 100px 100px
      + cover : 비율을 유지, 요소의 더 넓은 너비에 맞춤
      + contain: 비율을 유지, 요소의 더 짧은 너비에 맞춤
  - background-attachment: 요소의 배경 이미지 스크롤 특성
      + scroll : 이미지가 요소를 따라서 같이 스크롤
      + fixed  : 이미지가 뷰포트에 고정, 스크롤 X
      + local  : 요소 내 스크롤 시 이미지가 같이 스크롤(x)

16. 배치
  - position: static (기준없음/기본값)  
  - position: relative  (요소 자신을 기준으로 배치)
  - position: absolute  (위치 상 부모요소 기준)
  - position: fixed (뷰포트(브라우저)를 기준)
  - position: sticky (스크롤 영역기준)
  - top bottom left right z-index auto(브라우저가 계산)
  - z-index : auto (기본) : 부모 요소와 동일한 쌓임 정도 (-1)
  - position 속성 값으로 absolute, fixed가 지정된 요소는,
    display 속성이 block으로 변경됨.


17. 플렉스(정렬) : 1차원 레이아웃

  - display: flex
    + Flex Container  : 부모요소
      * flex-flow
      * flex-direction
      * flex-flex-wrap
      * justify-content
      * align-content
      * align-items

    + Flex Items      : 자식요소
      * order
      * flex
      * flex-grow
      * flex-shrink
      * flex-basis
      * align-self

18. Flex Container
  -  Flex Container의 화면 출력 특성
    + display: flex :: 블록 요소와 같이 Flex Container 정의
    + display: inline-flex :: 인라인 요소와 같이 Flex Container 정의

  - Flex-direction  :: 주 축을 설정
    + row         :: 행 축 (좌 => 우)     :: 수평 [기본]
    + row-reverse :: 행 축 (우 => 좌)
    + column      :: 열 축 (위 => 아래)   :: 수직
    + column-reverse  :: 열 축 (아래 => 위) 

    + flex-start(시작점) / flex-end(끝점)
    + Main-axis(주 축)   / Main-axis(주 축)

  - flex-wrap :: Flex Items 묶음(줄바꿈) 여부
    + nowrap  :: 줄바꿈 없음 => 한 줄로 나열 [기본]
    + wrap    :: 여러 줄로 묶음
    + wrap-reverse :: wrap의 반대 방향으로 묶음

  - justify-content :: 주 축의 정렬방법        ==> 수평정렬 할 때
    + flex-start  :: Flex Items를 시작점으로 정렬 [기본]
    + flex-end    :: Flex Items를 끝점으로 정렬
    + center      :: 가운데로 정렬
    + space-between :: 각 Flex Item 사이를 균등하게 정렬
    + space-arund   :: 각 Flex Item의 외부 여백을 균등하게 정렬

  - align-content   :: 교차 축의 여러 줄 정렬방법 ==> 수직정렬  ==> 2줄 이상이어야 적용
    + stretch     :: 시작점으로 정렬 [기본]
    + flex-start  :: 시작점으로 정렬 
    + flex-end    :: 끝점으로 정렬 
    + center      :: 가운데 정렬
    + space-between :: 각 Flex Item 사이를 균등하게 정렬 
    + space-around

  - align-items   :: 교차 축의 한 줄 정렬 방법
    + stretch     :: Flex Items를 교차 축으로 늘림 [기본]
    + flex-start  
    + flex-end
    + center
    + baseline    :: 각 줄의 문자 기준선에 정렬

19. Flex Items
  - order : Flex Item의 순서
    + 0    : 순서 없음  [기본] 
    + 숫자 : 숫자가 작을수록 먼저

  - flex-grow : Flex Item의 증가 너비 비율
    + 0    : 증가 비율 없음 [기본]
    + 숫자 : 증가 비율

  - flex-shrink : Flex Item의 감소 너비 비율
    + 1    : Flex Container 너비에 따라 감소 비율 적용 [기본]
    + 숫자 : 감소 비율    (0: 비율 없음)

  - flex-basis  : Flex Item의 공간 배분 전 기본 너비
    + auto : 요소의 Content 너비  [기본]
    + 단위 : px, em, rem 등 단위로 지정

20. 전환
  - 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
  - transition: 속성명 [지속시간] 타이밍함수 대기시간;

  - transition-property
    + all      : 모든 속성에 적용 [기본]
    + 속성이름 : 전환 효과를 사용할 속성 이름 명시
    + transition: width 1s; 
    + transition: width 1s, color .5s; 

  - transition-duration 
    + 0s      : 전환효과 없음 [기본]
    + 시간    : 지속시간

  - transition-timing-function : 전환 효과의 타이밍(Easing) 함수를 지정
    + esae    : 느리게-빠르게-느리게 [기본] = cubic-bezier(0.25, 0.1, 0.25, 1)
    + linear  : 일정하게 = cubic-bezier(0,0,1,1)
    + ease-in : 느리게-빠르게 = cubic-bezier(0.42, 0, 1, 1)
    + ease-out: 빠르게-느리게 = cubic-bezier(0,0,0.58,1)
    + ease-in-out : 느리게-빠르게-느리게 = cubic-bezier(0.42, 0, 0.58,1)
    + cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
    + step(n) : n번 분할된 애니메이션

  - transition-delay
    + 0s    : 대기시간 없음
    + 시간  : 대기시간(s) 지정
    + transition: 1s .5s;   : 지속시간 대기시간

21. 변환
  - transform: 변환함수1 변환함수2 ...;
  - transform: 원근법 이동 크기 회전 기울임;
  - transform: rotate(45deg)  : 회전
  - transform: scale(1.3) : 
  
  - 2D 변환 함수
    * translate(x,y)  : 이동(x축, y축)  [px]
    * translateX(x)   : 이동(x축)
    * translateY(y)   : 이동(y축)
    * scale(x,y)      : 크기(x, y축)  [배수]
    + scaleX(x)
    + scaleY(y) 
    * rotate(degree)  : 회전(각도)  [deg]
    + skew(x,y)       : 기울임(x, y축)  [deg]
    * skewX(x)
    * skewY(y)     
    + matrix(n,n,n,n,n,n) : 2차원 변환 효과

  - 3D 변환함수
    + translateZ(z) : 이동(z축)     
    + translate3d(x,y,z)  : 이동
    + scaleZ(z)     : 크기(z축)     
    + scale3d(x,y,z) : 크기(x,y,z축) 
    * rotateX(x)    : 회전(x축)       [deg]
    * rotateY(y)    : 회전(y축)
    + rotateZ(z)
    + rotate3d(x,y,z,a) : 회전(x,y,z축,각도)
    * prespective(n)  : 원근법(거리)  [px]
    + mxtrix3d(n,n,n,n,......n,n,n) : 3차원 변환 효과
  
  - transform: translate(40px, 40px)
  - transform: translateX(40px)
  - transform: translateY(40px)
  - transform: scale(1.5)
  - transform: scale(0.7)
  - transform: scaleX(2)
  - transform: rotate(45deg)
  - transform: rotateX(45deg)
  - transform: rotateY(45deg)
  
  * 원근법 함수는 제일 앞에 작성해야 한다!!
  - transform: perspective(500px) rotateX(45deg)
  - transform: perspective(500px) rotateY(45deg)
  - transform: perspective(500px) rotateX(45deg) rotateY(45deg)

  - transform: skewX(45deg)
  - transform: skewX(-45deg)
  - transform: skewY(45deg)

22. perspective : 하위 요소를 관찰하는 원근 거리를 지정 [CSS속성]
  - perspective: 600px    (관찰 대상의 부모에 적용) perspective-origin(기준점)   [속성]
  - transform: perspective(600px) (관찰대상에 적용) transform-origin(기준점)     [함수]

23. backface-visibility
  - 3D 변환으로 회전된 요소의 뒷면 숨김 여부
  - visible : 뒷면 보임 [기본]
  - hidden  : 뒷면 숨김

  - transform: rotateY(180deg)  [기본]
  - transform: rotateY(180deg);
    backface-visibility: hidden;


### JavaScript 선행

1. 표기법
  - dash-case(kebab-case) : HTML CSS
  - snake_case  : HTML CSS
  - camelCase   : JS
  - PascalCase  : JS
  - Zero-based Numbering
  
2. DOM API
  - document.querySelector('.claaName')
  - obj.addEventListener()
  - obj.addEventListener(1, 2)
  - obj.addEventListener('click', 2)  // Event
  - obj.addEventListener('click', function () {   // Handler
      console.log('Clicked!)
    }
  - obj.classList.add('active')
  - obj.classList.remove('active')

  - document.querySelectorAll('.box')
  - obj.forEach(function () {})
  - obj.forEach(function (obj, index) {})

  - obj.textContent           // Getter
  - obj.textContent = 'text'  // Setter

3. Method chaining
  - const a = 'Hello'
  - const b = a.split('').reverse().join('')


