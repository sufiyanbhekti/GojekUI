import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { sprite, box, bill, more, scooter, shopping, spoon, train, car } from '../../assets/Images';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <ProfileCircle color='green' variant='Bold' size={40} style={styles.profileIcon} />
        </View>
      </View>
      <ScrollView>
        <Image
          source={sprite}
          style={styles.image}
        />
        <Payment />
        <Main />
      </ScrollView>
    </View>
  )
}

const Payment = () => {
  return (
    <View style={payment.container}>
      <Wallet3 color='#00819F' variant='Bold' size={40} style={payment.wallet} />
      <View style={payment.debit}>
        <Text style={payment.saldo}>Rp10.000</Text>
        <Text style={payment.coin}>0 Coins</Text>
      </View>
      <View style={payment.pay} >
        <CardSend color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Bayar</Text>
      </View>
      <View style={payment.history}>
        <Clock color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Riwa...</Text>
      </View>
      <View style={payment.more}>
        <MoreCircle color='#00819F' variant='Bold' size={30} />
        <Text style={payment.payText}>Lainn...</Text>
      </View>
    </View>
  )
}

const Main = () => {
  return (
    <View style={home.container}>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={scooter}
            style={home.icon}
          />
          <Text style={home.goRideText}>GoRide</Text>
        </View>
        <View style={home.background}>
          <Image
            source={car}
            style={home.icon}
          />
          <Text style={home.goCarText}>GoCar</Text>
        </View>
        <View style={home.background}>
          <Image
            source={spoon}
            style={home.icon}
          />
          <Text style={home.goFoodText}>GoFood</Text>
        </View>
        <View style={home.background}>
          <Image
            source={box}
            style={home.icon}
          />
          <Text style={home.goSendText}>GoSend</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={shopping}
            style={home.icon}
          />
          <Text style={home.goMartText}>GoMart</Text>
        </View>
        <View style={home.background}>
          <Image
            source={bill}
            style={home.icon}
          />
          <Text style={home.goBillText}>GoTagihan</Text>
        </View>
        <View style={home.background}>
          <Image
            source={train}
            style={home.icon}
          />
          <Text style={home.goTransitText}>GoTransit</Text>
        </View>
        <View style={home.background}>
          <Image
            source={more}
            style={home.icon}
          />
          <Text style={home.goMoreText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
}

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 6,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40, // Add some margin to separate rows
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    marginHorizontal: 15,
  },
  icon: {
    top: 8,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  goRideText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goCarText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 5,
  },
  goFoodText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goSendText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMartText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    left: 3,
  },
  goBillText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
    // left: -10,
  },
  goTransitText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
  goMoreText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.black(),
    top: 12,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: 'auto',
    height: 150,
    objectFit: 'cover',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 320,
  },
})

const payment = StyleSheet.create({
  container: {
    top: -30,
    marginHorizontal: 20,
    width: 'auto',
    height: 60,
    backgroundColor: colors.white(),
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFF7F6',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10, // Meningkatkan nilai ini akan membuat bayangan lebih terlihat
    },
    shadowOpacity: 1, // Meningkatkan nilai ini akan membuat bayangan lebih tebal
    shadowRadius: 10, // Meningkatkan nilai ini akan membuat bayangan lebih menyebar
    elevation: 5, // Ini berlaku hanya untuk Android
  },
  wallet: {
    justifyContent: 'center',
    top: 8,
    left: 20,
  },
  saldo: {
    fontSize: 16,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  debit: {
    justifyContent: 'center',
    left: 25,
  },
  pay: {
    justifyContent: 'center',
    left: 60,
  },
  payText: {
    left: -5,
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  history: {
    justifyContent: 'center',
    left: 80,
  },
  more: {
    justifyContent: 'center',
    left: 90,
  },
});
