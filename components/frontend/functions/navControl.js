let isOpen=false
let isOpen2=false

export const openNav =()=>{
    let dropDownMenu = document.getElementById('dropdownmenu')
    let navBarHeight = document.getElementById('navbar').getBoundingClientRect().height
    let subMenu = document.getElementById('innersubmenu')

    if(isOpen){
      dropDownMenu.style.visibility='hidden'
      if(isOpen2){
        subMenu.style.visibility='hidden'
        subMenu.style.height=0
        isOpen2=false
      }
      isOpen=false
      
    }else{
      dropDownMenu.style.visibility='visible'
      dropDownMenu.style.top = `${navBarHeight}px`
      isOpen=true

    }
  }

  export function openSubMenu(){
    let subMenu = document.getElementById('innersubmenu')
    if(isOpen2){
      subMenu.style.visibility='hidden'
      subMenu.style.height=0
      isOpen2=false
    }else{
      subMenu.style.visibility='visible'
      subMenu.style.height='550px'
      isOpen2=true
    }
  }