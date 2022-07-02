# Tasks APP

Esta pasta foi criada com o intuíto de abrigar o código referente ao front-end do projeto.
Para a construção do mesmo, foi usado: JavaScript, React.JS, React-Router, Context.

## Para a execução do código, é necessário
  - node v16;

## Para iniciar
  - na raiz do projeto execute o comando 
    ```npm install```
  - rode o comando
    ```npm start```
  - a aplicação será iniciada na porta 3000 da sua máquina (é muito importante que você já tenha inicado a sua API)

## Documentação do APP

### Login

```no primeiro login basta inserir usuário e senha, nos próximos logins, será verificado se a senha é compatível com a do usuário cadastrado```

O botão de login só será habilitado após inserir um usuário válido (mais de 3 dígitos) e uma senha válida (mais de 6 digitos)

Quando o login for realizado com sucesso, você será redirecionado para a rota aonde é possível verificar suas tarefas e inserir novos dados.

Para sua segurança, é necessário realizar um novo login a cada 12 horas.

### Tela de Tarefas

`Inserir Tarefas`
Na parte superior da tela, é possível inserir novas tarefas. Basta inserir o texto da sua próxima ativida e escolher o seu status e em seguida clicar no botão criar.
Pronto, sua primeira tarefa foi criada com sucesso, agora é só continuar.

`Visualizar Tarefas`
Assim que a página carregar, você será capaz de ver todas as tarefas já inseridas (caso existem).
Na tela, é possível visualizar o conteúdo da tarefa, o seu statos, e dois botões um para editar e outro para deletar a tarefa;

`Editar Tarefas`
Ao clicar no botão azul de editar, o formulário utilizado para inserir tarefa, será automaticamente preenchido com os dados da tarefa selecionada, em seguida é só realizar as alterações desejada e salvar as alterações clicando no botão para editar.


`Deletar Tarefas`
Para deletar uma tarefa, basta clicar no botão identificado com uma lixeira vermelha.
```*ATENÇÃO: ESSA OPERAÇÃO NÃO PODE SER DESFEITA*```

## Alguma dúvida?

- LinkedIn: [Marina Fischer](https://www.linkedin.com/in/marina-miranda-fischer/)
