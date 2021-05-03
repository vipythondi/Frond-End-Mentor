let mode = document.querySelector('.switch')
let page = document.querySelector('.page-wrapper')
let header = document.querySelector('.header')
let h1 = document.querySelector('.title')
let toggle =  document.querySelector('.slider')
let h1_boxes = document.querySelectorAll('.h1-box')
let h1_paragraph = document.querySelector(".h1-paragraph")
let second_boxes = document.querySelectorAll(".main__second__boxes > div")
let first_boxes = document.querySelectorAll(".main__first__boxes > div")
mode.addEventListener('click', ()=>{    
  if(mode.children[0].checked == true){
      mode.children[0].checked = false
      page.style.backgroundColor = 'white'
      header.style.backgroundColor = "#F8F9FE"
      h1.style.color = 'black'
      toggle.style.background = 'gray'
      h1_paragraph.style.color = 'gray'
      for(let i=0; i<=11; i++){
          h1_boxes[i].style.color = 'black'
        }
      for(let i=0; i<=7; i++){
        second_boxes[i].style.background = '#F0F3FA'
      }
      for(let i=0; i<=3; i++){
        first_boxes[i].style.background = '#F0F3FA'
      } 
    }
  else{
    mode.children[0].checked = true
    page.style.backgroundColor = 'hsl(230, 17%, 14%)'
    header.style.backgroundColor = "hsl(232, 19%, 15%)"
    h1.style.color = 'white'
    toggle.style.background = 'linear-gradient(to right, #3A9ED8, #3CC1A7)'
    h1_paragraph.style.color = 'white'
    for(let i=0; i<=11; i++){
        h1_boxes[i].style.color = 'white'
    }
    for(let i=0; i<=7; i++){
         second_boxes[i].style.background = 'hsl(228, 28%, 20%)'
    }
    for(let i=0; i<=3; i++){
        first_boxes[i].style.background = 'hsl(228, 28%, 20%)'
      } 
  }
})