import React from 'react';
import { Link } from 'react-router-dom';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@chakra-ui/react';

const Navigation = () => {
	return (
		<Breadcrumb separator='-' color=' #a0d86e' fontSize='xl'>
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link to="/">About</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link to="/portfolio">Portfolio</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>
						<Link to="/resume">Resume</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Breadcrumb>
	);
};



export default Navigation;