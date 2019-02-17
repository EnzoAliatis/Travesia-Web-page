import Layout from '../components/layout'

import SectionTravesia from '../components/SectionTravesia'
import SectionTuHotel from '../components/SectionTuHotel'
import SectionHabitaciones from '../components/SectionHabitaciones'
import SectionComponent from '../components/SectionComponent'
import {
  KITESURF_DATA,
  HABITACIONES_DATA,
  STA_MARIANITA_DATA,
  NOSOTROS_DATA,
  BLUE_PANEL_ONE_HOME,
  BLUE_PANEL_TWO_HOME,
  REVIEWS_DATA
} from '../data'

export default () => (
  <Layout>
    <SectionTravesia />
    <SectionTuHotel />
    <SectionHabitaciones />
    <SectionComponent
      title={KITESURF_DATA.title}
      description={KITESURF_DATA.description}
      btnTitle={KITESURF_DATA.btnTitle}
      imgUrl={KITESURF_DATA.imgUrl}
      direction={KITESURF_DATA.direction}
    />
    <SectionComponent
      title={HABITACIONES_DATA.title}
      description={HABITACIONES_DATA.description}
      btnTitle={HABITACIONES_DATA.btnTitle}
      imgUrl={HABITACIONES_DATA.imgUrl}
      direction={HABITACIONES_DATA.direction}
    />
    <SectionComponent
      title={STA_MARIANITA_DATA.title}
      description={STA_MARIANITA_DATA.description}
      btnTitle={STA_MARIANITA_DATA.btnTitle}
      imgUrl={STA_MARIANITA_DATA.imgUrl}
      direction={STA_MARIANITA_DATA.direction}

    />
    <SectionComponent
      title={NOSOTROS_DATA.title}
      description={NOSOTROS_DATA.description}
      btnTitle={NOSOTROS_DATA.btnTitle}
      imgUrl={NOSOTROS_DATA.imgUrl}
      direction={NOSOTROS_DATA.direction}
    />
  </Layout>
)
