import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DND Char Creater</title>
      </Head>

      <main>
        <p className="description">
        Tabletop fantasy gamers can easily lose track of their characters' names, classes, stats, skills, personalities, and background stories as their journey progresses. Now worry no more with the DND Character Creator!
        DND Character Creator is a web app that will allow users to keep track of multiple character sheets. Users can register and login. Once they're logged in, they can create or view their character sheets. For every sheet that they have, they can edit their character's names, classes, stats, skills, personalities, and background stories. The app will also calculate bonuses from items and embed them to stats. 
        </p>
      </main>

    </div>
  )
}
