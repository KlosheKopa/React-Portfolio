import React from 'react';
import { Heading, Image, Box, Container, HStack, VStack, Text } from '@chakra-ui/react';
import Aaron from '../assets/personal_picture.jpg';

const About = () => {
    return (
        <>
          <HStack>
            <Container align={'end'}>
              <VStack >
                <Box boxSize='150px'>
                  <Image
                  borderRadius={'3xl'}
                  src={Aaron}
                  alt='Mo the Developer'
                />
                </Box>
    
                <Heading as="h1" size={'3xl'}  >
                  About Me
                </Heading>
              </VStack>
            </Container>
            <Container >
              <Text fontSize={'md'}  p={2}>
              I am an aspiring web developer and programming enthusiast. For most of my life, I've had a passion for computers and technology, both on the hardware side through building personal computers and software side by writing code. Most of my work has been done in C# ASP.NET and PHP, although I learned php on the job and am getting back into JavaScript. For the past 3 years I learned various coding languages and principles at Lane Community College and interned for 6 months at OCDLA for their web development team while working as a full-time caregiver to a young man with Autism and participating in the Boy Scouts of America. I'm now going through a web development bootcamp to hone more of JavaScript skills and to become better at the front end aspect of web development.
              </Text>
            </Container>
          </HStack>
        </>
      );
};

export default About;