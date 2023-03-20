import '@/styles/globals.css'
import { ProyectosProvider } from '@/context/ProyectoProvider'

export default function App({ Component, pageProps }) {
  return (
    <ProyectosProvider>
      <Component {...pageProps} />
    </ProyectosProvider>
    )
}
