import Banner from 'Componentes/Banner'
import styles from './Player.module.css'
import Titulo from 'Componentes/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'

const Player = () => {
    const parametros = useParams();
    const [video, setVideo] = useState([])
    

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Stormblazed/react-revisao-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    
    if(!video){
        return <NaoEncontrada />
    }

    console.table(video)
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>

    )
}

export default Player