# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
 - Site publicado na internet;
 - Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

| Caso de Teste | CT - 01 - Verificar a exibição da Home Page em diferentes navegadores |
|:---|:---|
| Requisitos Associados |RF-02: A aplicação deve permitir ao usuário fazer o login da sua conta.
|Objetivo do Teste | Verificar se todos os elementos interativos e não interativos da Home Page funcionam corretamente, com foco no comportamento de links, botões e imagens, e se a navegação leva a páginas esperadas sem erros. |
|Passos |Acessar o navegador. Informar o endereço do site. .Visualizar a página Home.
| Critérios de êxito | Os elementos da Home Page (imagens, textos, botões, links) devem ser exibidos corretamente, sem distorções ou falhas. Todos os links devem redirecionar para as páginas corretas. Todos os botões e imagens interativos devem realizar a ação prevista sem erros (ex: login, redirecionamento, ampliação). A navegação deve ser fluída e sem interrupções inesperadas. |
|Responsável pela elaboração do caso de teste | João Rezende |

|Caso de Teste | CT - 02 - Verificar o funcionamento dos botões da página |
|:---|:---|
| Requisitos Associados | RF-02: A aplicação deve permitir ao usuário fazer o login da sua conta. |
|Objetivo do Teste | Verificar se os botões "Login" e "Sobre nós" estão funcionando corretamente. |
| Passos | Acessar o navegador. Informar o endereço do site. Visualizar a página Home. Clicar em "Login"
| Critérios de êxito | O botão "Sobre nós" expande e aumenta a letra e, ao clicar, leva para o fim da página. O botão "Login" encaminha o usuário para a página de login. |
|Responsável pela elaboração do caso de teste | João Rezende|

|Caso de Teste    | CT-03 - Verificar a exibição da página Dashboard antes de inserir dados |
|:---|:---|
| Requisitos Associados | RF-07 - A aplicação deve permitir a visualização gráfica e resumida das informações cadastradas, de acordo com preferências do usuário. |
| Objetivo do Teste | Verificar se a página está sendo exibida corretamente quando o usuário ainda não cadastrou nenhum dado para exibição. Esta opção será exibida apenas quando ainda não houver dados financeiros no armazenamento local. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; |
| Critérios de êxito | Caso o usuário ainda não tenha nenhum dado para exibição, deve ser possível visualizar o aviso de que ainda não existem dados a serem exibidos, a apresentação das funcionalidades que podem ser exibidas na página Dashboard e os respectivos links das páginas "Saúde Financeira", "Metas" e "Controle Financeiro" para inserção de dados. |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-04 - Verificar a exibição dos dados na página Dashboard |
|:---|:---|
| Requisitos Associados | RF-07 - A aplicação deve permitir a visualização gráfica e resumida das informações cadastradas, de acordo com preferências do usuário. |
| Objetivo do Teste | Verificar se os dados inseridos pelo usuário nas demais páginas são exibidos corretamente na página Dashboard. Para que os dados sejam exibidos, é necessário que estes já tenham sido inseridos em suas respectivas páginas: "Saúde Financeira", "Metas" e "Controle Financeiro". |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard. |
| Critérios de êxito | Deve ser possível visualizar os dados inseridos nas demais páginas de forma resumida na Dashboard, por meio de gráficos, tabelas e barras de progresso. Além disso, a seção exibida quando não existem dados cadastrados não estará visível mais. |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-05 - Verificar a Criação de Novas Metas
|:---|:---|
| Requisitos Associados | RF-07	A aplicação deve permitir ao usuário definir objetivos financeiros. |
| Objetivo do Teste | Garantir que o sistema permita criar uma nova meta com informações válidas. |
| Passos | 1. Acessar o navegador; <br>2. Digitar endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a Dashboard; <br>7. Clicar em "Metas" na barra lateral. <br>8. clicar em "criar Meta" <br>9. prencher os dados <br>10. clicar em "criar nova meta".|
| Critérios de êxito | caso tenha ocorrido da forma esperada, a nova meta será exibida. |
| Responsável pela elaboração do caso de Teste | Agamenon |

