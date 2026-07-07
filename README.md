# 👥 Verificador de Idade - Analisador Dinâmico

Este projeto é uma aplicação web interativa desenvolvida para calcular e identificar a idade e o gênero de uma pessoa de forma automatizada a partir do seu ano de nascimento, adaptando elementos visuais dinamicamente.

## 📝 Sobre o Projeto

O foco principal é oferecer uma ferramenta simples e visualmente intuitiva de validação cronológica:
- **Cálculo Automatizado:** A aplicação captura o ano atual dinamicamente usando a classe `Date` do JavaScript e subtrai o ano inserido pelo usuário.
- **Detecção de Gênero e Faixa Etária:** Identifica se o usuário é do sexo Masculino ou Feminino e o classifica em grupos como bebê, criança, jovem, adulto ou idoso.
- **Renderização Dinâmica:** Exibe na tela uma foto correspondente ao perfil detectado (ex: um menino de 7 anos), atualizando o DOM sem a necessidade de recarregar a página.

## 📸 Demonstração

Você pode visualizar o projeto online através do link: 👉 https://leo724-dev.github.io/verificador-de-idade/

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do formulário de entrada, botões de rádio (radio buttons) e container de exibição do resultado.
- **CSS3:** Estilização avançada com centralização de conteúdo, sombras projetadas (`box-shadow`), bordas arredondadas e plano de fundo personalizado e imersivo.
- **JavaScript (ES6+):** Captura e manipulação do DOM, tratamento de eventos do formulário, validações de erro (como ano de nascimento em branco ou maior que o atual) e alteração condicional de tags de imagem (`src`).

## ✨ Funcionalidades

- [x] **Cálculo Preciso da Idade:** Automação baseada no ano corrente do sistema do dispositivo.
- [x] **Exibição Dinâmica de Imagens:** Carregamento de imagens representativas personalizadas para cada faixa etária e gênero detectados.
- [x] **Tratamento de Validações:** Sistema que impede dados inconsistentes e orienta o usuário em tempo real.
- [x] **Responsividade:** Layout totalmente adaptado e centralizado para telas de smartphones, tablets e desktops.
