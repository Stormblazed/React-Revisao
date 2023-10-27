import styles from './Inicio.module.css'
import Banner from 'Componentes/Banner'
import Titulo from 'Componentes/Titulo'
import Card from 'Componentes/Card'
import videos from 'json/db.json'

const Inicio = () => {
    
    return(
        <>
            <Banner imagem="home" />
            <Titulo ><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <section className={styles.container}>
                {videos.map(video => <Card {...video} key={video.id}/>)}
            </section>                        
        </>
    )    
}

export default Inicio