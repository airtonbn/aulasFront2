const cadastroFormRef = document.querySelector('#cadastroForm');

cadastroFormRef.addEventListener('keyup', (event) => {
    event.preventDefault();
    const nome = event.target.value;
    const idade = event.target.value;
    const email = event.target.value;
    const senha = event.target.value;
    console.log(nome);
    console.log(idade);
    console.log(email);
    console.log(senha);
})

