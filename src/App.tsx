import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import { Button } from 'react-native';

import LandingScreen from './screens/Landing';
import Profile from './screens/Profile';
import PasswordForgetScreen from './screens/PasswordForget';
import PasswordChangeScreen from './screens/PasswordChange';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';

import auth from '@react-native-firebase/auth';
declare const global: {HermesInternal: null | {}};


const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Password Forget" component={PasswordForgetScreen} />
      <Drawer.Screen name="Password Change" component={PasswordChangeScreen} />
    </Drawer.Navigator>
  );
};

// APP NAVIGATION
// -- DRAWER NAV - with left drawer. Home (Trips) / Profile / About / generic links
// -- -- Home(Trips) has a list of trips, which you can click on and launch a stack nav to the trip page
// -- -- Each TRIP page has TAB navigator, with all the main app features
// -- -- -- Phrases / Currency / Checklist

const RootStack = createStackNavigator();

const App = () => {
  // const user = auth().currentUser;

  // if (!user) {
  //   return <Text>Please login now!</Text>;
  // }

  // return <Text>Welcome! {user.email}</Text>;

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism

    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {/* <RootStack.Navigator initialRouteName="Home">  */}
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Screen
            name="Home"
            component={HomeDrawer}
            options={({route, navigation}) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                />
              ),
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
            })}
          />
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                title: 'Landing title',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                animationTypeForReplace: 'pop',
              }}
            />
            {/* <RootStack.Screen name="Sign In" component={SignInScreen} /> */}
            <RootStack.Screen name="Sign In">
              {(props) => <SignInScreen {...props} onSignIn={handleSignIn} />}
            </RootStack.Screen>
            <RootStack.Screen name="Sign Up">
              {(props) => <SignUpScreen {...props} onSignIn={handleSignUp} />}
            </RootStack.Screen>
            <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

// const App = () => {
//   const user = auth().currentUser;
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.tsx</Text> to change
//                 this screen and then come back to see your edits.
//                 TrippinMobile CI test!
//               </Text>
//               <Text>Welcome {user.email}</Text>;
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

export default App;
