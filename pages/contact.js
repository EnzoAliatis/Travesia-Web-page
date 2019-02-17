import Layout from '../components/layout'
import TitleAndBody from '../components/TitleAndBody'
import SectionQuestion from '../components/SectionQuestion'
import BluePanelButton from '../components/BluePanelButton'

import {
  BLUE_PANEL_TWO_HOME,
  CONTACTOS
} from '../data'

export default () => (
  <Layout>
    <TitleAndBody
      title={CONTACTOS.title}
      body={CONTACTOS.body}
    />
    <SectionQuestion />
    <BluePanelButton
      title={BLUE_PANEL_TWO_HOME.title}
      btnTitle={BLUE_PANEL_TWO_HOME.btnTitle}
    />
  </Layout>
)
