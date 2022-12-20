import React from 'react'
import { SimpleGrid,Card } from '@chakra-ui/react'
import BarChart from '../components/charts/BarChart'
import StackedChart from '../components/charts/StackedChart'
import PieChart from '../components/charts/PieChart'
import LineChart from '../components/charts/LineChart'

function Statistics() {
    return (
        <div>
            <SimpleGrid spacing='40px' p='6'>
                <Card display='flex' justifyContent='center' alignItems='center'><BarChart /></Card>
                <Card display='flex' justifyContent='center' alignItems='center'><StackedChart /></Card>
                <Card display='flex' justifyContent='center' alignItems='center'><PieChart /></Card>
                <Card display='flex' justifyContent='center' alignItems='center'><LineChart /></Card>
            </SimpleGrid>
        </div>
    )
}

export default Statistics
