import Layout from '../components/layout'
import TitleAndBody from '../components/TitleAndBody'
import {
  LOUNGE_BAR,
  BLUE_PANEL_TWO_HOME,
  STA_MARIANITA_DATA,
  HABITACIONES_DATA,
  KITESURF_DATA
} from '../data'
import BluePanelButton from '../components/BluePanelButton'
import SectionComponent from '../components/SectionComponent'
import SectionQuestion from '../components/SectionQuestion'

export default () => (
  <Layout>
    <TitleAndBody
      title={LOUNGE_BAR.title}
      body={LOUNGE_BAR.body}
    />
    <BluePanelButton
      title={BLUE_PANEL_TWO_HOME.title}
      btnTitle={BLUE_PANEL_TWO_HOME.btnTitle}
    />
    <SectionComponent
      title={STA_MARIANITA_DATA.title}
      description={STA_MARIANITA_DATA.description}
      btnTitle={STA_MARIANITA_DATA.btnTitle}
      imgUrl={STA_MARIANITA_DATA.imgUrl}
      direction={STA_MARIANITA_DATA.direction}
      sectionUrl={STA_MARIANITA_DATA.sectionUrl}
    />
    <SectionComponent
      title={HABITACIONES_DATA.title}
      description={HABITACIONES_DATA.description}
      btnTitle={HABITACIONES_DATA.btnTitle}
      imgUrl={HABITACIONES_DATA.imgUrl}
      direction={HABITACIONES_DATA.direction}
      sectionUrl={HABITACIONES_DATA.sectionUrl}
    />
    <SectionComponent
      title={KITESURF_DATA.title}
      description={KITESURF_DATA.description}
      btnTitle={KITESURF_DATA.btnTitle}
      imgUrl={KITESURF_DATA.imgUrl}
      direction={KITESURF_DATA.direction}
      sectionUrl={KITESURF_DATA.sectionUrl}
    />
    <SectionQuestion />
  </Layout>
)