|Caso de Teste    | CT-06 - Verificar o status das metas criadas |
|:---|:---|
| Requisitos Associados | RF-08	A aplicação deve permitir ao usuário visualizar o status de seus objetivos. |
| Objetivo do Teste | verificar as informacoes exibidas ao usuario de acordo com as informacoes inseridas durante a criacao da meta. |
| Passos | 1. Acessar o navegador; <br>2. Digitar endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a Dashboard; <br>7. Clicar em "Metas" na barra lateral; <hr>cenario A - caso nao exista metas: <br> 8. clicar no botao "Criar Meta"; <br> 9. preencher as informacoes para criacao da nova meta; <br>10. visualizar as informacoes dispostas no card; <hr> cenario B: 8. caso a meta ja tenha sido criada, visualizar as informacoes dispostas no card.|
| Critérios de êxito | as informacoes disponiveis aparecerao no card: nome da meta; categoria; prioridade; previsao para completar a meta; valor desejado; valor alcancado; contribuicao mensal necessaria para atingir meta na data estipulada |
| Responsável pela elaboração do caso de Teste | Agamenon |

|Caso de Teste    | CT-07 - Verificar a opção de editar uma meta|
|:---|:---|
| Requisitos Associados | RF-07	A aplicação deve permitir ao usuário definir objetivos financeiros.|
| Objetivo do Teste | Verificar se a opção de editar uma meta existente esta funcionando corretamente. Para que essa opção seja exibida, é necessário que exista pelo menos uma meta no armazenamento local do navegador. |
| Passos | 1. Acessar o navegador; <br>2. Digitar endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a Dashboard; <br>7. Clicar em "Metas" na barra lateral. <hr> cenario A - caso nao exista metas: 8. clicar em "criar Meta" <br>9. prencher os dados <br>10. clicar em "criar nova meta". 11. ao visualizar a meta que foi criada, clicar no botao "editar" e, alterar as informacoes, por fim, clicar no botao, "atualizar meta"; <hr> cenario B: 8. caso a meta ja tenha sido criada, clicar no botao "editar" e, alterar as informacoes, ao terminar de altera-las, clicar no botao "atualizar meta".|
| Critérios de êxito | sera possivel editar todas as informacoes que foram criadas na meta anteriormente  |
| Responsável pela elaboração do caso de Teste | Agamenon |

|Caso de Teste    | CT-08 - verificar a opcao de excluir a meta
|:---|:---|
| Requisitos Associados | RF-07	A aplicação deve permitir ao usuário definir objetivos financeiros. |
| Objetivo do Teste | Garantir que o sistema permita excluir uma meta. |
| Passos | 1. Acessar o navegador; <br>2. Digitar endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a Dashboard; <br>7. Clicar em "Metas" na barra lateral. <hr> cenario A - caso nao exista metas: 8. clicar em "criar Meta" <br>9. prencher os dados <br>10. clicar em "criar nova meta". 11. ao visualizar a meta que foi criada, clicar no botao "excluir"; 12. sera criada uma caixa de dialogo que exibe a mensagem "excluir meta ?" 13. clique em "ok"; 14. a meta sera excluida da pagina.<hr> cenario B: 8. caso a meta ja tenha sido criada, clicar no botao "excluir"; 9. sera criada uma caixa de dialogo que exibe a mensagem "excluir meta ?" 10. clique em "ok"; 11. a meta sera excluida da pagina.|
| Critérios de êxito | caso tenha ocorrido da forma esperada, a nova meta será exibida. |
| Responsável pela elaboração do caso de Teste | Agamenon |

|Caso de Teste    | CT-09 - verificar a opcao de concluir a meta
|:---|:---|
| Requisitos Associados | RF-07	A aplicação deve permitir ao usuário definir objetivos financeiros. |
| Objetivo do Teste | Garantir que o sistema permita concluir uma meta. |
| Passos | 1. Acessar o navegador; <br>2. Digitar endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a Dashboard; <br>7. Clicar em "Metas" na barra lateral. <hr> cenario A - caso nao exista metas: 8. clicar em "criar Meta" <br>9. prencher os dados <br>10. clicar em "criar nova meta". 11. ao visualizar a meta que foi criada, clicar no botao "concluir"; 12. sera exibida uma mensagem dizendo "Meta concluída! Parabéns!" 14. a meta sera apagada da pagina.<hr> cenario B: 8. caso a meta ja tenha sido criada, clicar no botao "concluir"; 12. sera exibida uma mensagem dizendo"Meta concluída! Parabéns!" 14. a meta sera apagada da pagina|
| Critérios de êxito | caso tenha ocorrido da forma esperada, a meta será excluida e a mensagem "Meta concluída! Parabéns!" sera exibida . |
| Responsável pela elaboração do caso de Teste | Agamenon |

