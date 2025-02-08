#  Delivery App :iphone: :beers:

## Descrição

Este projeto consiste em um aplicativo web completo para gerenciar um delivery de bebidas, com funcionalidades tanto para clientes quanto para vendedores. Desenvolvido com foco em proporcionar uma experiência intuitiva e eficiente, o aplicativo visa melhorar a gestão de pedidos e a satisfação do cliente.

## Funcionalidades Implementadas

1. **Tela de Login e Registro**
   - Implementação de uma tela de login acessível pelos endpoints `/` e `/login`.
   - Redirecionamento automático da rota padrão (`/`) para `/login`.
   - Validação de dados mal formatados no login (email e senha).
   - Acesso via endpoint `/register` e botão de registro na tela de login.
   - Validação de dados mal formatados no registro (nome, email e senha).
   - Impedimento de cadastro de usuários já existentes.

2. **Tela de Produtos do Cliente**
   - Navegue por todos os produtos disponíveis, com imagens, preços e descrição detalhada.
   - Exibição de produtos em cards com base nos dados do banco de dados.
   - Utilização de contexto para manter dados do usuário logado.
   - Funcionalidade de adicionar, remover e ajustar a quantidade de itens no carrinho.

3. **Tela de Checkout do Cliente**
   - Finalize seu pedido, informando o endereço de entrega e escolhendo um método de pagamento.
   - Calcula e exibe o preço total dos itens selecionados.
   - Permite remover itens do carrinho.
   - Finalização do pedido com geração de venda na tabela de vendas e relacionamento com produtos.

4. **Tela de Pedidos do Cliente**
   - Visualize o status do seu pedido em tempo real e receba notificações quando o status mudar.
   - Lista os pedidos feitos pelo cliente.
   - Navegação para detalhes de cada pedido através de cards clicáveis.

5. **Tela de Detalhes do Pedido**
   - Exibição detalhada dos itens e do status do pedido.
   - Implementação de botões para alterar o status do pedido (preparando, em trânsito, entregue).

6. **Tela de Pedidos da Pessoa Vendedora**
   - Visualize todos os pedidos pendentes, em preparo e entregues, filtrados por status e data.
   - Lista os pedidos relacionados à pessoa vendedora.
   - Permite a navegação para detalhes de cada pedido.

7. **Tela de Detalhes do Pedido da Pessoa Vendedora**
   - Veja todos os detalhes de um pedido, como itens, endereço de entrega e informações do cliente.
   - Exibe os detalhes específicos de um pedido feito à pessoa vendedora.
   - Permite a modificação do status do pedido.

## Testes Implementados

- **Testes Automatizados**
  - Cobrem fluxos de login, registro, navegação, adição/remoção de produtos no carrinho, checkout, listagem de pedidos e detalhes de pedidos.
  - Validam a integridade dos dados em diferentes cenários.

## Tecnologias Utilizadas

### Front-end

- **React**
- **React Router**
- **Styled Components**
- **React Testing Library**

### Back-end

- **Node.js**
- **Express**
- **Sequelize**
- **PostgreSQL**

### Banco de Dados

- **PostgreSQL**

## Observações Técnicas

- Utilização de tecnologias como ReactJS, Node.js, Express, Sequelize, JWT para autenticação, entre outras.
- Implementação de banco de dados relacional (SQL) para persistência de dados.
- Uso de padrões de projeto e boas práticas de desenvolvimento.

## Próximos Passos

- Implementar as funcionalidades faltantes.
- Testar o aplicativo em diferentes dispositivos e navegadores.
- Implementar um sistema de pagamentos online.
- Adicionar funcionalidade de avaliação e feedback dos clientes.
- Otimizar a performance do aplicativo para carregamento mais rápido.
- Melhorar a segurança do aplicativo com autenticação de dois fatores.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para discutir melhorias ou novas funcionalidades.
