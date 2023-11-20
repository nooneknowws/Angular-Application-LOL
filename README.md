## TODO

- Arrumar as navbars das telas de funcionario (algumas tão com os links do cliente)
- ~Fazer muito na tela de criar pedido do cliente (botão de mais)~
- Padronizar a tabela horrorosa na tela de lista de pedidos do cliente e o link que tá no icone de + pra jogar na tela de consulta, mais o filtro
- Dar merge no CRUD das roupas e arrumar as telas do mesmo
- Implementar os botões e filtros na listagem de pedidos do funcionário
- Remover o item "Recolher pedido" da navbar do funcionário
- ~Remover a tela de finalizar pedido (eduardo)~ 
- Implementar modal nos botões de status (Finalizar, lavagem e recolher)

# Pra 11/09

- Adicionar a tela dos relatórios n(juntar pra fazer essas porra td os 4 raquel, du, anita, chicory)
- Adicionar a tela do CRUD de funcionários (giu e thaly)

# Especificação e requisitos

| Requisito | Descrição                     | Rota                                |
|-----------|-------------------------------|-------------------------------------|
| RF001     | Autocadastro                  | autenticacao/cadastro               |
| RF002     | Login                         | autenticacao/login                  |
| RF003     | Pagina inicial de Cliente     | cliente/inicialCliente              |
| RF004     | Pedido on-line                | cliente/pedidosCliente              |
| RF005     | Aprovar orçamento do pedido   | cliente/orcamentoCliente            |
| RF006     | Rejeitar orçamento do pedido  | cliente/orcamentoCliente            |
| RF007     | Listagem de pedidos           | cliente/listarPedidosCliente        |
| RF008     | Cancelamento de pedidos       | cliente/consultarPedido             |
| RF009     | Consulta de pedido            | cliente/consultarPedido             |
| ~RF010~   | ~Pagar pedido~                | Não tem tela                        |
| RF011     | Pagina inicial de Funcionario | funcionario/incialFuncionario       |
| RF012     | Confirmacao de recolhimento   | funcionario/confirmacaoRecolhimento |
| RF013     | Visualizacao de pedidos       | funcionario/listarPedidos           |
| ~RF014~   | ~Confirmacao de lavagem~      | Não tem tela                        |
| ~RF015~   | ~Finalizacao de Pedido~       | Não tem tela                        |
| RF016     | Manutencao de Pecas de Roupas | outro repo                          |
| RF017     | Relatório de Receitas PDF     | TODO                                |
| RF018     | Relatório Clientes PDF        | TODO                                |
| RF019     | Relatório Clientes Fiéis PDF  | TODO                                |
| RF020     | Relatório Pedidos PDF         | TODO                                |

# TrabalhoWeb2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
