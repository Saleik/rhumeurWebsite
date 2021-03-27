import { Nav } from './components/nav/Nav';
import { GlobalStyle } from "./styles/globalStyles";
import { useData } from './hooks/dataContext';
import { Accueil } from './views/Accueil';
import { Fabrication } from './views/Fabrication';
import { BestSellers } from './views/BestSellers';
import { QuiSommesNous } from './views/QuiSommesNous';
import { Contact } from './views/Contact';

function App() {
  const {
    isLoading,
    error
  } = useData();

  return (<>
    <GlobalStyle />
    {
      isLoading ? (
        <h1> Chargement... </h1>
      ) :
        error !== null ? (
          <h1> ERREUR LORS DU CHARGEMENT DES DONNÉES</h1 >
        ) : (
          <>
            <Nav items={
              {
                'Accueil': 'accueil',
                'Fabrication': 'fabrication',
                'Best Sellers': 'bestSellers',
                'Qui sommes-nous ?': 'quiSommesNous',
                'Contact': 'contact'
              }
            }
            />
            <main>
              <Accueil />
              <Fabrication />
              <BestSellers />
              <QuiSommesNous />
              <Contact />
            </main>
          </>
        )
    } </>
  );
}

export default App;