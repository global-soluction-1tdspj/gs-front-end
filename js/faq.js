document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-pergunta').forEach(pergunta => {
        pergunta.addEventListener('click', function () {
            document.querySelectorAll('.faq-resposta').forEach(resp => {
                resp.classList.remove('active');
            });
            let resposta = this.nextElementSibling;
            if (resposta && resposta.classList.contains('faq-resposta')) {
                resposta.classList.toggle('active');
                return;
            }
            resposta = this.previousElementSibling;
            if (resposta && resposta.classList.contains('faq-resposta')) {
                resposta.classList.toggle('active');
            }
        });
    });
});