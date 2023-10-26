import { Inter } from 'next/font/google'
import EQbeats from '@/Components/eqBeats'
import Slider from '@/Components/slider'
import Silder2 from '@/Components/slider2'
import Text2Message from '@/Components/text2'
import OpenVacanciesSection from '@/Components/vacancies'
import Slider3 from '@/Components/slider3'
import Footer from '@/Components/footer'
import AnimationOne from '@/Components/animationOne'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <AnimationOne/>
     <EQbeats/>
     
     <Slider/>
     <Silder2/>
     <Text2Message/>
     
     <Slider3/>
     <OpenVacanciesSection/>
     <Footer/>
    </>
  )
}
