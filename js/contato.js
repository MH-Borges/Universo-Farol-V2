$(document).ready(function () {
    $('#telefone').mask('(00) 00000 - 0000');

    $('#Enviar_Contato').click(function (e) {
        event.preventDefault();
        $('#Alertmsg').removeClass('text-danger');
        $('#Alertmsg').removeClass('text-success');
        $('#Alertmsg').addClass('text-info');
        $('#Alertmsg').text('Enviando');
        $.ajax({
            url: "email.php",
            method: "post",
            data: $('form').serialize(),
            dataType: "text",
            success: function (Alert) {
                if (Alert.trim() === 'Email enviado com sucesso!') {
                    $('#Alertmsg').removeClass('text-info');
                    $('#Alertmsg').addClass('text-success');
                    $('#Alertmsg').text(Alert);
                    $('#nome').val('');
                    $('#email').val('');
                    $('#telefone').val('');
                    $('#assunto').val('');
                    $('#mensagem').val('');
                    setTimeout(() => { window.location.reload(); }, 5000)
                }
                else if (Alert.trim() == 'Preencha o Campo de Nome') {
                    $('#Alertmsg').addClass('text-danger');
                    $('#Alertmsg').text(Alert);
                }
                else if (Alert.trim() == 'Preencha o Campo do Email') {
                    $('#Alertmsg').addClass('text-danger');
                    $('#Alertmsg').text(Alert);
                }
    
                else if (Alert.trim() == 'Preencha o Campo de Mensagem') {
                    $('#Alertmsg').addClass('text-danger');
                    $('#Alertmsg').text(Alert);
                }
                else {
                    $('#Alertmsg').addClass('text-danger');
                    $('#Alertmsg').text('Erro ao enviar o formulario, provaveis problemas com o servidor, você pode tentar nos mandar mensagem via Instagram ou Whatsapp');
                }
            }
        })
    });
});