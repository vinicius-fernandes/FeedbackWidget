# FeedbackWidget


<p align="center">

 <img src="https://i.ibb.co/422J2Sc/Feedback.png" alt="ProjectImg"/>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- React Native
- Node JS
- TailWind CSS
- Expo

## 💻 Projeto

Consiste em um widget de feedback, que pode ser incorporado a aplicações web e aplicativos, onde os usuários podem enviar feedbacks com um comentário e screenshot que são armazenados em um banco de dados e enviados para um e-mail determinado.

## 🦾 Execução da aplicação
<p>A versão web pode ser testada através do link : </p>
<p>https://feedback-widget-6qq3ybdn8-vinicius-fernandes.vercel.app/</p>
<p>A API pode ser testada através de um post para a rota:</p>
<p>https://feedbackwidget-production-40c3.up.railway.app/feedbacks</p>
<p>
Contendo na requisição um JSON com a seguinte estrutura:<br/>
{<br/>
"comment":"Exemplo comentário",<br/>
"type":"Tipo do feedback",<br/>
"image":"base64 img" //Não obrigatório<br/>
}<br/>
</p>
<p> O aplicativo pode ser executado com o comando expo start na pasta mobile, é necessário possuir a CLI do expo instalada.</p>
