
let filtroDecada = 'todas';
let filtroTipo = 'todas';
let filtroMarca = 'todas';

function aplicarFiltros() {
    const camisetas = document.querySelectorAll('.camiseta-item');
    
    camisetas.forEach(camiseta => {
        const decada = camiseta.dataset.decada;
        const tipo = camiseta.dataset.tipo;
        const marca = camiseta.dataset.marca;
        
        const cumpleDecada = filtroDecada === 'todas' || decada === filtroDecada;
        const cumpleTipo = filtroTipo === 'todas' || tipo === filtroTipo;
        const cumpleMarca = filtroMarca === 'todas' || marca === filtroMarca;
        
        if (cumpleDecada && cumpleTipo && cumpleMarca) {
            camiseta.style.display = 'block';
        } else {
            camiseta.style.display = 'none';
        }
    });
}


document.querySelectorAll('.filtro-decada').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        filtroDecada = this.dataset.decada;
        document.getElementById('dropdownDecada').textContent = 
            this.textContent.toUpperCase();
        aplicarFiltros();
    });
});


document.querySelectorAll('.filtro-tipo').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        filtroTipo = this.dataset.tipo;
        document.getElementById('dropdownTipo').textContent = 
            this.textContent.toUpperCase();
        aplicarFiltros();
    });
});

document.querySelectorAll('.filtro-marca').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        filtroMarca = this.dataset.marca;
        document.getElementById('dropdownMarca').textContent = 
            this.textContent.toUpperCase();
        aplicarFiltros();
    });
});



// FORMULARIO DE CONTACTO
const formulario = document.querySelector('form');
if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = this;
        form.style.display = 'none';
        
        const mensaje = document.createElement('div');
        mensaje.className = 'alert alert-success text-center';
        mensaje.style.padding = '40px';
        mensaje.style.fontSize = '1.3rem';
        mensaje.innerHTML = `
            <h3 style="color: #6c0000; font-weight: bold;">¡Gracias por escribirnos!</h3>
            <p>Hemos recibido tu mensaje y te responderemos pronto.</p>
        `;
        
        form.parentNode.insertBefore(mensaje, form);
        
        setTimeout(() => {
            mensaje.remove();
            form.reset();
            form.style.display = 'block';
        }, 5000);
    });
}