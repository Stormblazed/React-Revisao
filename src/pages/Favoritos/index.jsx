import Banner from 'Componentes/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'Componentes/Titulo'
import Card from 'Componentes/Card'
import { useFavoritoContext } from 'Contextos/favoritos'

const Favoritos = () => {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favorios</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>)
}

export default Favoritos
