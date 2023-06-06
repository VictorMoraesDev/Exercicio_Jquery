$(document).ready(function() {
    var form = $('form');
    var campo = $('#campo');
    var listaTarefas = $('#lista-tarefas');

    form.submit(function(event) {
        event.preventDefault();
        if (campo.val().trim() !== '') {
            var tarefa = $('<li>').text(campo.val());
            listaTarefas.append(tarefa);
            campo.val('');

            listaTarefas.find('li').css('border-top', 'none');
        }
    });

    listaTarefas.on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});