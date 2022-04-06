import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import DevFinance from '../pages/DevFinance'
import despesas from '../mocks/despesas';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="DevFinance"
            component={DevFinance}
            options={{ headerShown: false }}
            {...despesas}
            />
        </Stack.Navigator>
    )
}