|Caso de Teste    | CT-10 - Verificar a exibição da opção de responder ao questionário pela primeira vez na página Saúde Financeira |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve oferecer ao usuário a opção de responder ao Índice de Saúde Financeira do Brasileiro (I-SFB). |
| Objetivo do Teste | Verificar se a opção de responder o questionário está sendo exibida corretamente para o usuário ao responder pela primeira vez. Para que essa seção seja exibida, não pode existir uma resposta armazenada. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral.|
| Critérios de êxito | Caso o usuário ainda não tenha nenhuma resposta armazenada, deve ser possível visualizar a apresentação das informações básicas sobre o I-SFB, e os botões "Responder questionário" e "Saiba mais". |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-11 - Verificar o funcionamento dos botões na apresentação inicial da página Saúde Financeira |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve oferecer ao usuário a opção de responder ao Índice de Saúde Financeira do Brasileiro (I-SFB). |
| Objetivo do Teste | Verificar se os botões "Responder questionário" e "Saiba mais" estão funcionando corretamente. Para que esses botões sejam exibidos, não pode existir uma resposta armazenada. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral; <br>8. Clicar nos botões na página. |
| Critérios de êxito | O botão "Saiba mais" expande e recolhe detalhes adicionais sobre o questionário, sem redirecionar para outra página. O botão "Responder questionário" encaminha o usuário para a página do questionário. |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-12 - Verificar a validação dos dados inseridos no questionário|
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve oferecer ao usuário a opção de responder ao Índice de Saúde Financeira do Brasileiro (I-SFB). |
| Objetivo do Teste | Verificar se a aplicação impede que o usuário envie as respostas quando há questões obrigatórias não respondidas. As questões obrigatórias são aquelas que permitem apenas uma alternativa como resposta. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral; <br>8. Clicar no botão "Responder questionário";<br>9. Deixar pelo menos uma questão obrigatória sem resposta;<br>10. Clicar em "Enviar". |
| Critérios de êxito | A resposta não é enviada, a página não é redirecionada e a mensagem "Responda todas as questões para enviar o questionário" é exibida acima do botão. |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-13 - Verificar o envio das respostas do questionário|
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve oferecer ao usuário a opção de responder ao Índice de Saúde Financeira do Brasileiro (I-SFB). <br>RF-04: A aplicação deve apresentar ao usuário o resultado do questionário após respondê-lo. |
| Objetivo do Teste | Verificar se as respostas do usuário ao questionário estão sendo enviadas e armazenadas corretamente. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral; <br>8. Clicar no botão "Responder questionário";<br>9. Responder todas as questões exibidas;<br>10. Clicar em "Enviar". |
| Critérios de êxito | Quando o usuário clica em uma opção de resposta, deve ser possível visualizar qual alternativa foi assinalada. Ao enviar, a página deve ser redirecionada para a página de resultados e deve ser possível visualizar a resposta enviada no armazenamento local do navegador.  |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-14 - Verificar a exibição dos resultados do I-SFB|
|:---|:---|
| Requisitos Associados | RF-04: A aplicação deve apresentar ao usuário o resultado do questionário após respondê-lo. |
| Objetivo do Teste | Verificar se os resultados do questionário são exibidos corretamente. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral;<hr>Cenário A - Caso não exista resposta ainda:<br>8. Clicar no botão "Responder questionário";<br>9. Responder todas as questões exibidas;<br>10. Clicar em "Enviar"; <br>11. Clicar em todas as abas da página de resultados. <hr> Cenário B: Caso já exista pelo menos uma resposta: <br>8. Clicar em todas as abas da página de resultados.|
| Critérios de êxito | Deve ser possível visualizar a seção de resultados correspondente ao clicar em cada aba. |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-15 - Verificar a opção de responder ao questionário novamente na página Saúde Financeira|
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve oferecer ao usuário a opção de responder ao Índice de Saúde Financeira do Brasileiro (I-SFB). <br> RF-04: A aplicação deve apresentar ao usuário o resultado do questionário após respondê-lo.|
| Objetivo do Teste | Verificar se a opção de responder ao questionário novamente está funcionando corretamente. Para que essa opção seja exibida, é necessário que exista pelo menos um registro de resposta no armazenamento local do navegador. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher seus dados e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em "Saúde Financeira" na barra lateral; <br>8. Clicar na opção de responder novamente nas abas "Resultado", "Progresso" e "Histórico"; <br>9. A partir de qualquer um dos links, responder todas as questões do questionário novamente; <br>10. Clicar em "Enviar"; <br> 12. Clicar em todas as abas da página de resultados.|
| Critérios de êxito | Os links de todas as abas devem redirecionar para a página do questionário. Ao clicar em enviar, a página deve ser redirecionada para a página de resultados e deve ser possível visualizar a resposta enviada no armazenamento local do navegador, juntamente com resposta(s) anterior(es). O resultado atual substitui o resultado anterior nas abas "Resultado" e "Análise" e apenas ele permanece visível. O resultado atual é adicionado a resultados anteriores nas abas "Progresso" e "Histórico", de forma que os anteriores também permanecem visíveis  |
| Responsável pela elaboração do caso de Teste | Isabela |

