
function ProjectLinks(){
   let label1 = "greeting-card-generator"
   let url1 = "https://sndymrn13.github.io/greeting-card-generator/"

   let label2 = "signup-page"
   let url2 = "https://sndymrn13.github.io/signup-page/"

   let label3 = "api-tutorial"
   let url3 = "https://sndymrn13.github.io/api-tutorial/"

   let label4 = "data-playlist"
   let url4 = "https://sndymrn13.github.io/data-playlist/"

   let label5 = "capstone"
   let url5 = "https://sndymrn13.github.io/capstone-level-2/"

   return(
     <ul>
        <li><a href = {url1}>{label1}</a></li>
        <li><a href = {url2}>{label2}</a></li>
        <li><a href = {url3}>{label3}</a></li>
        <li><a href = {url4}>{label4}</a></li>
        <li><a href = {url5}>{label5}</a></li>

     </ul>
   )

}

export default ProjectLinks