# Fullstack-Challenge-20230720

## Objetivo

Criar um script que receba uma lista de planos de celular e filtre esse lista usando 3 criterios:
- planos que começaram antes de hoje.
- exibir 1 única vez planos com o mesmo : name, localidade. dando preferência quem possuir o schedule.startDate mais recente.
- exibir 1 única vez planos com o mesmos : name. dando preferência a hierarquia de localidades. cidade > estado > pais

## Tecnologias usadas:

- Node/Javascript

## Como rodar o projeto:

### Requisitos
- Instalar o Node.js (https://nodejs.org/)

1. Abra o CMD dentro da pasta do projeto
2. Rode o comando: node script.js
3. O script retornará os planos que sobraram após os filtros


*This is a challenge by Coodesh*



# Documentação do processo:

- A primeira coisa que eu pensei foi em como encaixar os filtros sem precisar escrever muito código. Fui rever os metodos de array pra ver se algum poderia ajudar, lembrei do filter. Havia outros metodos mas não queria perder muito tempo  pensando  em como encaixa-los no código, então resolver fazer da forma mais pratica.

- Também tive que lembrar do pacote que lia arquivos.

- No momento de ordenar planos por data, pensei em usar o pacote 'moment' para facilitar o uso de objetos Date, mas lembrei que não podia usar tais pacotes, então fiz na forma 'raiz'.

- Precisava de uma forma de comparar datas sem fazer um código muito feio, então lembrei de uma que já vi em java.

- Comparar os planos não foi difícil, já fiz muito isso estudando estruturas de dados. Só precisei me certificar que o fluxo estava correto.

- Também precisei tratar arrays esparsos que foram criados conforme o filtro excluía planos fora do requerido. Não pensei que isso fosse acontecer, não imaginava que 'delete' excluiria indices do array.