|Caso de Teste    | CT-16 – Verificar a exibição da página Configurações antes de o usuário alterar dados e salvar suas preferências |
|:---|:---|
| Requisitos Associados | RF-10 - A aplicação deve permitir que o usuário edite e salve os dados da sua conta, além de personalizar as preferências de visualização da página inicial e as configurações de recebimento de notificações. |
| Objetivo do Teste | Verificar se a página Configurações é exibida corretamente antes de o usuário editar seus dados e personalizar suas preferências. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher os dados de login e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em “Configurações” localizada no menu suspenso no canto superior direito; <br>8. Clicar nos botões “Conta”, “Página Inicial” e “Notificações”. |
| Critérios de êxito | Deve ser possível visualizar a página Configurações com os campos em branco. <br>- Deve exibir as seções:<br> - Conta, com os campos “Alterar foto do perfil”, “Nome”, “E-mail” e “Alterar Senha”.<br> - Página Inicial, para personalização das opções de visualização.<br> - Notificações, para configurar preferências de recebimento. <br>- O layout deve estar alinhado e responsivo, com os botões corretamente identificados. |
| Responsável pela elaboração do caso de Teste | Michelle |

|Caso de Teste    | CT-17 - Verificar a validação dos dados inseridos na seção "Conta"|
|:---|:---|
| Requisitos Associados | RF-10: A aplicação deve permitir que o usuário edite e salve os dados da sua conta, além de personalizar as preferências de visualização da página inicial e as configurações de recebimento de notificações. |
| Objetivo do Teste | Verificar se a aplicação impede que o usuário salve as alterações quando os requisitos obrigatórios não são atendidos, exibindo mensagens para correção. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher os dados de login e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em “Configurações” localizada no menu suspenso no canto superior direito; <br>8. Preencher os campos disponíveis na seção "Conta" da seguinte forma:<br>- Inserir números ou caracteres especiais no campo Nome;<br>- Inserir um e-mail inválido (sem "@", ".com" ou ".com.br") no campo E-mail;<br>- Não preencher o campo Senha Atual;<br>- Inserir uma senha com menos de 8 caracteres ou sem incluir letras, números e caracteres especiais no campo Nova Senha;<br>- Inserir uma senha diferente no campo Confirmar Nova Senha.<br>9. Clicar em "Salvar Alterações".
| Critérios de êxito | - A aplicação não salva as alterações enquanto os campos obrigatórios ou inválidos não forem corrigidos.<br>- Mensagens de erro específicas devem ser exibidas abaixo dos campos que não atendem os requisitos, como:<br> - Nome: "O nome deve conter somente letras."<br> - E-mail: "Endereço de e-mail inválido."<br> - Senha Atual: "Este campo é obrigatório."<br> - Nova Senha: "A nova senha deve ter no mínimo 8 caracteres, incluindo letras, números e caracteres especiais."<br> - Confirmar Nova Senha: "As senhas não coincidem."<br>- Após clicar em "Salvar Alterações", a tela abre automaticamente o contêiner da seção “Conta”, exibindo os campos que possuem erros para que o usuário realize as correções necessárias.<br>- As informações válidas devem ser preservadas, enquanto os campos inválidos exibem mensagens de erro. |
| Responsável pela elaboração do caso de Teste | Michelle |

|Caso de Teste    | CT-18 - Verificar a exibição da página Configurações após o usuário alterar dados e salvar suas preferências |
|:---|:---|
| Requisitos Associados | RF-10 - A aplicação deve permitir que o usuário edite e salve os dados da sua conta, além de personalizar as preferências de visualização da página inicial e as configurações de recebimento de notificações. |
| Objetivo do Teste | Verificar se as alterações realizadas pelo usuário são salvas corretamente e exibidas no armazenamento local. |
| Passos | 1. Acessar o navegador; <br>2. Informar o endereço do site; <br>3. Visualizar a página Home; <br>4. Clicar em "Entrar"; <br>5. Preencher os dados de login e clicar em "Entrar"; <br>6. Visualizar a página Dashboard; <br>7. Clicar em “Configurações” localizada no menu suspenso no canto superior direito;<br>8. Modificar os campos disponíveis, como "Nome", "E-mail", "Nova Senha" e "Confirmar Nova Senha", "Página Inicial" e "Notificações"; <br>9. Clicar em "Salvar Alterações". |
| Critérios de êxito | Após salvar as configurações, deve ser exibida a mensagem: “Alterações salvas com sucesso!”. Os dados modificados, como “Nome”, “E-mail” e “Alterar Senha”, bem como as preferências de exibição da “Página inicial” e de “Notificações”, devem ser corretamente salvos no armazenamento local. |
| Responsável pela elaboração do caso de Teste | Michelle |

