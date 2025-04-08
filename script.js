document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please enter valid credentials.');
    }
});
function mostrarlogin(e){
    e.preventDefault();   
    const logindiv =  document.getElementById("login-todo");
    if  (logindiv.style.display === 'block'){
        logindiv.style.display = 'none'
    }else{
        logindiv.style.display = 'block'
    }
        
};
function buscar(e) {
    e.preventDefault(); // Evita el envío del formulario
 
    const texto = document.getElementById('buscador').value.toLowerCase().trim();
    const items = document.querySelectorAll('.buscable'); 

    let hayResultados = false;

    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(texto)) {
        window.location.href = item.textContent.toLowerCase() +'.html'
        item.style.display = 'block';
        hayResultados = true;
      } else {
        item.style.display = 'none';
      }
    });

  }


    

