import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/worka/logo_cv.jpg'
import thumbWalknote from '../public/images/worka/swagger.jpg'
import thumbFourPainters from '../public/images/worka/chatbot.png'
import thumbMenkiki from '../public/images/worka/snmp_levels.png'
import thumbMargelo from '../public/images/worka/herrameintasweb.png'
import thumbModeTokyo from '../public/images/worka/image.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/worka/pokemon-JS.png'
import thumbAmembo from '../public/images/worka/EYS_LOGIN.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="cvconnect" title="CVCONNECT" thumbnail={thumbInkdrop}>
            A flutter app that connects to a database and shows the information for clients and
             can be used to make aprovisioning of the services that the company offers to the clients like Krill and FTTH services
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Swagger-APIREST"
            thumbnail={thumbWalknote}
          >
            Make a swagger documentation for the API REST of the company and create a new method to get the information of the clients
             and the services that the company offers
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Chatbot"
            thumbnail={thumbFourPainters}
          >
            A  Python script that integrates SQL database queries with an AI-powered chatbot using the OpenAI GPT-3.5 Turbo model.
             The chatbot can respond to user queries by formulating SQL database queries, retrieving and presenting results, 
             and providing explanations or additional information in Spanish when necessary
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="SNMP-OIDS">
            An app that you can use to get the information of the network devices that are connected to the network by using the SNMP protocol

          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Herramientas-web">
            A website of casavision that i contribute to make the design and the functionality of the website with JS
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="EXPEDOC"
          >
            A plataform that we made when i was studying in the university that is a plataform that you can use to make the expedients of the docents of the university
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Room-manager">
            A flutter app that you can use to make the reservation of the rooms of the company
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="GYMCHECK">
            A  kotlin app that you can use to make the check-in of the clients of the gym
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Mokepon"
          >
            A javascript app that you can use to make battles of pokemons
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="SYSTEM ENTRY AND EXIT CONTROL ">
            A system that you can use to make the entry and exit control of the employees of the company
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
