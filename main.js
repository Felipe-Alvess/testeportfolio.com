// Menu mobile
function openMenuMobile(){
        if(menuMobile.style.display == 'block'){
            menuMobile.style.display = 'none'
        }else{
    menuMobile.style.display = 'block'
        }
    }
// Menu mobile


// dark theme
const chk = document.getElementById('chk')
chk.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})
// dark theme

// typingText subtilo
new TypeIt('#typingText',{
loop: true,
waitUntilVisible: true,
startDelay: 3200,
speed: 200
}).type('Desenvolvedor Front End',{delay: 3000}).delete(9)
.type('Web designer').delete(8)
.type('Designer', {delay: 4000})
.go();
// typingText subtilo

// Skills
function showSkills(){
    if(skills.style.display == 'block'){
        skills.style.display = 'none'
    }else{
        skills.style.display = 'block'

    }
    if(skills.style.display == 'block'){
        Sobre.style.display = 'none'
        Projetos.style.display = 'none'
        Contatos.style.display = 'none'
    }
}
//Fim section  Skills JavaScript

//Inicio section  Sobre JavaScript
function showAbout(){
    if(Sobre.style.display == 'flex'){
        Sobre.style.display = 'none'
    } else{
        Sobre.style.display = 'flex'
    }

    if(Sobre.style.display == 'flex'){
     skills.style.display = 'none'
     Projetos.style.display = 'none'
     Contatos.style.display = 'none'
    }
}

//Fim section  Sobre JavaScript

// Início section Projetos
function showProject(){
    if(Projetos.style.display == 'block'){
        Projetos.style.display = 'none'
    } else{
        Projetos.style.display = 'block'
    }
    if(Projetos.style.display == 'block'){
        Sobre.style.display = 'none'
        skills.style.display = 'none'
        Contatos.style.display = 'none'
    }
}

// Fim section Projetos

// Início footer Contatos
function showContact(){
    if(Contatos.style.display == 'block'){
        Contatos.style.display = 'none'
    } else{
        Contatos.style.display = 'block'
    }
    if(Contatos.style.display == 'block'){
        Sobre.style.display = 'none'
        skills.style.display = 'none'
        Projetos.style.display = 'none'
    }
}

// Fim footer Contatos

// Tela de loading
const elemenPreloder = document.getElementById('preloader')
const elemenLoder = document.getElementById('loader')
console.log('ok')

function loading(){
    elemenPreloder.style.display = 'none'
    elemenLoder.style.display = 'block'
}
setTimeout(loading, 3000);
// Tela de loading

// TypingText sobre
new TypeIt('#typingParagraph',{
    loop: false,
    speed: 50,
    startDelay: 1500,
    waitUntilVisible: true 
    })
    .type('Sou estudante de Tecnologia em análise de desenvolvimento de sistemas na uninove, estou no 5° e último semestre e estou em transição de carreira' )
    .type(' estou em busca do primeiro emprego na área da tecnologia, buscando cargos como desenvolvedor front end, análista de sistemas ou suporte de T.I' )
    .type(' Além da faculdade, também faço cursos de desenvolvimento front end usando JavaScript, React e TypeScript, e também de Banco de dados com MySQL e Php todos na Udemy !')
    .go();
// TypingText sobre