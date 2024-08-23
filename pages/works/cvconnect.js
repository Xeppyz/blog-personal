import {
  Container,
  Badge,

  List,
  ListItem,

} from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CVConnect">
    <Container>
      <Title>
        CVCONNECT <Badge>2024--</Badge>
      </Title>
      <P>
        A flutter app that connects to a database SQL server, and shows the information for clients and Orders technical services.
        The app can be used to make aprovisioning of the services that the company offers to the clients like Krill and FTTH services
        consume the API REST of the company and methods by krill and FTTH services.
      </P>
      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter/dart, sql server, c#, IIS</span>
        </ListItem>
        <ListItem>
          <Meta>feature</Meta>
         <span>view orders technical, aprovisioning, view OID by snmp, tracking map and more </span>
        </ListItem>
      </List>
      <WorkImage src="/images/worka/cv_niveles.jpg" alt="CVCONNECT" />
      <WorkImage src="/images/worka/cv_orders.jpg" alt="CVCONNECT" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