| Caso de Teste | CT - 19 - Verificar o cadastro de usuários |
|:---|:---|
| Requisitos Associados |RF-1: A aplicação deve permitir ao usuário cadastrar uma conta.
|Objetivo do Teste | Verificar se o cadastro é feito corretamente |
|Passos |1.Acessar o navegador.Informar o endereço do site. <br> 2.Visualizar a página Home. <br> 3.Clicar em"Cadastre-se" <br> 4.Preencher o formulário e clicar em “Cadastrar”.
| Critérios de êxito |Deve avaliar se os dados inseridos pelo usuário são validos e após validar o formulário ao clicar em “Criar conta” e exibir a mensagem de “Usuário cadastrado com sucesso” e levar a página de login |
|Responsável pela elaboração do caso de teste | Rayssa |

| Caso de Teste | CT - 20 -Verificar o login de usuários |
|:---|:---|
| Requisitos Associados |RF-02: A aplicação deve permitir ao usuário fazer o login na sua conta
|Objetivo do Teste | Verificar se o login é feito corretamente com os dados cadastrados |
|Passos |1.Após se cadastrar a página direciona ao login ou visualizando a página home e clicando em “Login” <br> 2.Preencher o login com os dados de usados no cadastro E validar o formulário clicando em “Login”
| Critérios de êxito |Deve avaliar se os dados inseridos são os mesmos usados em um cadastro, e exibir uma mensagem de “Login concluído” e direcionar a dashboard. |
|Responsável pela elaboração do caso de teste | Rayssa |

| Caso de Teste | CT - 21 - Verificar a funcionalidade de adicionar receita/despesa às suas respectivas categorias.|
|:---|:---|
| Requisitos Associados |RF - 05: A aplicação deve permitir ao usuário registrar receitas e despesas e suas respectivas datas. <br> RF - 06: A aplicação deve permitir que o usuário categorize as receitas e despesas cadastradas|Objetivo do Teste | Verificar se a funcionalidade de adicionar receitas ou despesas insere corretamente as informações na tabela da categoria selecionada. |
|Passos |1. Abra um navegador e informe a URL da aplicação; <br>2. Clique no botão “Login” <br>3. Insira os dados de login e clique no botão “Login” para finalizar.<br>4. Clique no item “Controle Financeiro” no menu de navegação da barra lateral esquerda. <br>5. Na página de Controle Financeiro, clique no botão “Adicionar receita” ou “Adicionar despesa”.<br>6. Preencha os campos obrigatórios e clique em “adicionar”.<br>7. Verifique se as informações aparecem corretamente na tabela ao clicar no sinal de + da categoria escolhida anteriormente.
| Critérios de êxito |As informações preenchidas devem aparecer corretamente  na tabela de visualização, com os dados de descrição, valor e data exatamente como inseridos. |
|Responsável pela elaboração do caso de teste | Júlia |

| Caso de Teste | CT - 22 -CT -  Verificar a se a mensagem de erro aparece ao tentar adicionar receita/despesa com algum campo obrigatório vazio |
|:---|:---|
| Requisitos Associados |RF - 05: A aplicação deve permitir ao usuário registrar receitas e despesas e suas respectivas datas. <br> RF - 06: A aplicação deve permitir que o usuário categorize as receitas e despesas cadastradas 
|Objetivo do Teste |Verificar se o sistema exibe uma mensagem de erro ao tentar adicionar uma receita ou despesa sem preencher todos os campos |
|Passos |1. Abra um navegador e informe a URL da aplicação; <br>2. Clique no botão “Login” <br>3. Insira os dados de login e clique no botão “Login” para finalizar.<br>4. Clique no item “Controle Financeiro” no menu de navegação da barra lateral esquerda. <br> 5. Na página de Controle Financeiro, clique no botão “Adicionar receita” ou “Adicionar despesa”.<br>6. Deixar de preencher um ou mais campos obrigatórios. <br> 7. Clicar no botão “adicionar”	O sistema deve exibir uma mensagem de erro, instruindo o usuário a preencher todos os campos obrigatórios antes de tentar de adicionar uma transação
| Critérios de êxito |O sistema deve exibir uma mensagem de erro, instruindo o usuário a preencher todos os campos obrigatórios antes de tentar de adicionar uma transação |
|Responsável pela elaboração do caso de teste | Júlia|
