import { Card, CardBody, Image, HStack, Text, Collapse, Flex, Button as ChakraButton,  Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

const Button = (props) => {
	return <ChakraButton px={.5} size='sm' variant='link' colorScheme="teal" {...props} />
};

const Project = ({ title, image, deployedUrl, repoUrl, description }) => {
	console.log('Project is rendering', title);
	const [show, setShow] = React.useState(false);

	const handleToggle = () => setShow(!show);
	const [isSmallerThan426] = useMediaQuery("(max-width: 767px)");

	return (
		<Card
			overflow='hidden'
			variant='filled'
			borderRadius='lg'
			borderWidth={3}
      borderColor={' #73613b '}
      >
				<Flex direction={isSmallerThan426 ? 'column' : 'row'} >
					<Image boxSize={isSmallerThan426 ? '345px' : '200px'} 
					objectFit='fit' 
					src={image}
					alt={title}
						/>
					<CardBody>
						<Heading size='md' noOfLines={1}>{title}</Heading>
						<Collapse startingHeight={100} in={show}>
							<Text>{description}</Text>
						</Collapse>
						<HStack spacing={4} >
							<Button size='sm' onClick={handleToggle} mt='1rem'>
								Show {show ? 'Less' : 'More'}
							</Button>
							<Button size='sm' mt='1rem'>
								<Link href={repoUrl} isExternal target='blank'>Repo <ExternalLinkIcon mx='2px' /></Link>
							</Button>
							{deployedUrl
								? <Button as='a' size='sm' mt='1rem' href={deployedUrl} isExternal>
									<Link href={deployedUrl} isExternal target='blank'>Deployed <ExternalLinkIcon mx='2px' /></Link>
								</Button>
								: <span> </span>
		 					}
						</HStack>
					</CardBody>
				</Flex>
		</Card >
	);
};

export default Project;