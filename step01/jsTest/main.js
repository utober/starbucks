let boxEl = document.querySelector('.box')

boxEl.classList.add('active')
let isContains = boxEl.classList.contains('active')
console.log('isContains', isContains)

boxEl.classList.remove('active')
isContains = boxEl.classList.contains('active')
console.log('isContains', isContains)

boxEl.addEventListener('click', ()=>{
  boxEl.classList.add('active')
})

const boxAll = document.querySelectorAll('.box')
boxAll.forEach((box, index) => {
  box.classList.add(`order-${index + 1}`)
  console.log(box, index)
  box.textContent = `order-${index+1}`
  console.log(box.textConent)
})

const a = 'Hello'
const b = a.split('').reverse().join('')
console.log(a, b)

