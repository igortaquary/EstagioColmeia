# EstagioColmeia_IgorTaquary

Autor: Igor Taquary.

Etapa de processo seletivo de estágio na empresa Colmeia.

# Introdução

A aplicação consiste em pegar dados de um servidor no Back4App, usando GraphQL, processar os dados em um client NodeJs
e no fim criar um arquivo .csv com os dados processados.
O servidor fornecia dados sobre a saga Star Wars, tais como filmes, personagens, especies, veiculos, entre outros.
Devendo a aplicação resultar um arquivo csv com as seguintes perguntas(e suas respostas):
  - Qual o nome do primeiro filme lançado;
  - Quais espécies vivem menos tempo em média;
  - Existem quantos personagens de cada gênero;
  - Qual a altura média dos personagens;
  - Quais personagens falam a língua Gungan basic;
  - Quantos personagens vivem no planeta mais populoso.

  
# Rodando os testes

Para realizar os testes foi utilizado a estrutura Jest.

Os testes são realizados para certificar que a API está respondendo corretamente e que as querys usadas estão funcionando.
  Como testar:
   - Clone este repositório;
   - Baixe os modulos que serão utilizados pelo programa:
       + npm install
   - Inicie os testes:
       + npm run test
         
  Ao final da execução é esperado que não retorne nenhum erro.
  
 
# Iniciando a aplicação
  
 - No diretorio onde este repositorio foi clonado baixe os modulos que serão utilizado pela aplicação:
   + npm install;
 - Inicie a aplicação:
   + npm start;
   
 Ao final deve-se receber o código de sucesso "Operação realizada".
 E pode verificar a criação de um arquivo "Answers.csv" no diretorio, nele está as respostas de cada pergunta citada a cima.
 
 Para modificar a aplicação, pode adicionar ou remover as funções de leitura de dados no main do index.js, a ordem que os seus resultados
 são passados para a variavel "data" será como os dados serão exibidos no arquivo .csv
 
 
 # Criação do CSV
   
   No arquivo .csv é utilizado ";" (ponto e virgula) para separar as colunas, 
   o arquivo é criado por meio de uma função createCsv, a qual recebe como parametros o titulo do arquivo,
   e depois arrays de dados para cada linha nova do csv.
   
 
 

