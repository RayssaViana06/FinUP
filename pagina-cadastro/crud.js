var usuario = [];
 
        function addItem(){
           if (localStorage.usuario){             
              usuario = JSON.parse(localStorage.getItem('usuario')); 
           }
           let novoNome = document.getElementById("username").value;
           usuario.push(novoNome);
           document.getElementById("username").value = "";
           localStorage.usuario = JSON.stringify(usuario);

           let novoEmail = document.getElementById("email").value;
           usuario.push(novoEmail);
           document.getElementById("email").value = "";
           localStorage.usuario = JSON.stringify(usuario);

           let novaSenha = document.getElementById("password").value;
           usuario.push(novaSenha);
           document.getElementById("password").value = "";
           localStorage.usuario = JSON.stringify(usuario);

           let senhaC = document.getElementById("passwordConfirmation").value;
           usuario.push(senhaC);
           document.getElementById("passwordConfirmation").value = "";
           localStorage.usuario = JSON.stringify(usuario);
        }





