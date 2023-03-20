import Header from '@/componentes/Header'
import SobreMi from '@/componentes/SobreMi'
import Spinner from '@/componentes/Spinner'
import Footer from '@/componentes/Footer'
import useProyectosProvider from '@/hooks/useProyectoProvider'
import Trabajos from '@/componentes/Trabajos'

export default function Layout() {

    const { cargando } = useProyectosProvider()

    return (
        <>
            <Header />
            {cargando ? <Spinner /> : (
                <>
                    <main>
                        <SobreMi />
                        <Trabajos />
                    </main>
                    <Footer />
                </>
            )}
        </>
    )
}
