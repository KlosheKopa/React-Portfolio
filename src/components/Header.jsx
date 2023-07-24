import React from 'react';
import Navigation from './Navigation';
import { Box, Heading, Text, Flex, Spacer , Center} from '@chakra-ui/react';

const Header = () => {
	return (
		<Flex as="header" bg={'#7e6b4d'} width="100%" boxShadow='2xl' pt={1}>
			<Box align="left" textAlign="center">
				<Heading fontSize='6xl' >Aaron Richards</Heading>
				<Text as='sup' fontSize='2xl' color='#dabb6a' >Junior Web Developer</Text>
			</Box>
			<Spacer/>
			<Center align="right" textAlign="center" pr="2%">
				<Navigation fontSize='3xl'/>
			</Center>
		</Flex>
	);
};

export default Header;