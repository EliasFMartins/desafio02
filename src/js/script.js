const nome = document.querySelector('#name');
const snome = document.querySelector('#sname');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btn = document.querySelector('.nice');

btn.addEventListener('click', e=>{
  e.preventDefault()
  console.log('cheguei aqui e,e')
 validanome()
 validasname()
 validaEmail()
 validaSenha()
  
})
validanome = e=>{
  if(nome.value.length < 3){
    const pname = document.querySelector('.pname')
    pname.innerHTML='Nome não pode ter  menos doque 3 caracteres'
    pname.classList.remove('invi')
    }
}
validasname = e=>{
  if(snome.value.length <3){
    const psname = document.querySelector('.psname')
    psname.innerHTML = 'Sobrenome não pode ter menos doque 3 caracteres'
    psname.classList.remove('invi')
  }
}
validaEmail =e =>{
  if(email.value.length <9){
    const pemail = document.querySelector('.pemail');
    pemail.innerHTML = 'Email não pode ter menos de 9 caracteres'
    pemail.classList.remove('invi')
  }
}
validaSenha = e=>{
  if(senha.value.length<5){
    const psenha = document.querySelector('.psenha');
    psenha.innerHTML = 'Senha não pode ser menor doque 5 caracteres'
    psenha.classList.remove('invi')
  }
}