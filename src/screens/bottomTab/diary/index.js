import {
  View,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Text} from 'react-native-paper';
import styles from './style';
import Color from '../../../contants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DiaryCard} from '../../../components';
const dateConstants = [
  {
    name: 'Mon',
    date: '12',
  },
  {
    name: 'Tue',
    date: '13',
  },
  {
    name: 'Wed',
    date: '14',
  },
  {
    name: 'Thu',
    date: '15',
  },
  {
    name: 'Fri',
    date: '16',
  },
  {
    name: 'Sat',
    date: '17',
  },
  {
    name: 'Sun',
    date: '18',
  },
];
const diaryData = [
  {
    time: '1:30',
    name: 'Finn Bates',
    timing: '09:00-10:30',
    pu: 'Paid',
    color: 'blue',
  },
  {
    time: '5:30',
    name: 'Lesson Gap',
    timing: '10:30-12:00',
    pu: 'Unpaid',
    color: 'orange',
  },
  {
    time: '10:30',
    name: 'Megan Randle',
    timing: '14:00-15:30',
    pu: 'Paid',
    color: 'red',
  },
  {
    time: '8:30',
    name: 'Finn Bates ',
    timing: '05:30-16:30',
    pu: 'Paid',
    color: 'green',
  },
  {
    time: '1:30',
    name: 'Finn Bates',
    timing: '09:00-10:30',
    pu: 'Paid',
    color: 'blue',
  },
  {
    time: '5:30',
    name: 'Lesson Gap',
    timing: '10:30-12:00',
    pu: 'Unpaid',
    color: 'orange',
  },
  {
    time: '10:30',
    name: 'Megan Randle',
    timing: '14:00-15:30',
    pu: 'Paid',
    color: 'red',
  },
  {
    time: '8:30',
    name: 'Finn Bates ',
    timing: '05:30-16:30',
    pu: 'Paid',
    color: 'green',
  },
];

const Diary = () => {
  const [state, setState] = useState({
    index: 2,
  });
  const handleOnPressDate = i => {
    console.log(i);
    setState({...state, index: i});
  };
  const renderItem = useCallback(
    ({item, index}) => (
      <TouchableOpacity
        onPress={() => handleOnPressDate(index)}
        style={[
          styles.dateCard,
          index === state.index ? {backgroundColor: Color.WHITE} : null,
        ]}>
        <Text
          style={[
            styles.dateCard_text1,
            index === state.index ? {color: '#65398A'} : null,
          ]}>
          {item?.name}
        </Text>
        <Text
          style={[
            styles.dateCard_text2,
            index === state.index ? {color: '#65398A'} : null,
          ]}>
          {item?.date}
        </Text>
      </TouchableOpacity>
    ),
    [state.index],
  );

  return (
    <>
      <StatusBar backgroundColor={Color.THEME_COLOR1} />
      <View style={styles.root}>
        {/* header */}
        <View style={styles.header_cont}>
          <View />
          <Text style={styles.titleText}>Diary</Text>
          {/* icon container */}
          <View style={styles.icon_cont}>
            <AntDesign
              style={[styles.icon_st, styles.icon_1]}
              name="calendar"
            />
            <Ionicons style={styles.icon_st} name="help-circle-outline" />
          </View>
          {/* Date Text */}
        </View>
        <Text style={styles.date_text}>September, 2022</Text>
        {/* date FlatList */}
        <FlatList
          contentContainerStyle={styles.dateFlat_root}
          data={dateConstants}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        {/* Bottom Screen */}
        <View style={styles.bottomView}>
          <ScrollView contentContainerStyle={styles.bottomScroll_container}>
            <Text style={styles.today_text}>Today</Text>
            {diaryData.map((item, index) => (
              <View key={index}>
                <DiaryCard
                  color={item.color}
                  name={item.name}
                  pu={item.pu}
                  time={item.time}
                  timing={item.timing}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Diary;
