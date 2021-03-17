# STEP02 (Starbucks) 
[https://github.com/ParkYoungWoong/starbucks-vanilla-app]

1. favicon
2. reset.css
3. 오픈 그래프 (The Open Graph protocol)
   웹페이지가 소셜미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정
{
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Starbucks" />
  <meta property="og:title" content="Starbucks Coffee Korea" />
  <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점" />
  <meta property="og:image" content="./images/starbucks_seo.jpg" />
  <meta property="og:url" content="https://starbucks.co.kr" />

  + og:type : 페이지의 유형 (E.g, website, video.movie)
  + og:site_name : 속한 사이트의 이름
  + og:title : 페이지의 이름(제목)
  + og:description : 페이지의 간단한 설명
  + og:image : 페이지의 대표 이미지 주소(URL)
  + og:url : 페이지 주소(URL)
}

4. 트위터 카드(Twitter Cards)
   웹페이지가 소셜미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정
{
  <meta property="twitter:card" content="summary">

  + twitter:card
  + twitter:site
  + twitter:title
  + twitter:description
  + twitter:image
  + twitter:url
}

5. Font
- fonts.google.com : Nanum Gothic (400/700)
- <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">

6. Google material icons
- Home > getting Strated > Web : CDN Copy
- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
- https://material.io/resources/icons : 원하는 아이콘 찾아 코드 복사 : <span class="material-icons">login</span>

7. BEM (Block Element Modifier)
- HTML 클래스 속성의 작명법
  + 요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분을 표시
  + 요소--상태    : Hyphen(Dash) 기호로 요소의 상태를 표시

8. lodash (Scroll 기능)
- google > lodash cdn
- cdnjs.com : 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous"></script>
- lodash.com

9. Javascrip animation library 
- google > gsap cdn
- cdnjs.com
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" integrity="sha512-1dalHDkG9EtcOmCnoCjiwQ/HEB5SDNqw8d4G2MKoNwjiwMNeBAkudsBCmSlMnXdsH8Bm0mOd3tl/6nL5y0bMaQ==" crossorigin="anonymous"></script>

10. 공지사항 (슬라이딩)
- google > swiperjs
- swiperjs.com
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

11. 비율 계산
- 100% : 56.25% = 16:9
- .container {
    width: 200px;
    backgrouond-color: royalblue;
  }
  .container .item {
    width: 100%;
    height: 0;
    padding-top: 56.25%  // 16:9 비율
  }
  {
    top: 50%;
    margin-top: calc(1920px * 9 / 16 / -2);
  }

12. Youtube 삽입
- google > youtube iframe api > https://developers.google.com/youtube/iframe_api_reference

13. floating images
- google > gsap easing > https://greensock.com/docs/v2/Easing

14. 랜덤함수
- {
    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
      // `.toFixed()`를 통해 반환된 문자 데이터를,
      // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
      return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    } 
  } 

