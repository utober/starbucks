// OMDb API
// Send Data: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API: http://www.obdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?apikey=7035c60c&s=frozen

import axios from 'axios'
{
/*
  function fetchMovies() {
    axios.get('http://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log('01', res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent  = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
  }
  fetchMovies()
*/
}


// 정규표현식
{
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
https://www.naver.com
동해물과 백두산이 마르고 닳도록_
`

  const regexp = new RegExp('the', 'gi')
  console.log('01', str.match(regexp))

  const regexp2 = /the/gi
  console.log('02', str.match(regexp2))

  const regexp3 = /fox/gi
  console.log('03', regexp3.test(str)) // true
  console.log('03', str.replace(regexp3, 'AAA'))
  console.log('03', str)  
  
  const regexp4 = /HEROPY/gi
  console.log('04', regexp4.test(str)) // false
  
  const regexp5 = /the/
  console.log('05', str.match(regexp5))

  const regexp6 = /\.$/gim          // $: 문장의 끝(전체영역) m: 멀티라인(각각의 줄)
  console.log('06', str.match(regexp6))
  
  console.log('07', str.match(/d$/g))   // null
  console.log('07', str.match(/d$/gm))  // (1)

  console.log('08', str.match(/^t/gm))  // (1)
  console.log('08', str.match(/^t/gmi)) // (2)

  console.log('09', str.match(/./g))  // (154)
  console.log('09', str.match(/h..p/g)) // http
  console.log('09', str.match(/h..?p/g)) // http
  console.log('09', str.match(/fox|dog/g)) // [fox, dog]
  console.log('09', str.match(/https?/g)) // [http, https]

  console.log('10', str.match(/d{2}/g))   // [dd, dd]
  console.log('10', str.match(/d{2,}/g))  // [dddd]
  console.log('10', str.match(/d{2,3}/g)) // [ddd]
  console.log('10', str.match(/\w/g))     // (126)
  console.log('10', str.match(/\w{2,3}/g)) // (42)
  console.log('10', str.match(/\b\w{2,3}\b/g)) // (10)

  console.log('11', str.match(/[fox]/g))  // (13) [o,o,o,f,...]
  console.log('11', str.match(/[0-9]/g))  // (17) [0,1,0,1,...]
  console.log('11', str.match(/[가-힣]{1,}/g)) // (3) [백두산이, 마르고, 닳도록]

  console.log('12', str.match(/\w/g))   // (127)
  console.log('12', str.match(/\b/g))   // (58) 
  console.log('12', str.match(/\bf\w{1,}\b/g)) // [frozen, fox] : 소문자 f로 시작하는 영단어
  console.log('12', str.match(/\d{1,}/g)) // [010, 1234, ...] : 숫자 덩어리
  console.log('12', str.match(/\s/g))   // (19) 모든공백 (줄바꿈 포함)
  
  const h = `     the hello  world  !`
  console.log('13', h.match(/\s/g)) // (10)
  console.log('13', h.replace(/\s/g, '')) // 모든 공백 제거

  console.log('14', str.match(/.{1,}(?=@)/g)) // [thesecon] : @앞 문자1개 이상 일치 
  console.log('14', str.match(/(?<=@).{1,}/g)) // [gmail.com] : @뒤쪽 문자 1개 이상 일치
}