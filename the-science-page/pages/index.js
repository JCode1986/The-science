import Head from 'next/head';
import Header from '../components/Header';
import Evidence from '../components/Evidence';
import Statistics from '../components/Statistics';
import Advisors from '../components/Advisors';
import Trials from '../components/Trials';
import Publications from '../components/Publications';
import Footer from '../components/Footer';

export default function Home() {
  return (
   <div>
      <Head>
        <title>Helio Liver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Header */}
      <Header />
      
      {/* Evidence */}
      <Evidence />
      
      {/* Statistics */}
      <Statistics />

      {/* Advisors */}
      <Advisors />
      
      {/* Trials */}
      <Trials />
      
      {/* Publications */}
      <Publications />
      
      {/* Footer */}
      <Footer/>
   </div>
  )
}
