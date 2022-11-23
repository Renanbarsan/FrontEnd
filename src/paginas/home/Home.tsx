import React from 'react'
import './Home.css'

let nome = 'Hino Nacional'

function Home(){
    return(
        <div>
        <div>
        <h1 className='fonte'>Copa do Mundo</h1>
        <h2 className='fonte'>{nome}</h2>
        <p className='fonte2'>
         Ouviram do Ipiranga, as margens plácidas
         De um povo heroico, o brado retumbante
         E o Sol da liberdade, em raios fúlgidos
         Brilhou no céu da pátria nesse instante 
            </p>
        <p className='fonte3'>
         Se o penhor dessa igualdade
         Conseguimos conquistar com braço forte
         Em teu seio, ó liberdade
         Desafia o nosso peito a própria morte!
            </p>
         <p className='fonte2'>
         Ó, Pátria amada
         Idolatrada
         Salve! Salve!
         </p>
        <p className='fonte3'>
         Brasil, um sonho intenso, um raio vívido
         De amor e de esperança, à terra desce
         Se em teu formoso céu, risonho e límpido
         A imagem do Cruzeiro resplandece
         </p>
         <p className='fonte2'>
         Gigante pela própria natureza
         És belo, és forte, impávido colosso
         E o teu futuro espelha essa grandeza
         </p>
         <p className='fonte3'>
         Terra adorada
         Entre outras mil
         És tu, Brasil
         Ó, Pátria amada!
         Dos filhos deste solo, és mãe gentil
         Pátria amada
        Brasil!
        </p>
          
        </div>
        <img src="https://th.bing.com/th/id/OIP.avWx6zurTwFtYTuHW8SnwwHaFL?pid=ImgDetrs=1"></img>
        </div>
    );


    
}

export default Home; 