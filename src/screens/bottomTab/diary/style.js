import {StyleSheet} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Color from '../../../contants/Color';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.THEME_COLOR1,
  },
  header_cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    width: '100%',
  },
  titleText: {
    color: Color.WHITE,
    fontSize: scale(18),
    marginLeft: moderateScale(10),
  },

  icon_cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_st: {
    color: '#fff',
    fontSize: scale(22),
  },
  icon_1: {
    marginRight: moderateScale(10),
  },

  date_text: {
    color: Color.WHITE,
    fontSize: scale(20),
    paddingHorizontal: moderateScale(20),
    fontWeight: '600',
    marginVertical: verticalScale(10),
  },
  dateFlat_root: {
    height: verticalScale(60),
    paddingHorizontal: moderateScale(10),
  },
  dateCard: {
    backgroundColor: Color.THEME_COLOR1_LIGHT,
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
  },
  dateCard_text1: {
    color: '#fff',
    fontWeight: '300',
  },
  dateCard_text2: {
    color: '#fff',
    fontWeight: '600',
  },
  bottomView: {
    backgroundColor: Color.WHITE,
    height: verticalScale(480),
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
  today_text: {
    color: Color.THEME_TEXT,
    fontSize: scale(16),
    fontWeight: '600',
    marginVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
  },
  bottomScroll_container: {
    paddingBottom: moderateScale(50),
  },
});
export default styles;
