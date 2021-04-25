const panels = document.querySelectorAll('.panel')



function switchActiveClass(activeClass) {
    let x = document.getElementById(activeClass);
    panels.forEach((panel) => {
        
        panel.classList.remove('active')
        
    })
    x.classList.add("active")
} 


function hideMenu(){
    let menuOpen = document.querySelector('#toggle').checked;
  
    if(menuOpen = true){
      document.querySelector('#toggle').checked = false;
    }
    }
    window.addEventListener("scroll", hideMenu);


// const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     }
//     )
// }