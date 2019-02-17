import Layout from '../components/layout'
import SectionHabitaciones from '../components/SectionHabitaciones'
import BluePanelButton from '../components/BluePanelButton'
import SectionComponent from '../components/SectionComponent'
import SectionReview from '../components/SectionReview'
import SectionQuestion from '../components/SectionQuestion'

import {
  KITESURF_DATA,
  STA_MARIANITA_DATA,
  BLUE_PANEL_ONE_HOME,
  REVIEWS_DATA_TWO
} from '../data'

export default () => (
  <Layout>
    <SectionHabitaciones />
    <BluePanelButton
      title={BLUE_PANEL_ONE_HOME.title}
      btnTitle={BLUE_PANEL_ONE_HOME.btnTitle}
    />
    <SectionComponent
      title={STA_MARIANITA_DATA.title}
      description={STA_MARIANITA_DATA.description}
      btnTitle={STA_MARIANITA_DATA.btnTitle}
      imgUrl={STA_MARIANITA_DATA.imgUrl}
      direction={STA_MARIANITA_DATA.direction}
    />
    <SectionComponent
      title={KITESURF_DATA.title}
      description={KITESURF_DATA.description}
      btnTitle={KITESURF_DATA.btnTitle}
      imgUrl={KITESURF_DATA.imgUrl}
      direction={KITESURF_DATA.direction}
    />
    <SectionReview data={REVIEWS_DATA_TWO} />
    <SectionQuestion />
  </Layout>
)
