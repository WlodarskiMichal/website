const panels = document.querySelectorAll('.panel')



function switchActiveClass(activeClass) {
    let x = document.getElementById(activeClass);
    panels.forEach((panel) => {
        
        panel.classList.remove('active')
        
    })
    x.classList.add("active")
} 





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