function myFunction() {
    var fot=document.getElementById("fot")
    var element = document.getElementsByClassName("section")[0];
    element.classList.toggle("darkmode");
    fot.classList.toggle("darkmode")
}
function descerSegundo(){
        const ponto = document.getElementsByClassName('section')[0];
        ponto.scrollIntoView({ behavior: 'smooth' });   
}
function descerprimeiro(){
    const ponto = document.getElementById('fot');
    ponto.scrollIntoView({ behavior: 'smooth' });   
}
function descerPos(){
    const ponto = document.getElementById('fot');
    ponto.scrollIntoView({ behavior: 'smooth' });   
}

document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); // Evita o envio do formulário
    alert('Formulário enviado com sucesso!');
    document.getElementById('modal').style.display = 'none'; // Fecha o modal após o envio
}