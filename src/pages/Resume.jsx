import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Resume = () => {
    return (
        <Box>
            <Heading mb={4}>Resume</Heading>

            <Heading size="md" mb={2}>Profile:</Heading>
            <Text mb={4}>Full Stack Developer with a focus on backend and database design/management.</Text>

            <Heading size="md" mb={2}>Education:</Heading>
            <Text mb={4}>Web Development FullStack Bootcamp, edX and University of Oregon, Jan 2023 - Jul 2023</Text>
            <Text mb={4}>Associate of Applied Science Computer Programming, Lane Community College, Eugene, OR Sep 2017 - April 2022</Text>
            <Text mb={6}>GPA 3.6, President's and Vice President's List, Certificates in Front End Web Development and Database Specialist</Text>

            <Heading size="md" mb={2}>Technical Skills:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>React.js</Text>
                    <Text>MERN Stack</Text>
                    <Text>Node.js</Text>
                    <Text>NoSQL</Text>
                    <Text>Object-Oriented Programming (OOP)</Text>
                    <Text>Express.js</Text>
                    <Text>C#, ASP.NET</Text>
                    <Text>SQL</Text>
                    <Text>Heroku</Text>
                    <Text>MongoDB</Text>
                    <Text>Agile Application Development</Text>
                    <Text>Debugging Code</Text>
            </SimpleGrid>

            <Heading size="md" mb={2}>Work Experience:</Heading>
            <Text mb={2}><b>Full Stack Developer, Oregon Criminal Defense Lawyers Association, Eugene, OR January 2022 - July 2022</b></Text>
            <Text mb={4}>Wrote several classes in PHP to transform data from salesforce into XML. Helped design and implement a search engine in PHP using SPHINX and the XML files generated previously from the classes originally worked on.</Text>
            <Text mb={2}><b>Full Stack Developer, Capstone Project for Hoodoo Ski Resort, Eugene, OR January 2021 - June 2021</b></Text>
            <Text mb={4}>Worked in a 3-man team to design and implement a new admin portal and store site in C# ASP.Net for Hoodoo using Jira as a management tool and wireframes to outline design. Implemented systems for admins to manage product info and change images on the website.</Text>

            <Heading size="md" mb={2}>Other Professional Experience:</Heading>
            <Text mb={4}>Personal Support Worker, Lane Case Management Provider, Eugene, OR June 2017 - Present</Text>
            
            <Heading size="md" mb={2}>Soft Skills:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>Critical Thinking</Text>
                    <Text>Communication</Text>
                    <Text>Collaboration</Text>
                    <Text>Time Management</Text>
                    <Text>Conflict Resolution and Management</Text>
                    <Text>Teamwork</Text>
            </SimpleGrid>
        </Box>
    );
};

export default Resume;