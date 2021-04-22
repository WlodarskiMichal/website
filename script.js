const panels = document.querySelectorAll('.panel')



function aboutMe() {
    let x = document.getElementById("about-me");
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