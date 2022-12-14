import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import IntroSection, { BottomSection } from '../Header/IntroSection'
import Navigation, { MobileMenu } from '../Header/Navigation'
import PageFooter from '../Sections/Footer'


export default function HomePage() {
    return (
        <Box>
           <Navigation />
           <MobileMenu />
           <IntroSection />
           <BottomSection />
           <PageFooter />
        </Box>
    )
}