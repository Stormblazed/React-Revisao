const { default: Cabecalho } = require("Componentes/Cabecalho")
const { default: Container } = require("Componentes/Container")
const { default: Rodape } = require("Componentes/Rodape")
const { default: FavoritosProvider } = require("Contextos/favoritos")
const { Outlet } = require("react-router-dom")

const PaginaBase = () => {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase