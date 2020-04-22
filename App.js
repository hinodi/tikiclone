import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const section_banner = require('./section_banner.png');
const item_image = require('./item_image.png');

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <View style={styles.sectionContainer}>
          {/*  */}
          <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
          {/*  */}
          <Image source={section_banner} style={styles.sectionImage} />
          {/*  */}
          <ScrollView horizontal={true}>
            <View style={styles.listItemContainer}>
              {/*  */}
              <View style={styles.itemContainer}>
                <Image source={item_image} style={styles.itemImage} />
                <Text style={styles.itemName} numberOfLines={2}>
                  Điện thoại Vsmart Bee(aaaaaaaaa)
                </Text>
                <Text style={styles.itemPrice}>699.000đ</Text>
              </View>
              {/*  */}
              <View style={styles.itemContainer}>
                <Image source={item_image} style={styles.itemImage} />
                <Text style={styles.itemName} numberOfLines={2}>
                  Điện thoại Vsmart Bee(aaaaaaaaa)
                </Text>
                <Text style={styles.itemPrice}>699.000đ</Text>
              </View>
              {/*  */}
              <View style={styles.itemContainer}>
                <Image source={item_image} style={styles.itemImage} />
                <Text style={styles.itemName} numberOfLines={2}>
                  Điện thoại Vsmart Bee(aaaaaaaaa)
                </Text>
                <Text style={styles.itemPrice}>699.000đ</Text>
              </View>
              <View style={styles.itemContainer}>
                <Image source={item_image} style={styles.itemImage} />
                <Text style={styles.itemName} numberOfLines={2}>
                  Điện thoại Vsmart Bee(aaaaaaaaa)
                </Text>
                <Text style={styles.itemPrice}>699.000đ</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  listItemContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
});

export default App;
