import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import {PageHeader} from '../components/shared/PageHeader'

const Home = () => {

  return (
    <div className={styles.container}>
      <PageHeader>
        <title>Robots App</title>
      </PageHeader>
      <h2>Welcome to cryptocurrency</h2>
    </div>
  )
}

export default Home;