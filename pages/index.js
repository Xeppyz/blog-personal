import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/never.jpg'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a nicaraguan guy just trying to survive in my own country!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alla Silva
          </Heading>
          <p>Junior developer ( analyst / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="  full"
            overflow="hidden"
          >
            <Image
              src="/images/profile2.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Allan is a analyst programmer and trying to be a full-stack developer,
          passion for building digital services/stuff he wants. He has a knack for quickly learning new things and being adaptable. When not online, he loves
          hanging out with his shawty. Currently, he is working at grupo Inversa/casavision as a junior developer.
          he works with flutter/dart, SQl server, c#, javascript, ASP.NET, and is continually improving his skills{' '}
          . you can find them on linkedIn &quot;
          <Link
            as={NextLink}
            href="https://www.linkedin.com/in/acamp0s/"
            passHref
            target="_blank"
          >
            Acampos
          </Link> 
          &quot; has one year like jr dev.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Managua (💀), Nicaragua.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          I hope completed my degree in computer science at (Universidad Nacional Casemiro Sotelo)
          
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          I started working at Invercasa/Casavisión (Grupo Inversa) as a junior developer
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          Sushi
          , Coffe{' '}       
          , Code, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Xeppyz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Xeppyz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://x.com/xeppyz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @xeppyz
              </Button>
            </Link>
          </ListItem>
      
        </List>

        <SimpleGrid columns={[1,2]} gap={6}>
          <GridItem
            
            title="Feliz pero no tanto"
            thumbnail={thumbYouTube}
          >
           
          </GridItem>
         
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Soon
        </Heading>
        <p>
          
        </p>

        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
