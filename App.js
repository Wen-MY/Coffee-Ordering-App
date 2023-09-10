import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import AddBalanceScreen from './screens/AddBalanceScreen'
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import TermAndConditionsScreen from './screens/TermsAndConditions';
import CoffeeDetailScreen from './screens/CoffeeDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ChangePassword from './screens/ChangePasswordScreen';
import ChangeUsername from './screens/ChangeUsernameScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import PaymentScreen from './screens/PaymentScreen'; // Import your PaymentScreen component
import DatabaseInitialization from './components/DatabaseInitialization'; 
import SuccessOrderScreen from './screens/SuccessOrderScreen'; // Replace with the correct path to your SuccessOrderScreen component


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground 
        source={require('./assets/otherImg/background.jpg')}
        style={{width: undefined, padding: 16, paddingTop: 48}}
      >
        <Avatar.Image
          source={require('./assets/otherImg/user.png')} // Replace with your image source
          size={70}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>hello</Text>
        </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const handleSignOut = () => {

  AsyncStorage.removeItem('userToken')
      .then(() => {
          // Update the loggedIn state to false
          setLoggedIn(false);

          navigation.navigate('LoginStack');
      })
      .catch((error) => {
          console.error('Sign-out error:', error);

      });
      try {
        // Define the keys you want to remove
        const keysToRemove = ['balance', 'email', 'id', 'password', 'username'];
        // Use multiRemove to remove values for the specified keys
        AsyncStorage.multiRemove(keysToRemove);
      } catch (error) {
        console.error('Error removing user data:', error);
      }
};

const SettingStack = () => (
  <Stack.Navigator initialRouteName='SettingsStackHome'>
    <Stack.Screen name="SettingsStackHome" component={SettingScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Change Username" component={ChangeUsername} />
    <Stack.Screen name="Change Password" component={ChangePassword} />
  </Stack.Navigator>
);
const HomeStack = () => (
  <Stack.Navigator initialRouteName='HomeStackHome'>
    <Stack.Screen name="HomeStackHome" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="AddBalance" component={AddBalanceScreen} options={{headerTitle: 'Top Up Balance'}}/>
    
  </Stack.Navigator>
);
const MenuStack = () => (
  <Stack.Navigator initialRouteName='MenuStackHome'>
    <Stack.Screen name="MenuStackHome" component={MenuScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Coffee" component={CoffeeDetailScreen} />
    
  </Stack.Navigator>
);
const CartStack = () => (
  <Stack.Navigator initialRouteName='Shopping Cart'>
    <Stack.Screen name="Shopping Cart" component={CartScreen}/>
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    <Stack.Screen name="SuccessOrderScreen" component={SuccessOrderScreen} options={{headerTitle:''}}/>
  </Stack.Navigator>
);
const OrderStack = () => (
  <Stack.Navigator initialRouteName='OrderHistoryScreen'>
    <Stack.Screen name="My Orders" component={OrderHistoryScreen}/>
    <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
  </Stack.Navigator>
);


const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginStackHome'>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name ="Home" component={AppDrawerStack} options={{headerShown:false}}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerTitle:false}}/>
    </Stack.Navigator>
  );
}

function AppBottomStack() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#0f4c81',
        tabBarLabelStyle: {
          fontSize: 22,
        },
        tabBarStyle: {
          backgroundColor: 'lightgrey',
          borderRadius: 50,
        },
        tabBarHideOnKeyboard: true,
        
      }}
    >
      {/* Your Tab Screens */}
      <Tab.Screen
      name = 'Home'
      component = {HomeStack}
      options={{/*
        tabBarIcon: () => {
          return <FontAwesomeIcon icon="fa-sharp fa-regular fa-house-blank" size={20}/>
        }*/
        headerShown:false,
        }
      }
      />
    <Tab.Screen
      name = 'Menu'
      component = {MenuStack}
      options={{/*
        tabBarIcon: () => {
          return <FontAwesomeIcon icon="fa-regular fa-mug-hot" size={20}/>
        }*/
        headerShown:false
        }
      }
      />
       <Tab.Screen
      name = 'Cart'
      component = {CartStack}
      options={{/*
        tabBarIcon: () => {
          return <FontAwesomeIcon icon="fa-regular fa-cart-shopping" size={20}/>
        }*/
        headerShown:false
        }
      }
      />
      <Tab.Screen
      name = 'Order'
      component = {OrderStack}
      options={{/*
        tabBarIcon: () => {
          return <FontAwesomeIcon icon="fa-regular fa-user" size={20}/>
        }*/
        }
      }
      />
  </Tab.Navigator>
  );
}

function AppDrawerStack() {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: '45%', backgroundColor: 'purple' }}
      drawerType="slide"
      overlayColor="transparent"
      screenOptions={{
        drawerActiveTintColor: 'darkslateblue',
        drawerActiveBackgroundColor: 'skyblue',
      }}
      drawerContent={CustomDrawerContent}
    >
      {/* Your Drawer Screens */}
      <Drawer.Screen name ='Home Screen' component={AppBottomStack} options={{headerShown: false}}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingStack} />
      <Drawer.Screen name="Sign Out" component={LoginStack} options={{ swipeEnabled: false, headerShown: false, drawerLabel: 'Sign Out',
        onPress: handleSignOut,}}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Initially not logged in
  
  useEffect(() => {
    // Check if the user is logged in using AsyncStorage
    AsyncStorage.getItem('userToken')
      .then((userToken) => {
        if (!userToken) {
          // User is logged in
          setLoggedIn(true);
        } else {
          // User is not logged in
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error('AsyncStorage error:', error);
      });
  }, []);

  const dbInit = new DatabaseInitialization();
  dbInit._initializeDatabase();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  profileImage: {
    marginRight: 15,
    borderColor: "#FFF"
  },
  userName: {
    fontSize: 18,
    color: 'white',
  },
});