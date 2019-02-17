import Layout from '../components/layout'
import TitleAndBody from '../components/TitleAndBody'
import {
  STA_MARIANITA,
  KITESURF_DATA,
  HABITACIONES_DATA,
  NOSOTROS_DATA,
  BLUE_PANEL_ONE_HOME
} from '../data'
import SectionComponent from '../components/SectionComponent'
import BluePanelButton from '../components/BluePanelButton'
export default () => (
  <Layout>
    <TitleAndBody
      title={STA_MARIANITA.title}
      body={STA_MARIANITA.body}
    />
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
      title={NOSOTROS_DATA.title}
      description={NOSOTROS_DATA.description}
      btnTitle={NOSOTROS_DATA.btnTitle}
      imgUrl={NOSOTROS_DATA.imgUrl}
      direction={NOSOTROS_DATA.direction}
    />
    <BluePanelButton
      title={BLUE_PANEL_ONE_HOME.title}
      btnTitle={BLUE_PANEL_ONE_HOME.btnTitle}
    />
  </Layout>
)
