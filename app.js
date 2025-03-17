let amigos = [];

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.getAttribute('data-theme') === 'dark';

    if (isDarkMode) {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

document.body.setAttribute('data-theme', 'dark');

document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        item.textContent = amigo;

        let removeIcon = document.createElement('i');
        removeIcon.className = 'fas fa-times remove-icon';
        removeIcon.onclick = () => removerAmigo(index);
        item.appendChild(removeIcon);

        let userIcon = document.createElement('i');
        userIcon.className = 'fas fa-user';
        item.prepend(userIcon);

        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);

    atualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = amigoSorteado;
    popup.classList.add('active');
}

function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}

function reiniciarJogo() {
    amigos = [];

    atualizarListaAmigos();

    document.getElementById('resultado').textContent = '';
}