import React from 'react';
import {
	Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,
	DrawerBody, DrawerHeader, DrawerFooter, useDisclosure, Link
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


export const Contact = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button onClick={onOpen}>Contact Me</Button>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Contact Me </DrawerHeader>

					<DrawerBody>
                        <Button>
                            <Link href='tel+15417909725' isExternal>541.790.9725 <ExternalLinkIcon mx='2px' /></Link>
                        </Button>
                        <Button>
                            <Link href='mailto:aarondrichards98@gmail.com' isExternal>aarondrichards98@gmail.com <ExternalLinkIcon mx='2px' /></Link>
                        </Button>
					</DrawerBody>

					<DrawerFooter>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Contact;