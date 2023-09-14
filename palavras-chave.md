INTELIGÊNCIA
OPORTUNIDADE
--------------------------------------------------
RECAP - AULA 02 

AJUSTE FRONT-END MAIS FIEL AO PROTOTIPO

CRIEI O BACK-END PARA DESCENTRALIZAR AS TAREFAS DA APLICAÇÃO
FUNÇÃO DO BACK-END SERÁ FAZER O DOWNLOAD DO VÍDEO, CONVERSÕES, EXTRAIR O CONTEÚDO E DEVOLVER PARA O FRONT-END

APRENDI A INICIAR O SERVIDOR DEFININDO O ENDEREÇO DA PORTA
APRENDI A UTILIZAR O METODO GET DIRECIONANDO O ENDEREÇO DE ROTA EX: app.get("summary/:id")
APRENDI A UTILIZAR O PARAMETRO PARA RECEBER O ID DO VIDEO EX: download(request.params.id)

CONTEÚDO EXTRA PARA EXEMPLOS 
/* Na pasta Index 
app.get("/summary/:id", (request, response) => {
  download(request.params.id) 
  response.send("ID do vídeo:" + request.params.id)
*/

/* Pasta download (pasta da função)
export function download(videoId) {
  console.log("Realizando o download do vídeo" + videoId)
}
*/

a função download () que está sendo exportada e importada na index.js está recebendo uma váriavel (videoId) que será
recebido o valor de request.params.id na pasta server/index.js ficando download(request.params.id)
--------------------------------------------------------------------

AULA NLWIA - AULA 03

A TAG FORM OU SEÇÃO DE FORMULARIO TEM COMO OBJETIVO
EXTRAIR INFORMAÇÕES DO USUÁRIO
