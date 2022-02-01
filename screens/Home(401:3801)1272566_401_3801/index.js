import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_401_3802}>
        <View style={styles.View_401_3803}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9379/c951/e41957cf731c57432f217c7dadf76ac5"
            }}
            style={styles.ImageBackground_I401_3803_81_741}
          />
          <View style={styles.View_I401_3803_81_742}>
            <View style={styles.View_I401_3803_81_743}>
              <View style={styles.View_I401_3803_81_744}>
                <Text style={styles.Text_I401_3803_81_744}>Nova Americano</Text>
              </View>
            </View>
            <View style={styles.View_I401_3803_81_745}>
              <View style={styles.View_I401_3803_81_746}>
                <Text style={styles.Text_I401_3803_81_746}>$ 4.99</Text>
              </View>
              <View style={styles.View_I401_3803_81_747}>
                <View style={styles.View_I401_3803_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3803_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_3804}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9379/c951/e41957cf731c57432f217c7dadf76ac5"
            }}
            style={styles.ImageBackground_I401_3804_81_741}
          />
          <View style={styles.View_I401_3804_81_742}>
            <View style={styles.View_I401_3804_81_743}>
              <View style={styles.View_I401_3804_81_744}>
                <Text style={styles.Text_I401_3804_81_744}>Nova Americano</Text>
              </View>
            </View>
            <View style={styles.View_I401_3804_81_745}>
              <View style={styles.View_I401_3804_81_746}>
                <Text style={styles.Text_I401_3804_81_746}>$ 4.99</Text>
              </View>
              <View style={styles.View_I401_3804_81_747}>
                <View style={styles.View_I401_3804_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3804_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_3805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/174b/3306/8f6d1386a67780f1454b3231eaaceca7"
            }}
            style={styles.ImageBackground_I401_3805_81_741}
          />
          <View style={styles.View_I401_3805_81_742}>
            <View style={styles.View_I401_3805_81_743}>
              <View style={styles.View_I401_3805_81_744}>
                <Text style={styles.Text_I401_3805_81_744}>
                  Peppermint Mocha
                </Text>
              </View>
            </View>
            <View style={styles.View_I401_3805_81_745}>
              <View style={styles.View_I401_3805_81_746}>
                <Text style={styles.Text_I401_3805_81_746}>$ 6.99</Text>
              </View>
              <View style={styles.View_I401_3805_81_747}>
                <View style={styles.View_I401_3805_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3805_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_3806}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/858b/366b/f4c3e34959a26df494534563eab28941"
            }}
            style={styles.ImageBackground_I401_3806_81_741}
          />
          <View style={styles.View_I401_3806_81_742}>
            <View style={styles.View_I401_3806_81_743}>
              <View style={styles.View_I401_3806_81_744}>
                <Text style={styles.Text_I401_3806_81_744}>Espresso</Text>
              </View>
            </View>
            <View style={styles.View_I401_3806_81_745}>
              <View style={styles.View_I401_3806_81_746}>
                <Text style={styles.Text_I401_3806_81_746}>$ 3.99</Text>
              </View>
              <View style={styles.View_I401_3806_81_747}>
                <View style={styles.View_I401_3806_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3806_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_3807}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9379/c951/e41957cf731c57432f217c7dadf76ac5"
            }}
            style={styles.ImageBackground_I401_3807_81_741}
          />
          <View style={styles.View_I401_3807_81_742}>
            <View style={styles.View_I401_3807_81_743}>
              <View style={styles.View_I401_3807_81_744}>
                <Text style={styles.Text_I401_3807_81_744}>
                  Original Americano
                </Text>
              </View>
            </View>
            <View style={styles.View_I401_3807_81_745}>
              <View style={styles.View_I401_3807_81_746}>
                <Text style={styles.Text_I401_3807_81_746}>$ 4.99</Text>
              </View>
              <View style={styles.View_I401_3807_81_747}>
                <View style={styles.View_I401_3807_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3807_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_401_3808}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29e8/4fce/ff02cb6736e8ed1c7a9d7858d6f49e6f"
            }}
            style={styles.ImageBackground_I401_3808_81_741}
          />
          <View style={styles.View_I401_3808_81_742}>
            <View style={styles.View_I401_3808_81_743}>
              <View style={styles.View_I401_3808_81_744}>
                <Text style={styles.Text_I401_3808_81_744}>
                  Caramel Macchiato
                </Text>
              </View>
            </View>
            <View style={styles.View_I401_3808_81_745}>
              <View style={styles.View_I401_3808_81_746}>
                <Text style={styles.Text_I401_3808_81_746}>$ 5.99</Text>
              </View>
              <View style={styles.View_I401_3808_81_747}>
                <View style={styles.View_I401_3808_81_747_8_181} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f94/8421/1a81a602bae3d284af9e7a215eb2d703"
                  }}
                  style={styles.ImageBackground_I401_3808_81_747_8_182}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_401_3809}>
        <View style={styles.View_I401_3809_401_3616} />
        <View style={styles.View_I401_3809_401_3617}>
          <View style={styles.View_I401_3809_401_3618}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_I401_3809_401_3618_8_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/aa33/7ad23cb1496a694234517f0f481060d1"
              }}
              style={styles.ImageBackground_I401_3809_401_3618_8_299}
            />
          </View>
          <View style={styles.View_I401_3809_401_3619}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_I401_3809_401_3619_8_288}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34c4/4b69/adc6a6c2bed3963a15011baa113cc6c9"
              }}
              style={styles.ImageBackground_I401_3809_401_3619_8_280}
            />
          </View>
          <View style={styles.View_I401_3809_401_3620}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_I401_3809_401_3620_8_289}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bd1/0ed9/e60078f135465fb1dec6c7c5d6bf4889"
              }}
              style={styles.ImageBackground_I401_3809_401_3620_8_283}
            />
          </View>
        </View>
        <View style={styles.View_I401_3809_401_3621}>
          <View style={styles.View_I401_3809_401_3622} />
          <View style={styles.View_I401_3809_401_3623} />
          <View style={styles.View_I401_3809_401_3624} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc9/ceea/0baff56ae44d54eca4a42521296e3567"
          }}
          style={styles.ImageBackground_I401_3809_401_3625}
        />
      </View>
      <View style={styles.View_401_3810}>
        <View style={styles.View_401_3811}>
          <View style={styles.View_I401_3811_6_61}>
            <Text style={styles.Text_I401_3811_6_61}>All</Text>
          </View>
        </View>
        <View style={styles.View_401_3812}>
          <View style={styles.View_I401_3812_8_63}>
            <Text style={styles.Text_I401_3812_8_63}>Coffee</Text>
          </View>
        </View>
        <View style={styles.View_401_3813}>
          <View style={styles.View_I401_3813_8_63}>
            <Text style={styles.Text_I401_3813_8_63}>Iced Blended</Text>
          </View>
        </View>
        <View style={styles.View_401_3814}>
          <View style={styles.View_I401_3814_8_63}>
            <Text style={styles.Text_I401_3814_8_63}>Juice</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_401_3815}>
        <View style={styles.View_401_3816}>
          <View style={styles.View_401_3817}>
            <Text style={styles.Text_401_3817}>Good Morning</Text>
          </View>
          <View style={styles.View_401_3818}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef11/3323/3fac9b9ccaedb2ad3fd650194d293069"
              }}
              style={styles.ImageBackground_401_3819}
            />
            <View style={styles.View_401_3820}>
              <Text style={styles.Text_401_3820}>648 Bridge Street</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0803/6f98/f1f92727fc95efd9bba1e8416309d5e0"
          }}
          style={styles.ImageBackground_401_3821}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(31, 29, 43, 1)" },
  View_2: { height: hp("111%") },
  View_401_3802: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  View_401_3803: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3803_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3803_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3803_81_743: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3803_81_744: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3803_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3803_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3803_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3803_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3803_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3803_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3803_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3804: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("67%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3804_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3804_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3804_81_743: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3804_81_744: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3804_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3804_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3804_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3804_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3804_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3804_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3804_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3805: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3805_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3805_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3805_81_743: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3805_81_744: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3805_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3805_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3805_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3805_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3805_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3805_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3805_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3806: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3806_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3806_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3806_81_743: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3806_81_744: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3806_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3806_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3806_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3806_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3806_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3806_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3806_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3807: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("34%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3807_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3807_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3807_81_743: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3807_81_744: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3807_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3807_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3807_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3807_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3807_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3807_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3807_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3808: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  ImageBackground_I401_3808_81_741: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_I401_3808_81_742: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3808_81_743: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3808_81_744: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3808_81_744: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3808_81_745: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3808_81_746: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I401_3808_81_746: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I401_3808_81_747: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3808_81_747_8_181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  ImageBackground_I401_3808_81_747_8_182: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_401_3809: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I401_3809_401_3616: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(31, 29, 43, 1)"
  },
  View_I401_3809_401_3617: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_I401_3809_401_3618: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_3809_401_3618_8_298: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_3809_401_3618_8_299: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I401_3809_401_3619: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_3809_401_3619_8_288: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_3809_401_3619_8_280: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I401_3809_401_3620: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I401_3809_401_3620_8_289: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I401_3809_401_3620_8_283: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I401_3809_401_3621: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  View_I401_3809_401_3622: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  View_I401_3809_401_3623: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(31, 29, 43, 1)"
  },
  View_I401_3809_401_3624: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    backgroundColor: "rgba(31, 29, 43, 1)"
  },
  ImageBackground_I401_3809_401_3625: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_401_3810: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_401_3811: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 149, 173, 1)"
  },
  View_I401_3811_6_61: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I401_3811_6_61: {
    color: "rgba(31, 29, 43, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_3812: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  View_I401_3812_8_63: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I401_3812_8_63: {
    color: "rgba(71, 149, 173, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_3813: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  View_I401_3813_8_63: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I401_3813_8_63: {
    color: "rgba(71, 149, 173, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_3814: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 40, 54, 1)"
  },
  View_I401_3814_8_63: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I401_3814_8_63: {
    color: "rgba(71, 149, 173, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_3815: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_401_3816: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_401_3817: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_3817: {
    color: "rgba(222, 226, 226, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_3818: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_401_3819: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_401_3820: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_401_3820: {
    color: "rgba(102, 104, 114, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_401_3821: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
