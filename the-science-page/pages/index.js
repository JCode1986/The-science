import Head from 'next/head';
import Header from '../components/Header/Header.js';
import Evidence from '../components/Evidence/Evidence.js';
import Statistics from '../components/Statistics/Statistics.js';
import Advisors from '../components/Advisors/Advisors.js';
import Trials from '../components/Trials/Trials.js';
import Publications from '../components/Publications/Publications.js';
import Footer from '../components/Footer/Footer.js';

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
      {/* <Trials /> */}
      
      {/* Publications */}
      {/* <Publications /> */}
      
      {/* Footer */}
      {/* <Footer/> */}
   </div>
  )
}
