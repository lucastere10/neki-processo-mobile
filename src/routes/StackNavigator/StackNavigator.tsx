import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screen/Login';
import { NavigationContainer } from "@react-navigation/native";
import { Register } from '../../screen/Register';

const AuthStack = createStackNavigator();

export function AuthStackScreen({ setAuth }) {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AuthStack.Screen name="Login">
                    {props => <Login {...props} setAuth={setAuth} />}
                </AuthStack.Screen>
                <AuthStack.Screen name="Register" component={Register} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}


