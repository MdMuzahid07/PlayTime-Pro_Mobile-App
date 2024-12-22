import { View, ScrollView, Alert, FlatList, Text, Modal } from 'react-native'
import { useState } from 'react';
import FacilityCardRegular from '../../components/home/FacilityCardRegular';
import FacilityCard from '../../components/home/FacilityCard';
import SearchBar from '../../components/ui/SearchBar';


const facilities = [
  {
    "_id": "676072ad97f1b9dfd45ee9fe",
    "name": "Premium Football Field",
    "description": "<p><strong>Premium Football Field Product Description:</strong></p><p>Step onto the field and experience the thrill of a well-maintained football pitch, designed for casual and competitive matches. This premium football field offers a lush grass surface, perfect for optimal ball control and movement. The field provides ample space for large teams, with clear boundary lines and regulation-size goalposts, ensuring a professional atmosphere.</p><p><strong>Features:</strong></p><ul><li><strong>Top-Quality Grass Surface</strong>: Lush and well-maintained for smooth gameplay.</li><li><strong>Regulation-Size Goalposts</strong>: Conforming to professional standards for competitive matches.</li><li><strong>Ample Playing Space</strong>: Spacious field ideal for team play and practice sessions.</li><li><strong>Weather-Resistant Maintenance</strong>: Designed to maintain quality in various weather conditions.</li><li><strong>Spectator Seating</strong>: Comfortable seating arrangements for fans and supporters.</li></ul><p><br></p>",
    "pricePerHour": 100,
    "location": "Central Park, New York",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374058/t5jjo0k670kcb72ygnog.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374059/hkwbj3accovpyxrpewlo.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374060/dfpizkab9ds5do5rm53n.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374059/fpyfybxgsqgn9itypimd.jpg"
    ],
    "isDeleted": false
  },
  {
    "_id": "676073a297f1b9dfd45eea03",
    "name": "Olympic Swimming Pool",
    "description": "<p><strong>Olympic Swimming Pool Product Description:</strong></p><p>Dive into luxury at our Olympic-sized swimming pool, designed to offer an exceptional aquatic experience. Whether you're training for a competition or just enjoying a leisurely swim, this pool provides the perfect environment. The crystal-clear water and high-quality facilities ensure comfort and convenience for every swimmer.</p><p><strong>Features:</strong></p><ul><li><strong>Olympic-Sized Pool</strong>: Meets official Olympic standards for length and depth.</li><li><strong>Heated Water</strong>: Provides a comfortable swimming experience year-round.</li><li><strong>Clear Visibility</strong>: Perfectly maintained water for enhanced visibility and performance.</li><li><strong>State-of-the-Art Filtration</strong>: Ensures clean and safe swimming conditions.</li><li><strong>Surrounding amenities</strong>: These include changing rooms, showers, and a relaxation area.</li></ul><p><br></p>",
    "pricePerHour": 150,
    "location": "Riverfront Sports Complex, Boston",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374302/dhugdyb359ld0cht5rhu.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374303/z3c1nmrac1hmnh1ozund.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374305/mhwpmjfevk6zocnzh34i.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374304/h15aefwvliro1xd6fawh.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374305/h0zxcvkop7ni48tril7d.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734374305/iwwyqj7y5qp3luajggmm.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "6760773497f1b9dfd45eea16",
    "name": "Indoor Basketball Court",
    "description": "<p><strong>Indoor Basketball Court Product Description:</strong></p><p>Take your game indoors with our state-of-the-art basketball court. The court is equipped with a high-quality wooden floor, ensuring excellent ball bounce and movement. With adjustable hoops and ample space, it’s perfect for training, friendly games, or competitive matches in a controlled environment.</p><p><strong>Features:</strong></p><ul><li><strong>High-Quality Wooden Floor</strong>: Designed to provide superior bounce and control.</li><li><strong>Adjustable Hoops</strong>: Easily adjusted to accommodate players of all skill levels.</li><li><strong>Ample Playing Space</strong>: Spacious court for full-court games and drills.</li><li><strong>Indoor Comfort</strong>: Climate-controlled environment for year-round play.</li><li><strong>Spectator Seating</strong>: Comfortable seating for fans and friends.</li></ul><p><br></p>",
    "pricePerHour": 120,
    "location": "Downtown Gymnasium, Chicago",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375218/wmsxggbcp2prikwajhgn.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375219/hsltsxskokkxjr7sjdyk.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375219/cmhrap39qatymc7tmiad.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375219/ng6rbfh1mtvctsq2i53x.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "6760778a97f1b9dfd45eea19",
    "name": "Grass Tennis Court",
    "description": "<p><strong>Grass Tennis Court Product Description:</strong></p><p>Step onto a traditional grass court for an authentic tennis experience. Our grass tennis court offers a unique challenge, demanding precision and strategy with every serve and return. Perfect for both casual players and seasoned professionals, this court provides an ideal environment for tennis at its finest.</p><p><strong>Features:</strong></p><ul><li><strong>Classic Grass Surface</strong>: Offers a slower, more strategic game.</li><li><strong>Regulation Net Height</strong>: Conforms to official tennis standards for competitive play.</li><li><strong>Well-Maintained Grass</strong>: Regularly manicured for optimal playing conditions.</li><li><strong>Floodlit for Evening Play</strong>: Enjoy tennis during the evening with high-quality lighting.</li><li><strong>Relaxing Park Setting</strong>: Located within a tranquil park, enhancing the playing experience.</li></ul><p><br></p>",
    "pricePerHour": 80,
    "location": "Greenwich Park, London",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375302/rflkemd109qhgzletk4a.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375303/cjs2sqgv16pvgukzhfex.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375303/mnqghhvveka9xaflzuvd.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375304/hxihlaa8gjwgqiemmeut.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375304/dwvyyp6yv8ypqwypwskv.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375304/qtfrkuhisosfwdoq8jzz.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375305/c0cjxo8ojtiwu1mipn6r.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "6760780897f1b9dfd45eea1c",
    "name": "Cricket Ground",
    "description": "<p><strong>Cricket Ground Product Description:</strong></p><p>Play with confidence on this professionally designed cricket ground. With an expertly maintained pitch and spacious outfield, the ground is perfect for competitive matches, practice, and tournaments. The facility ensures reliable pitch conditions, regardless of the weather, making it ideal for any cricket enthusiast.</p><p><strong>Features:</strong></p><ul><li><strong>Professionally Maintained Pitch</strong>: Provides a consistent and high-quality surface for play.</li><li><strong>Spacious Outfield</strong>: Ample room for fielding and running between the wickets.</li><li><strong>Regulation Boundary Lines</strong>: Clearly marked for fair play during matches.</li><li><strong>Advanced Drainage System</strong>: Ensures the pitch remains playable even in wet conditions.</li><li><strong>Stadium-Grade Seating</strong>: Comfortable seating for spectators to enjoy the game.</li></ul><p><br></p>",
    "pricePerHour": 200,
    "location": "Victoria Sports Arena, Melbourne",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375429/uc55lndo4mkrnx046ify.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375431/xxxi8626na5eaukwjr3f.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375432/roiruyyu9wtkn8uwu8im.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375431/k3xrkp393wibprhuj4es.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "6760788e97f1b9dfd45eea1f",
    "name": "Badminton Arena",
    "description": "<p><strong>Badminton Arena Product Description:</strong></p><p>Enter the world of professional badminton at our indoor arena. With six high-quality courts, this facility is designed for both casual games and serious training. The arena features advanced flooring and excellent lighting, ensuring an optimal environment for players to perform at their best.</p><p><strong>Features:</strong></p><ul><li><strong>Six Indoor Courts</strong>: Perfect for casual games and professional training.</li><li><strong>High-Quality Flooring</strong>: Specialized surface for enhanced footwork and agility.</li><li><strong>Adjustable Net Heights</strong>: Customize for different ages and skill levels.</li><li><strong>Climate-Controlled Arena</strong>: Ensures a comfortable environment for all players.</li><li><strong>Spectator Seating</strong>: Ample space for fans to watch the games.</li></ul><p><br></p>",
    "pricePerHour": 60,
    "location": "Victory Sports Complex, Singapore",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375563/dlm8szb2mr8tqklj7a6d.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375564/q6zopdqjcy4futegwkjv.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375565/x5ac8ursu7mzz0khdw0f.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "676078f097f1b9dfd45eea22",
    "name": "Baseball Diamond",
    "description": "<p><strong>Baseball Diamond Product Description:</strong></p><p>Experience the thrill of America’s favorite pastime on this expertly designed baseball diamond. The field is equipped with regulation-size bases, a well-maintained pitcher's mound, and ample outfield space. Perfect for competitive play, practice, or friendly games, the diamond offers everything needed for a professional experience.</p><p><strong>Features:</strong></p><ul><li><strong>Regulation-Size Bases</strong>: Conforms to official standards for competitive play.</li><li><strong>Pitcher’s Mound</strong>: Built to professional specifications for serious games.</li><li><strong>Spacious Outfield</strong>: Ample room for fielders to chase down balls.</li><li><strong>Top-Notch Turf</strong>: Well-maintained grass and dirt surface for consistent play.</li><li><strong>Stadium-Grade Lighting</strong>: Provides high-quality lighting for evening games.</li></ul><p><br></p>",
    "pricePerHour": 130,
    "location": "East End Sports Park, Los Angeles",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375659/iwor06njlvbdx3maeubm.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375661/ct7hrvbkzhcx2itzkm2l.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375663/oqx8uhjngadnivmm4nrc.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "6760796597f1b9dfd45eea25",
    "name": "Cycling Track",
    "description": "<p><strong>Cycling Track Product Description:</strong></p><p>Whether you're training for a race or enjoying a leisurely ride, our Olympic-standard cycling track is the ideal place to test your skills. With smooth, banked corners and a carefully designed surface, cyclists can push their limits while maintaining safety and control.</p><p><strong>Features:</strong></p><ul><li><strong>Olympic-Standard Track</strong>: Meets official specifications for competitive cycling.</li><li><strong>Smooth, Banked Surface</strong>: Ensures a safe and thrilling ride at high speeds.</li><li><strong>Ample Spectator Seating</strong>: Comfortable seats for fans to enjoy the race.</li><li><strong>Well-Lit for Evening Rides</strong>: Enjoy cycling after dark with powerful floodlights.</li><li><strong>Convenient Amenities</strong>: Includes bike racks, showers, and rest areas.</li></ul><p><br></p>",
    "pricePerHour": 70,
    "location": "Mountain View Sports Complex, San Francisco",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375778/cx31nxejvwy7kw8hcvyx.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375779/grbct0gempyh0kxqveia.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375780/hx8olhc17l7eofq8lebw.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "676079ce97f1b9dfd45eea28",
    "name": "Volleyball Court\"",
    "description": "<p><strong>Volleyball Court Product Description:</strong></p><p>Enjoy beach volleyball at its finest on our well-maintained sand court. The soft, evenly spread sand creates an ideal playing surface for both beginners and pros, while the ocean backdrop enhances the excitement of every match. Perfect for tournaments, casual games, or team-building events.</p><p><strong>Features:</strong></p><ul><li><strong>Soft, Even Sand</strong>: Ideal for comfortable and challenging play.</li><li><strong>Regulation Net Height</strong>: Adjusted to meet official standards for competitive play.</li><li><strong>Beachfront Setting</strong>: Enjoy playing with ocean views in a serene location.</li><li><strong>Ample Space for Teams</strong>: Spacious court designed for full-team matches.</li><li><strong>Spectator Area</strong>: Comfortable seating for friends and fans to enjoy the game.</li></ul><p><br></p>",
    "pricePerHour": 50,
    "location": "Beachfront Sports Park, Miami",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375884/imwuyxhlctrv174pipax.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734375885/jesubeuakktoic7jcso0.png"
    ],
    "isDeleted": false
  },
  {
    "_id": "676093e998afe6e10d3bbe60",
    "name": "Table Tennis Hall",
    "description": "<p><strong>Table Tennis Hall Product Description:</strong></p><p>Step into our state-of-the-art table tennis hall, where precision and speed are key. Featuring ten high-quality tables, this facility caters to all levels, from casual players to elite athletes. The climate-controlled environment ensures a comfortable setting year-round, while the lounge area provides a place to relax.</p><p><strong>Features:</strong></p><ul><li><strong>Ten Professional Tables</strong>: High-quality tables designed for competitive play.</li><li><strong>Climate-Controlled Hall</strong>: Ensures optimal playing conditions year-round.</li><li><strong>Spectator Seating</strong>: Comfortable lounge area for spectators and players.</li><li><strong>High-Speed Internet</strong>: Stream live matches with top-quality connectivity.</li><li><strong>Convenient Amenities</strong>: Includes locker rooms, showers, and a café.</li></ul><p><br></p>",
    "pricePerHour": 40,
    "location": "City Sports Complex, Tokyo",
    "image": [
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734382566/f4kx4z8xityjeoktvmng.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734382567/ge7spg2dyifowhkgrjbx.png",
      "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1734382569/bzdjglosarhy0gy2qib3.png"
    ],
    "isDeleted": false
  }
];


const Home = () => {
  const [search, setSearch] = useState('');

  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };
  return (
    <View>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleClick={showAlert}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <View style={{ padding: 15, paddingBottom: 5, paddingTop: 0 }}>
            <Text style={{ fontSize: 20, color: "121212" }}>Featured Facilities</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={facilities}
              renderItem={({ item }) => (<FacilityCard facility={item} />)}
              keyExtractor={item => item?._id}
            />
          </View>
        </View>


        <View style={{ paddingTop: 15, paddingBottom: 100, backgroundColor: "#fff" }}>
          <View style={{ padding: 15, paddingBottom: 5, paddingTop: 0 }}>
            <Text style={{ fontSize: 20, color: "121212" }}>Available Facilities</Text>
          </View>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={facilities}
              renderItem={({ item }) => (<FacilityCardRegular facility={item} />)}
              keyExtractor={item => item?._id}
            />
          </View>
        </View>


      </ScrollView >
    </View>
  )
}

export default Home;

