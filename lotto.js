// 공 컬러로 입힐 색 지정
const lottoColors = ["#FFCC00", "#3366FF", "#FF0000", "#999999", "#339933"]

const button = document.querySelector('#lotto-btn')
button.addEventListener('click', function() {

  // (클릭 할때마다) 랜덤하게 뽑은 6개 숫자를 sort 하고
  const lottoNums = _.sampleSize(_.range(1, 46), 6).sort((a, b)=> a - b)

  // (클릭 할때마다) 6개 숫자가 담긴 section 을 계속 생성 
  const section = document.createElement('section')
  lottoNums.forEach(number => {
    const div = document.createElement('div')
    div.innerText = number
    div.classList.add('ball')
    div.style.backgroundColor = lottoColors[Math.floor((number)/10)]
    section.appendChild(div)
    console.log(number)
   })

  // (클릭 할때마다) 새로 만들어지는 section 을 결과 영역에 붙인다.
  const result = document.querySelector('#result')
  result.appendChild(section)
})

// 리셋 버튼 만들기
const reset = document.querySelector('#reset-btn')
reset.addEventListener('click', function() {
  window.location.reload()
})