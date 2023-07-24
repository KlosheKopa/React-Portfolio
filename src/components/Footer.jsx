import React from 'react';
import { HStack, Box, Link, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Contact from './Contact';

const Footer = () => {
    return (
      <Box as="footer" mt="auto" bg=" #93cf00 " width="100%">
        <Box>
          <HStack spacing={4} justify="center" padding={2}>
            <Box fontSize='sm'>
            </Box>
            <Link href='https://github.com/KlosheKopa' isExternal target='blank'>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>
            {'   '}|{'    '}
            <Link href='https://www.linkedin.com/in/aaron-richards-17a29a250/' isExternal target='blank'>
              LinkedIn <ExternalLinkIcon mx='2px' />
            </Link>
            {'     '}|{'       '}
            <Contact />
          </HStack>
        </Box>
      </Box>
    )
  }
  export default Footer;