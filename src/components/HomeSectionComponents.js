import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({image, name, price}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      {/*  */}
      <Image source={section_banner} style={styles.sectionImage} />
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {/*  */}
          <View style={styles.filterActiveButtonContainer}>
            <Text style={styles.filterActiveText}>Tất cả</Text>
          </View>
          {/*  */}
          <View style={styles.filterInactiveButtonContainer}>
            <Text style={styles.filterInactiveText}>Điện thoại SmartPhone</Text>
          </View>
          {/*  */}
          <View style={styles.filterInactiveButtonContainer}>
            <Text style={styles.filterInactiveText}>Máy tính bảng</Text>
          </View>
          {/*  */}
          <View style={styles.filterInactiveButtonContainer}>
            <Text style={styles.filterInactiveText}>Điện thoại</Text>
          </View>
        </View>
      </ScrollView>
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {/*  */}
          <View>
            <ProductItem
              name="Điện thoại Vsmart Bee (Smart Bee)"
              image={item_image_1}
              price="699.000đ"
            />
            <ProductItem
              name="Điện thoại Vsmart Joy 2 Vsmart Joy 2"
              image={item_image_2}
              price="699.000đ"
            />
          </View>
          {/*  */}
          <View>
            <ProductItem
              name="Điện thoại Vsmart Star - Vsmart Star"
              image={item_image_3}
              price="699.000đ"
            />
            <ProductItem
              name="Điện thoại Vsmart Live Vsmart Live"
              image={item_image_3}
              price="699.000đ"
            />
          </View>
          {/*  */}
          <View>
            <ProductItem
              name="Điện thoại Vsmart Bee(aaaaaaaaa)"
              image={item_image_4}
              price="699.000đ"
            />
            <ProductItem
              name="Điện thoại Vsmart Joy 3 Vsmart Joy"
              image={item_image_1}
              price="699.000đ"
            />
          </View>
          {/*  */}
          <View>
            <ProductItem
              name="Điện thoại Vsmart Bee (Smart Bee)"
              image={item_image_1}
              price="699.000đ"
            />
            <ProductItem
              name="Điện thoại Vsmart Joy 2 Vsmart Joy 2"
              image={item_image_2}
              price="699.000đ"
            />
          </View>
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM ></Text>
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
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
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
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
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
