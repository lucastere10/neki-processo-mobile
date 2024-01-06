import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "../../screen/Profile";
import { Skills } from "../../screen/Skills";
import { ProfileSkills } from "../../screen/ProfileSkills";
import { Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Profile: undefined;
    Skills: undefined;
    ProfileSkills: undefined
}

export const TabRoutes = ({ setAuth }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#2D939C",
                        height: 75,
                    },
                }}>
                <Tab.Screen
                    name="Skills"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#F9D600"
                            }}>
                                <FontAwesome name="home" size={32} color={focused ? "#F9D600" : "#E7DCDA"} />
                            </View>
                        )
                    }}
                >
                    {() => <Skills />}
                </Tab.Screen>
                <Tab.Screen
                    name="ProfileSkills"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#F9D600"
                            }}>
                                <Entypo name="add-to-list" size={32} color={focused ? "#F9D600" : "#E7DCDA"} />
                            </View>
                        )
                    }}
                >
                    {() => <ProfileSkills />}
                </Tab.Screen>
                <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                height: 75,
                                width: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderTopWidth: focused ? 4 : 0,
                                borderTopColor: "#F9D600"
                            }}>
                                <Ionicons name="person" size={32} color={focused ? "#F9D600" : "#E7DCDA"} />
                            </View>
                        )
                    }}
                >
                    {() => <Profile setAuth={setAuth} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
} 