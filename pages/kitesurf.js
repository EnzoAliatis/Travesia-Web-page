import Layout from '../components/layout'
import TitleAndBody from '../components/TitleAndBody'
import BluePanelButton from '../components/BluePanelButton'
import SectionComponent from '../components/SectionComponent'

import {
  KITESURF_PAGE,
  NOSOTROS_DATA,
  STA_MARIANITA_DATA,
  HABITACIONES_DATA,
  BLUE_PANEL_TWO_HOME
} from '../data'

export default () => (
  <Layout>
    <TitleAndBody
      title={KITESURF_PAGE.title}
      body={KITESURF_PAGE.body}
    />
    <SectionComponent
      title={NOSOTROS_DATA.title}
      description={NOSOTROS_DATA.description}
      btnTitle={NOSOTROS_DATA.btnTitle}
      imgUrl={NOSOTROS_DATA.imgUrl}
      direction={NOSOTROS_DATA.direction}
      sectionUrl={NOSOTROS_DATA.sectionUrl}

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
    <BluePanelButton
      title={BLUE_PANEL_TWO_HOME.title}
      btnTitle={BLUE_PANEL_TWO_HOME.btnTitle}
    />
  </Layout>
)
