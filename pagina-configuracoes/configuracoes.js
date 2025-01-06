

document.querySelector('.btn-success').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado antes da validação

       
    // Variável para controlar a validação
    let isValid = true;
        
    // Validação dos campos Nome e E-mail
    var nome = document.getElementById('nome').value;
    var msgName1 = document.getElementById('msg-name1');
    var msgName2 = document.getElementById('msg-name2');

    var email = document.getElementById('email').value;
    var msgEmail = document.getElementById('msg-email');

    var inputCheckbox = document.getElementById('alterar-senha');
    
    var senhaAtual = document.getElementById('senhaAtual').value;
    var msgSenhaAtual = document.getElementById('msg-senha-atual');
    
    
    var novaSenha = document.getElementById('novaSenha').value;
    var msgNovaSenha1 = document.getElementById('msg-nova-senha1');
    var msgNovaSenha2 = document.getElementById('msg-nova-senha2');
    
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var msgConfirmarNovaSenha1 = document.getElementById('msg-confirmar-nova-senha1');
    var msgConfirmarNovaSenha2 = document.getElementById('msg-confirmar-nova-senha2');

    var metas = document.getElementById('metas');
    var contasApagar = document.getElementById('contas-a-pagar');
    var limitesDeGastos = document.getElementById('limites-de-gastos');
    var gastosPorCategoria = document.getElementById('gastos-por-categoria');

    var lembreteDepagamentoDeContas = document.getElementById('lembrete-de-pagamento-de-contas');
    var resumoMensalDoOrcamento = document.getElementById('resumo-mensal-do-orçamento');
    var objetivosDePoupança = document.getElementById('objetivos-de-poupança');
    var metaDeGastoDiarioSemanal = document.getElementById('meta-de-gasto-diario-semanal');
    var alertaDeLimitesDeGastos = document.getElementById('alerta-de-limites-de-gastos');

    var msgButtonSave = document.getElementById('msg-button-save');
    
    var accordion = document.getElementById('collapseOne');
    const collapseInstance = new bootstrap.Collapse(accordion, {
        toggle: false
    });

    if (!nome) {
        isValid = false;
        msgName1.style.display = "block";   
    } else {
        msgName1.style.display = "none";    
    }
    
    if (nome && !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        isValid = false;
        msgName2.style.display = "block";
    } else {
        msgName2.style.display = "none";
    }

    if (!email || !email.includes('@') || !/^[^\s@]+@[^\s@]+\.(com|com\.br)$/.test(email)) {
        isValid = false;
        msgEmail.style.display = "block";
    } else {
        msgEmail.style.display = "none";
    }
    

    // Validação dos campos de Senha
    if (inputCheckbox.checked) {
        if (!senhaAtual) {
            isValid = false;
            msgSenhaAtual.style.display = "block";
        } else {
            msgSenhaAtual.style.display = "none";
        }

        if (!novaSenha) {
            isValid = false;
            msgNovaSenha1.style.display = "block";
        } else {
            msgNovaSenha1.style.display = "none";
        }

        // Verifica se a nova senha atende aos requisitos
        if (novaSenha && (novaSenha.length < 8 || !/[A-Za-z]/.test(novaSenha) || !/\d/.test(novaSenha) || !/[!@#$%^&*(),.?":{}|<>]/.test(novaSenha))) {
            isValid = false;
            msgNovaSenha2.style.display = "block";
        } else {
            msgNovaSenha2.style.display = "none";
        }

        if (!confirmarSenha) {
            isValid = false;
            msgConfirmarNovaSenha1.style.display = "block";
        } else {
            msgConfirmarNovaSenha1.style.display = "none";
        }

        if (novaSenha !== confirmarSenha) {
            isValid = false;
            msgConfirmarNovaSenha2.style.display = "block";
        } else {
            msgConfirmarNovaSenha2.style.display = "none";
        }
    }

    if (!isValid) {
        collapseInstance.show();
    }
    
    if (isValid) {
        collapseInstance.hide();
        localStorage.setItem('configuracoes-conta-nome', nome);
        localStorage.setItem('configuracoes-conta-email', email);
        localStorage.setItem('configuracoes-conta-nova-senha', novaSenha);
        localStorage.setItem('configuracoes-pagina-inicial-metas', metas.checked);
        localStorage.setItem('configuracoes-pagina-inicial-contas-a-pagar', contasApagar.checked);
        localStorage.setItem('configuracoes-pagina-inicial-limites-de-gastos', limitesDeGastos.checked);
        localStorage.setItem('configuracoes-pagina-inicial-gastos-por-categoria', gastosPorCategoria.checked);
        localStorage.setItem('configuracoes-notificacoes-lembrete-de-pagamento-de-contas', lembreteDepagamentoDeContas.checked);
        localStorage.setItem('configuracoes-notificacoes-resumo-mensal-do-orçamento', resumoMensalDoOrcamento.checked); 
        localStorage.setItem('configuracoes-notificacoes-objetivos-de-poupança', objetivosDePoupança.checked); 
        localStorage.setItem('configuracoes-notificacoes-meta-de-gasto-diario-semanal', metaDeGastoDiarioSemanal.checked); 
        localStorage.setItem('configuracoes-notificacoes-alerta-de-limites-de-gastos', alertaDeLimitesDeGastos.checked);           
        msgButtonSave.style.display = "block";

        setTimeout(() => {
            msgButtonSave.style.display = "none";
        }, 5000);
        // alert("As alterações foram salvas com sucesso!");
    }
});

function toggleInput() {
    var exibeAlterarSenha = document.getElementById('exibe-alterar-senha');
    var inputSenhaAtual = document.getElementById('senhaAtual');


    var checkbox = document.getElementById('alterar-senha');
    // var input = document.getElementById('myInput');
  
    // Se o checkbox estiver marcado, mostra o input
    if (checkbox.checked) {
        inputSenhaAtual.value = '';
        exibeAlterarSenha.style.display = 'block';
    } else {
      // Se não estiver marcado, esconde o input
      exibeAlterarSenha.style.display = 'none';
    }
  }
