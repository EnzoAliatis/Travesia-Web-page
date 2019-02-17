import Layout from '../components/layout'
import TitleAndBody from '../components/TitleAndBody'
import { HOTEL_PAGE, HOTEL_SERVICES, BLUE_PANEL_ONE_HOME, REVIEWS_DATA } from '../data'

import SectionServices from '../components/SectionService'
import BluePanelButton from '../components/BluePanelButton'
import SectionQuestion from '../components/SectionQuestion'
import SectionReview from '../components/SectionReview'

export default () => (
  <Layout>
    <TitleAndBody
      title={HOTEL_PAGE.title}
      body={HOTEL_PAGE.body}
    />
    <SectionServices data={HOTEL_SERVICES} />
    <BluePanelButton
      title={BLUE_PANEL_ONE_HOME.title}
      btnTitle={BLUE_PANEL_ONE_HOME.btnTitle}
    />
    <SectionQuestion />
    <SectionReview data={REVIEWS_DATA} />
  </Layout>
)
