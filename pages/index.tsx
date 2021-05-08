import styles from '../styles/Layout.module.css'
import {PageHeader} from '../components/shared/PageHeader'
import {HeroSection} from './../components/HeroSection';


const Home = () => {  

  return (    

      <div className={styles.container}>
          <PageHeader>
              <title>Robots App</title>
          </PageHeader>
           <HeroSection />
         
      </div>    
  )
}

export default Home;