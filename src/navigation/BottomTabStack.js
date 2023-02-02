import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationName from '../contants/NavigationName';
import {Diary, Message, Payments, Pupils, Setting} from '../screens';
import {verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../contants/Color';
import {Image, StyleSheet} from 'react-native';
import Images from '../contants/Images';
const Tab = createBottomTabNavigator();
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
      }}>
      <Tab.Screen
        name={NavigationName.DIARY}
        component={Diary}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomDiaryActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image source={Images.BottomDiary} style={styles.imgInActive} />
              )}
            </>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={NavigationName.PUPILS}
        component={Pupils}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPupilsActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPupils}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={NavigationName.MESSAGE}
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomMessageActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomMessage}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={NavigationName.PAYMENT}
        component={Payments}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomPaymentActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomPayment}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={NavigationName.SETTING}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Image
                  source={Images.BottomSettingActive}
                  style={styles.imgActive}
                />
              ) : (
                <Image
                  source={Images.BottomSetting}
                  style={styles.imgInActive}
                />
              )}
            </>
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
const styles = StyleSheet.create({
  tab: {
    backgroundColor: Color.THEME_COLOR1,
    height: verticalScale(60),
    paddingTop: verticalScale(9),
    borderTopLeftRadius: verticalScale(15),
    borderTopRightRadius: verticalScale(15),
  },
  imgActive: {
    width: verticalScale(25),
    height: verticalScale(35),
    resizeMode: 'stretch',
  },
  imgInActive: {
    width: verticalScale(22),
    height: verticalScale(22),
    resizeMode: 'stretch',
  },
});
