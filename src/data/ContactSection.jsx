import WA from "../assets/img/WA.jpg";
import email from "../assets/img/email.jpg"
import linkedin from "../assets/img/linkedin.png";
import git from "../assets/img/github.png";
import instagram from "../assets/img/instagram.jpg";
import facebook from "../assets/img/facebook.png";
import youtube from "../assets/img/youtube.jpg";


export const contactSection = [
  {
    content: `
         <div class="address">
                       <h3>Address</h3>
                        <p>Jalan Raya Bojong Indah No 6 Pondok Kelapa - Duren Sawit Jakarta Timur</p>
                        <div class="wa"><img src=${WA} />+6285214210194</div>
                        <div class="email"><img src=${email} />herysuhery94@gmail.com</div>
        </div>`,
  },
  // {
  //     content: `<h3>About</h3>
  //                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>`
  // },
  // {
  //     content: `<h3>Contact</h3>
  //                     <p>Jl. Laksda Adisucipto Sleman Yogyakarta</p>
  //                     <p>Kode Pos: 57365</p>`
  // },
  {
    content: `
             <div class="join">
                        <h3>Join</h3>
                        <div class="linkedin"><img src=${linkedin} /><a href="https://www.linkedin.com/in/hery-suhery-3b24ab1b8/" target="_blank">Linkedin</a></div>
                        <div class="github"><img src=${git} /><a href="https://github.com/HeriSuheri" target="_blank">Github</a></div>
                        <div class="instagram"><img src=${instagram} /><a href="https://www.instagram.com/herysuhery22/" target="_blank">Instagram</a></div>
                        <div class="facebook"><img src=${facebook} /><a href="https://www.facebook.com/herry.ricardo.18?locale=id_ID" target="_blank">Facebook</a></div>
                        <div class="youtube"><img src=${youtube} /><a href="https://www.youtube.com/@herysuhery9158" target="_blank">Youtube</a></div>
            </div>`,
  },
];
