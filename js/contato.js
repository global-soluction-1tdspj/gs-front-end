document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contato-form');
    const mensagem = document.getElementById('mensagem-contato');
    const erroNome = document.getElementById('erro-nome');
    const erroDuvida = document.getElementById('erro-duvida');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        mensagem.innerHTML = '';
        erroNome.textContent = '';
        erroDuvida.textContent = '';

        const nome = form.nome.value.trim();
        const duvida = form.duvida.value.trim();

        let erro = false;

        if (nome.length < 3) {
            erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
            erro = true;
        }

        if (duvida.length < 10) {
            erroDuvida.textContent = 'A dúvida deve ter pelo menos 10 caracteres.';
            erro = true;
        }

        if (erro) return;

        try {
            await new Promise((resolve) => setTimeout(resolve, 800));

            const popup = document.createElement('div');
            popup.className = 'popup-mensagem';
            popup.innerHTML = 'Mensagem enviada com sucesso!<br><button id="fechar-popup" style="margin-top:16px;padding:8px 18px;border:none;border-radius:6px;background:#fff;color:#22cc66;font-weight:bold;cursor:pointer;">Fechar</button>';
            document.body.appendChild(popup);

            document.getElementById('fechar-popup').onclick = function() {
                popup.remove();
            };

            form.reset();
        } catch (error) {
            mensagem.innerHTML = `<div class="erro-campo">Erro ao enviar mensagem. Tente novamente.</div>`;
        }
    });
});