import { useFavoritoContext } from 'Contextos/favoritos'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'

const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some(fav => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
                <Link to={`/${id}` } className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                </Link>
                <h2>{titulo}</h2>
                <img src={icone}
                    alt="Favoritar Filme"
                    className={styles.favoritar}
                    onClick={() => {
                        adicionarFavorito({ id, titulo, capa })
                    }} />
            </div>
    )
}


export default Card