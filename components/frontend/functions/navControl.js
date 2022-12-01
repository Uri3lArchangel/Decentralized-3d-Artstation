let isOpen=false
let isOpen2=false
let isOpen3 = false

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

  export function openSubMenuMD(){
    let subMenu = document.getElementById('innersubmenuMD')
    let barHeight = document.getElementById('flexedBar').getBoundingClientRect().height

      subMenu.style.visibility='visible'
      subMenu.style.height='400px'
      subMenu.style.top=`${barHeight}px`
    

  }


  export function closeSubMenuMD(){
    let subMenu = document.getElementById('innersubmenuMD')
    let barHeight = document.getElementById('flexedBar').getBoundingClientRect().height

      subMenu.style.visibility='hidden'
      subMenu.style.height='0'
      subMenu.style.top=`${barHeight}px`
    

  }