import ytdl from "ytdl-core"
import fs from 'fs'
import { info } from "console"

export function download(videoId) {
  //const videoFull = "https://www.youtube.com/watch?v"
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o download do vídeo" + videoId)

  ytdl(videoURL, {quality:"lowestaudio", filter: "audioonly"}).on
  (
    "info",
    (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60){
        throw new Error("A duração desse vídeo é maior do que 60 segundos.")
      }
    }
  ).on("end", ()=>{
    console.log("Download finalizado")
  }).on("error", (error)=> {
    console.log("Não foi possível fazer o download do vídeo. Detalhes do erro:" + error)
  })
  .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}