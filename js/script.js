// -----location array-----
const locations = [
  {
    id: 0,
    name: "Ica View",
    maps: "Whareama, Wellington",
    price: 157,
    image_url: "img/results/ica view.jpg",
    carouselImgOne: "img/results/ica view 1.jpg",
    carouselImgTwo: "img/results/ica view 2.jpg",
    carouselImgThree: "img/results/ica view 3.jpg",
    carouselImgFour: "img/results/ica view 4.jpg",
    icon1: "person-hearts",
    icon2: "lightning-charge-fill",
    icon3: "binoculars-fill",
    tag: "tiny",
    location: "north island",
    minNights: 1,
    maxNights: 5,
    minGuests: 1,
    maxGuests: 2,
    description: "Ica View Glamping is more than a place to crash for the night. It’s an off the grid glamping experience. Situated on a hill top overlooking the breathtaking Ica Valley. Located 35 minutes east of Masterton towards the beaches. Just over 2 hours from Wellington. With plenty of day time activities close by for those who want to stay multiple nights.",
    meal: "There is a BBQ set up for cooking, but no fridge. Chilli Bin provided for perishable items.",
    address: "Castlepoint beach is very scenic with a couple of beautiful walks and is well worth a look. Riversdale beach has a golf course, tennis courts and a store where you can grab an ice cream or fish and chips to eat on the beach. Otahome beach is your quiet secluded beach where you are unlikely to see anyone."
  },
  {
    id: 1,
    name: "Raglan Treehouse",
    location: "north island",
    maps: "Raglan, Waikato",
    price: 90,
    image_url: "img/results/raglan treehouse.jpg",
    carouselImgOne: "img/results/raglan 1.jpg",
    carouselImgTwo: "img/results/raglan 2.jpg",
    carouselImgThree: "img/results/raglan 3.jpg",
    carouselImgFour: "img/results/raglan 4.jpg",
    icon1: "wifi-off",
    icon2: "water",
    icon3: "binoculars-fill",
    tag: "forrest",
    minNights: 3,
    maxNights: 10,
    minGuests: 2,
    maxGuests: 4,
    description: "Escape to this tiny treehouse in the woods, 4kms from Whale Bay and 12kms from Raglan. Disconnect and recharge. Live simply. Breathe in nature. Experience off-the-grid living and take a break from technology. The treehouse is set up in the pines on our 35 acre property and has an amazing view over pasture, native bush and the ocean. This is an escape from the everyday. It's for young romantics (at heart), the adventurous",
    meal: "We offer a classic continental breakfast from 7-9am. Because of the location of the tree house we cannot allow open fires, there is a small kitchen inside the house for cooking.",
    address: "We are located on the edge of Mount Karioi, just 4kms from Raglan's famous surf breaks; Manu Bay, Whale Bay and Indicators. Te Toto Gorge is just up the road. We have a short, beautiful bush walk on our property and there are also some Mt Karioi bush walks accessed from Te Toto Gorge and the Institute of Awesome on Whaanga Road."

  },
  {
    id: 2,
    name: "Hinterland Retreat",
    location: "north island",
    maps: "Gisborne",
    price: 240,
    image_url: "img/results/hinterland.jpg",
    carouselImgOne: "img/results/hinterland 1.jpg",
    carouselImgTwo: "img/results/hinterland 2.jpg",
    carouselImgThree: "img/results/hinterland 3.jpg",
    carouselImgFour: "img/results/hinterland 4.jpg",
    icon1: "person-hearts",
    icon2: "water",
    icon3: "bicycle",
    tag: "campfire",
    minNights: 2,
    maxNights: 15,
    minGuests: 1,
    maxGuests: 4,
    description: "Stunning glamping style cabin accommodation on New Zealand’s East Coast. Be the first in the world to watch the sunrise over the Pacific ocean right in front of you. A leasurly 2 min drive to the most stunning white sand surf beaches of 5 min in the other direction to city centre. Airbnb experiences don't get better than this.",
    meal: "Romantic meal for two included with any 2 person booking - choose from either a cooked breakfast, picnic lunch or BBQ dinner under the stars (Please include any dietry requirements in your booking).",
    address: "We are 5 minutes from wainui beach, a beautiful white sand beach great for swimming and surfing. Makorori beach is a further 5 minutes north. Gisborne city, shops and cafes is 10min to the south."
  },
  {
    id: 3,
    name: "Alpine Cubes",
    location: "south island",
    maps: "Ben Ohau, Canterbury",
    price: 436,
    image_url: "img/results/alpine cube.jpg",
    carouselImgOne: "img/results/alpine cube 1.jpg",
    carouselImgTwo: "img/results/alpine cube 2.jpg",
    carouselImgThree: "img/results/alpine cube 3.jpg",
    carouselImgFour: "img/results/alpine cube 4.jpg",
    icon1: "person-hearts",
    icon2: "binoculars-fill",
    icon3: "bicycle",
    tag: "mountain",
    minNights: 1,
    maxNights: 10,
    minGuests: 2,
    maxGuests: 6,
    description: "Capturing the truely magnificent surrounding environment and landscape; on the edge of the Southern Alps, whilst enjoying it all in comfort and tranquility.",
    meal: "Full kitchen facillities included.",
    address: "At the foot of the Ben Ohau range, we are a 2 minutes drive from the picturesque Lake Ohau. For all of the cycling enthusiasts we are a stones throw from the third section of the Alps to Oceans cycle trail - Twizel to Lake Ohau Lodge."
  },
  {
    id: 4,
    name: "The Grove Farm Stay",
    location: "north island",
    maps: "Thornton, Bay Of Plenty",
    price: 281,
    image_url: "img/results/the grove.jpg",
    carouselImgOne: "img/results/the grove 1.jpg",
    carouselImgTwo: "img/results/the grove 2.jpg",
    carouselImgThree: "img/results/the grove 3.jpg",
    carouselImgFour: "img/results/the grove 4.jpg",
    icon1: "battery-charging",
    icon2: "wifi-off",
    icon3: "bicycle",
    tag: "yurt",
    minNights: 2,
    maxNights: 15,
    minGuests: 2,
    maxGuests: 6,
    description: "The Yurt is a 7m diameter Mongolian design durable canvas tent. The design has roots in Mongolian nomadic culture where tents are capable of being deconstructed and reinstated in a new location on the same day whilst also being a comfortable, warm and durable place to live. Our yurt is fully insulated but for added comfort a heat pump/air conditioner has been installed. The Grove is a beautiful place to relax with all your requirements taken care of. Soak in the spa, while enjoying your favourite cheeses and beverages.",
    meal: "Cheese and wine board included: Choose from a selection of local cheeses and either our house red, white or a non-alcholic beverage to accompany.",
    address: "Nestled in an established avocado orchard, The Grove Luxury Yurt Accommodation is in the Thornton area a short drive from Whakatane and within an hour of Tauranga and Rotorua. Encompassing over 500 avocado trees and two large duck ponds, the property is home to large numbers of ducks and numerous native birds including kereru (wood pigeon), tui, and piwaiwaka (fantail). A short walk through the orchard will take you to an often deserted white sand beach. Nearby Thornton Beach is a well regarded surf casting hot spot and just five minutes up the road are two famous berry cafes and The Red Barn, a go-to for your daily coffee fix."
  },
  {
    id: 5,
    name: "Seaside Glamping",
    location: "south island",
    maps: "Golden Bay, Nelson",
    price: 288,
    image_url: "img/results/seaside glamp.jpg",
    carouselImgOne: "img/results/seaside glamp 1.jpg",
    carouselImgTwo: "img/results/seaside glamp 2.jpg",
    carouselImgThree: "img/results/seaside glamp 3.jpg",
    carouselImgFour: "img/results/seaside glamp 4.jpg",
    icon1: "battery-charging",
    icon2: "bicycle",
    icon3: "water",
    tag: "beach",
    minNights: 2,
    maxNights: 10,
    minGuests: 1,
    maxGuests: 4,
    description: "Our spacious glamping tents are situated on a laid-back holiday park offering the ideal surroundings for surfing, boating, fishing and diving. The park can easily be found while following one of New Zealand’s best touring routes – the Pacific Coast Highway. Tatapouri is a fantastic base to explore the untouched solitude of the East Cape. When you stay out at Tatapouri, you'll feel like you're a million miles from anywhere.",
    meal: "Tapas night: Enjoy a curated selection of sharing dishes each night. The menu changes each day based on ingredient availability and quality.",
    address: "We are right next door to the world famous Stingray feeding at Dive Tatapouri. But if you're here to relax you won't need to go far. Makarori Surf beach is just around the corner and Wainui beaches are just a few minutes away. The township of Gisborne is only a 12-minute drive away and has all the necessities you may need while on holiday with supermarkets and shops. If you want to catch a movie head to Dome Cinema for a unique viewing experience."
  },
  {
    id: 6,
    name: "Yurt on York",
    location: "north island",
    maps: "Martinborough, Wellington",
    price: 291,
    image_url: "img/results/yurt on york.jpg",
    carouselImgOne: "img/results/yurt 1.jpg",
    carouselImgTwo: "img/results/yurt 2.jpg",
    carouselImgThree: "img/results/yurt 3.jpg",
    carouselImgFour: "img/results/yurt 4.jpg",
    icon1: "binoculars-fill",
    icon2: "bicycle",
    icon3: "water",
    tag: "ongrid",
    minNights: 2,
    maxNights: 8,
    minGuests: 1,
    maxGuests: 4,
    description: "Yurt on York is a unique eco-friendly property set on an acre block in Martinborough, NZ. It is the perfect getaway for couples who want an escape from the city. The yurt features a super king bed, fireplace, heat pump, outside bath, full kitchen and bathroom. A short walk or bike will get you into the heart of Martinborough Village, with charming cafes, restaurants, boutique shops and cinema.",
    meal: "No meals included, we have a full kitchen available for guests and there are many amazing resturants near by."
  },
  {
    id: 7,
    name: "Waterfront Glamping",
    location: "north island",
    maps: "Kaeo, Northland",
    price: 30,
    image_url: "img/results/waterfront glamp.jpg",
    carouselImgOne: "img/results/waterfront glamp 1.jpg",
    carouselImgTwo: "img/results/waterfront glamp 2.jpg",
    carouselImgThree: "img/results/waterfront glamp 3.jpg",
    carouselImgFour: "img/results/waterfront glamp 4.jpg",
    icon1: "binoculars-fill",
    icon2: "bicycle",
    icon3: "water",
    tag: "river",
    minNights: 1,
    maxNights: 10,
    minGuests: 1,
    maxGuests: 1,
    description: "Our stunning, private & secluded luxury Glamping Site is perched on the banks of the beautiful Takou River. Designed exclusively for a couple with peace & seclusion guaranteed, it's the perfect escape & way to experience the beauty of New Zealand while Glamping in style! Breathtaking views across the water from our luxurious safari tent; super king bed, cosy linens & vintage furnishings; your own romantic outdoor bath, private jetty & cosy kitchen and bathroom cabin. Why camp when you can Glamp!",
    meal: "Communal tea and coffee available in the kitchen (milk not included).",
    address: "Takou River is a hidden gem, just 20 minutes drive from the thriving small town of Kerikeri with its vibrant Farmers' Markets, award winning restaurants and wineries, stunning coastline, historic sites and just a short drive to the Bay of Islands, Paihia, Russell and Waitangi."
  },
  {
    id: 8,
    name: "Tui's Secret",
    location: "south island",
    maps: "Brooklyn, Tasman",
    price: 150,
    image_url: "img/results/tui's secret.jpg",
    carouselImgOne: "img/results/tui 1.jpg",
    carouselImgTwo: "img/results/tui 2.jpg",
    carouselImgThree: "img/results/tui 3.jpg",
    carouselImgFour: "img/results/tui 4.jpg",
    icon1: "binoculars-fill",
    icon2: "battery-charging",
    icon3: "wifi-off",
    tag: "offgrid",
    minNights: 1,
    maxNights: 10,
    minGuests: 2,
    maxGuests: 4,
    description: "Welcome to your rejuvenating holiday in our bush hideaway with bird view over Tasman Bay! You will be surrounded by lush regenerating and mature bush, refreshing river and diverse birdsong. This is a truly relaxing place, for you only, off the grid with pure water fresh from our hill source! On top of that, it is very close to Motueka and its beautiful beaches (both 15 min) as well as to the amazing tourist attractions of the Top of the South! A true Kiwi experience off the beaten track!",
    meal: "Interested in having your meals brought up to your cabin each day? Let us know at checkout and we will be intouch about our daily food delivieries.",
    address: "This is a hill side with 6 properties. Please respect private areas. As our guests you are welcome to go for walks on our property only."
  },
  {
    id: 9,
    name: "Pa Hill Cabin",
    location: "north island",
    maps: "Mangawhai, Northland",
    price: 391,
    image_url: "img/results/pa hill.jpg",
    carouselImgOne: "img/results/pa hill 1.jpg",
    carouselImgTwo: "img/results/pa hill 2.jpg",
    carouselImgThree: "img/results/pa hill 3.jpg",
    carouselImgFour: "img/results/pa hill 4.jpg",
    icon1: "person-hearts",
    icon2: "water",
    icon3: "bicycle",
    tag: "fireplace",
    minNights: 2,
    maxNights: 15,
    minGuests: 1,
    maxGuests: 4,
    description: "Set in two acres of rolling paddock and native bush this cabin is the perfect hideaway from busy urban life. This property is pet friendly. Please contact the owner to find out the details.",
    meal: "BBQ kit avaiable at additional cost, includes: Selection of fresh local meats, seasonal vegetables from our farm, homemade sauces to accompany your meal.",
    address: "Mangawhai is a very popular beach destination that can get very crowded at peak season. You'll be well away from all the noise in this peaceful bush setting, however you will need a car to get around as there is no public transport. Take some time in the morning around sunrise to listen to the birdsong, there's a great variety of native birds and a few interlopers from Australia and beyond."
  },
  {
    id: 10,
    name: "Rebekah's House",
    location: "north island",
    maps: "Island Bay, Wellington",
    carouselImgOne: "img/results/rebekah 1.jpg",
    carouselImgTwo: "img/results/rebekah 2.jpg",
    carouselImgThree: "img/results/rebekah 3.jpg",
    carouselImgFour: "img/results/rebekah 4.jpg",
    price: 400,
    image_url: "img/results/rebekah's.jpg",
    icon1: "binoculars-fill",
    icon2: "water",
    icon3: "bicycle",
    tag: "ongrid",
    minNights: 1,
    maxNights: 15,
    minGuests: 1,
    maxGuests: 4,
    description: "You must love cats to stay here becasue I have two of them. (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    meal: "5 course gourment meal each night, includes dessert.",
    address: "Island Bay is full of tiny cafes, too many children, and an agiging population."
  }
];

const result = document.getElementById("result-container");
const locationSelect = document.getElementById("locations");
const guests = document.getElementById("guests");

const message = document.getElementById('validate-message');
const notifications = document.getElementById("notifications");

let daysSelected;
let daysValid;
const submitBtn = document.getElementById('submit-button');

const detailsButtonArray = document.getElementsByClassName("details-button");
const profile = document.getElementById("accommodation-profile");
const extraD = document.getElementById("accommodation-details");

// -----parsley functions-----
$(function () {
  $('#first-form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0;
    $('.alert-info').toggleClass('hidden', !ok);
    $('.alert-warning').toggleClass('hidden', ok);
    event.preventDefault();
  })
    .on('form:submit', function () {
      event.preventDefault();
      swiper.slideTo(7);
    });
});

// -----swiper functions-----
let swiper = new Swiper(".mySwiper", {
  grabCursor: false,
  allowTouchMove: false,
  swiperScrollbarHorizontal: false
});

// -----date range picker functions-----
$(function () {
  $('input[name="daterange"]').daterangepicker({
    showDropdowns: true,
    minYear: 2022,
    maxYear: parseInt(moment().format('YYYY'), 10)
  })
  $('input[name="daterange"]').on('apply.daterangepicker',
    function (ev, picker) {
      let fullDate = $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));

      let start = picker.startDate.format('MM/DD/YYYY');
      let end = picker.endDate.format('MM/DD/YYYY');
      daysSelected = datediff(parseDate(start), parseDate(end));

      function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
      }

      function datediff(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
      }

      if (daysSelected < 1) {
        message.innerHTML = `
        <span class ="incorrect">Please select at least 1 day.</span>
        `
      } else if (daysSelected > 15) {
        message.innerHTML = `
        <span class ="incorrect">Please contact us if you would like to stay for more than 15 days.</span>
        `
      } else {
        daysValid = true;
        message.innerHTML = `
        <span class ="correct"><strong>Days selected: ${daysSelected} <i class="bi bi-check-square"></i></strong></span>
        `
      }
    })
});

submitBtn.onclick = function () {
  if (daysValid == true) {
    swiper.slideTo(7);
    generateSearchResults();
  } else {
    alert("Error, please fill all sections.")
  }
};

//-----Map box-----
mapboxgl.accessToken = 'pk.eyJ1IjoicmVic2NhbGxpb24iLCJhIjoiY2wzcngyd3dsMHhnNDNqcHljZGRmempyOCJ9.IqN-GiKneRZ3VkSMeO7TGA';

let map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/rebscallion/cl4mg8yff000214o6io5dxph6',
  center: [173.39740555625633, -41.276847699617434], // starting position [lng, lat]
  zoom: 5 // starting zoom
});

const customMarkers1 = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [170.06358969352164, -44.27706632382975]
      },
      properties: {
        title: `Alpine Cubes`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [176.22086615369835, -37.71316875027767]
      },
      properties: {
        title: `The Grove Farm Stay`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.75752561969392, -41.28229646756005]
      },
      properties: {
        title: `Water Front Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.99656683070702, -41.10622969532875]
      },
      properties: {
        title: `Tui's Secret`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.5663760081477, -36.11722358985489]
      },
      properties: {
        title: `Pa Hill Cabin`,
      }
    }
  ]
}

const customMarkers2 = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.99331623533624, -40.927363229587606]
      },
      properties: {
        title: `Ica View`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.85167102585922, -37.82006974308712]
      },
      properties: {
        title: `Raglan Treehouse`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [177.97303786111274, -38.6461672000733]
      },
      properties: {
        title: `Hinterland Retreat`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [173.25835497040026, -41.320534889424486]
      },
      properties: {
        title: `Seaside Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.45881622850425, -41.20987624356458]
      },
      properties: {
        title: `Yurt on York`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77222020328986, -41.33229995052463]
      },
      properties: {
        title: `Rebekah's House`,
      }
    }
  ]
}

const customMarkers3 = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.85167102585922, -37.82006974308712]
      },
      properties: {
        title: `Raglan Treehouse`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [176.22086615369835, -37.71316875027767]
      },
      properties: {
        title: `The Grove Farm Stay`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.45881622850425, -41.20987624356458]
      },
      properties: {
        title: `Yurt on York`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.75752561969392, -41.28229646756005]
      },
      properties: {
        title: `Waterfront Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.5663760081477, -36.11722358985489]
      },
      properties: {
        title: `Pa Hill Cabin`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77222020328986, -41.33229995052463]
      },
      properties: {
        title: `Rebekah's House`,
      }
    }
  ]
}

const customMarkers4 = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.99331623533624, -40.927363229587606]
      },
      properties: {
        title: `Ica View`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [177.97303786111274, -38.6461672000733]
      },
      properties: {
        title: `Hinterland Retreat`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [170.06358969352164, -44.27706632382975]
      },
      properties: {
        title: `Alpine Cubes`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [173.25835497040026, -41.320534889424486]
      },
      properties: {
        title: `Seaside Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.99656683070702, -41.10622969532875]
      },
      properties: {
        title: `Tui's Secret`,
      }
    }
  ]
}

const customMarkers5 = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.85167102585922, -37.82006974308712]
      },
      properties: {
        title: `Raglan Treehouse`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [176.22086615369835, -37.71316875027767]
      },
      properties: {
        title: `The Grove Farm Stay`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.75752561969392, -41.28229646756005]
      },
      properties: {
        title: `Waterfront Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [172.99656683070702, -41.10622969532875]
      },
      properties: {
        title: `Tui's Secret`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.5663760081477, -36.11722358985489]
      },
      properties: {
        title: `Pa Hill Cabin`,
      }
    }
  ]
}


const allMarkers = {
  type: 'FeatureCollection',

  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [170.06358969352164, -44.27706632382975]
      },
      properties: {
        title: `Alpine Cubes`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [176.22086615369835, -37.71316875027767]
      },
      properties: {
        title: `The Grove Farm Stay`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.75752561969392, -41.28229646756005]
      },
      properties: {
        title: `Water Front Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.99331623533624, -40.927363229587606]
      },
      properties: {
        title: `Ica View`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.5663760081477, -36.11722358985489]
      },
      properties: {
        title: `Pa Hill Cabin`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.99331623533624, -40.927363229587606]
      },
      properties: {
        title: `Ica View`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.85167102585922, -37.82006974308712]
      },
      properties: {
        title: `Raglan Treehouse`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [177.97303786111274, -38.6461672000733]
      },
      properties: {
        title: `Hinterland Retreat`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [175.45881622850425, -41.20987624356458]
      },
      properties: {
        title: `Yurt on York`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [173.25835497040026, -41.320534889424486]
      },
      properties: {
        title: `Seaside Glamping`,
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [174.77222020328986, -41.33229995052463]
      },
      properties: {
        title: `Rebekah's House`,
      }
    }
  ]
};

function renderMap(currentMarker) {

  let newMarkerElement = document.createElement('div');
  newMarkerElement.className = 'marker';

  new mapboxgl.Marker(newMarkerElement)
    .setLngLat(currentMarker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
      offset: 25
    })
      .setHTML('<h3>' + currentMarker.properties.title + '</h3>'))
    .addTo(map);
};


function renderMarkers(currentMarker) {
  let newMarkerElement = document.createElement('div');
  newMarkerElement.className = 'marker';

  new mapboxgl.Marker(newMarkerElement)
    .setLngLat(currentMarker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
      offset: 25
    })
      .setHTML('<h3>' + currentMarker.properties.title + '</h3>'))
    .addTo(map);
}

// -----quiz option on click functions-----
function beach() {
  swiper.slideNext();
  beach = 1;
};

function river() {
  swiper.slideNext();
  river = 1;
};

function forrest() {
  swiper.slideNext();
  forrest = 1;
};

function mountain() {
  swiper.slideNext();
  mountain = 1;
};

function tiny() {
  swiper.slideNext();
  tiny = 1;
};

function yurt() {
  swiper.slideNext();
  yurt = 1;
};

function campfire() {
  swiper.slideNext();
  campfire = 1;
};

function fireplace() {
  swiper.slideNext();
  fireplace = 1;
};

function ongrid() {
  ongrid = 1;
  generateResults();
  swiper.slideTo(7);
};

function offgrid() {
  offgrid = 1;
  generateResults();
  swiper.slideTo(7);
};

function generateButtons() {
  for (let i = 0; i < detailsButtonArray.length; i++) {
    detailsButtonArray[i].onclick = function () {
      console.log("you clicked me");
      let currentDetailButtonId = this.id;
      console.log(currentDetailButtonId);
      swiper.slideTo(9);
      openDetails(currentDetailButtonId);
    }
  }
};

// -----generate search results-----
function generateSearchResults() {
  let locationSelected = locationSelect.value.toLowerCase();
  let guestsSelected = guests.value;
  console.log(locationSelected);
  console.log(guestsSelected);
  console.log(daysSelected);
  result.innerHTML = "";
  if (locationSelected == "north island") {
    for (let i = 0; i < locations.length; i++) {

      if (locations[i].location.includes("north island") && daysSelected >= locations[i].minNights && daysSelected <= locations[i].maxNights && guestsSelected >= locations[i].minGuests && guestsSelected <= locations[i].maxGuests) {
        generateLocation(i);
        console.log("yay");
        generateButtons(i);
      }

    } //end of loop statement
  } else if (locationSelected == "south island") {
    for (let i = 0; i < locations.length; i++) {

      if (locations[i].location.includes("south island") && daysSelected >= locations[i].minNights && daysSelected <= locations[i].maxNights && guestsSelected >= locations[i].minGuests && guestsSelected <= locations[i].maxGuests) {
        generateLocation(i);
        console.log("yay");
        generateButtons(i);
      }
    }
  } else {
    showAllAccomodation()
    generateButtons();
  } //end of if statement    
  allMarkers.features.forEach(renderMap);
} //end of generate results,

// -----display all accommodation-----
function showAllAccomodation() {
  result.innerHTML = "";
  result.innerHTML = `
  <div id="results-heading">
  <h2>Showing All Accommodation</h2>
  </div>
   `  ;

  for (let i = 0; i < locations.length; i++) {
    result.innerHTML += `
    <div class="location-profile">
      <img id="profile" src="${locations[i].image_url}" height="300" alt="${locations[i].name}">
      <div class="content-wrapper">
        <h4>${locations[i].name}</h4><h4 id="price-pn">$${locations[i].price}p/n</h4>
        <h5>${locations[i].location}</h5>
        <a href="#toolbar" class="details-button" id="${locations[i].id}">DETAILS</a>
      </div>
    </div>
    `
      ;
  }
  generateButtons();
  allMarkers.features.forEach(renderMap);
};


//-----generate quiz results-----
function generateResults() {
  if (beach == 1 && mountain == 1 && tiny == 1 && campfire == 1 && offgrid == 1) {
    console.log("Here's your results.");
    // loop through the locations array and compare the tag that the user chose to the tag of each location
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].tag == "beach") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "mountain") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "tiny") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "campfire") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "offgrid") {
        generateLocation(i);
        generateButtons();
      };//end if statement
    };//end loop checking all locations
    customMarkers4.features.forEach(renderMarkers);
  } else if (beach == 1 && forrest == 1 && tiny == 1 && campfire == 1 && ongrid == 1) {
    console.log("Here's your results.");
    // loop through the locations array and compare the tag that the user chose to the tag of each location
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].tag == "beach") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "forrest") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "tiny") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "campfire") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "ongrid") {
        generateLocation(i);
        generateButtons();
      };//end if statement
    };//end loop checking all locations
    customMarkers2.features.forEach(renderMarkers);
  } else if (river == 1 && forrest == 1 && yurt == 1 && fireplace == 1 && ongrid == 1) {
    console.log("Here's your results.");
    // loop through the locations array and compare the tag that the user chose to the tag of each location
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].tag == "river") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "forrest") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "yurt") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "fireplace") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "ongrid") {
        generateLocation(i);
        generateButtons();
      };//end if statement
    };//end loop checking all locations
    customMarkers3.features.forEach(renderMarkers);
  } else if (river == 1 && mountain == 1 && yurt == 1 && fireplace == 1 && offgrid == 1) {
    console.log("Here's your results.");
    // loop through the locations array and compare the tag that the user chose to the tag of each location
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].tag == "river") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "mountain") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "yurt") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "fireplace") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "offgrid") {
        generateLocation(i);
        generateButtons();
      };//end if statement
    };//end loop checking all locations
    customMarkers1.features.forEach(renderMarkers);
  } else {
    console.log("Here's your results.");
    // loop through the locations array and compare the tag that the user chose to the tag of each location
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].tag == "river") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "forrest") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "yurt") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "fireplace") {
        generateLocation(i);
        generateButtons();
      };//end if statement
      if (locations[i].tag == "offgrid") {
        generateLocation(i);
        generateButtons();
      };//end if statement
    };//end loop checking all locations
    customMarkers5.features.forEach(renderMarkers);
  }
}

//-----display filtered results-----
function generateLocation(i) {
  result.innerHTML += `
  <div class="location-profile">
    <img id="profile" src="${locations[i].image_url}" height="300" alt="${locations[i].name}">
    <div class="content-wrapper">
      <h4>${locations[i].name}</h4><h4 id="price-pn">$${locations[i].price}p/n</h4>
      <h5>${locations[i].location}</h5>
      <a href="#toolbar" class="details-button" id="${locations[i].id}">DETAILS</a>
    </div>
  </div>
  `
};

// function to generate and open details button 
function openDetails(id) {
  console.log('running');
  swiper.slideNext();
  profile.innerHTML = "";
  profile.innerHTML += `
  <h3>${locations[id].name}</h3>
  <div id="accommodation-gallery" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${locations[id].carouselImgOne}" alt="${locations[id].name}" height="600">    
      </div>
      <div class="carousel-item">
        <img src="${locations[id].carouselImgTwo}" alt="${locations[id].name}" height="600">    
      </div>
      <div class="carousel-item">
        <img src="${locations[id].carouselImgThree}" alt="${locations[id].name}" height="600">    
      </div>
      <div class="carousel-item">
        <img src="${locations[id].carouselImgFour}" alt="${locations[id].name}" height="600">    
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#accommodation-gallery" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#accommodation-gallery" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div id="detailsdata-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <div id="details-card">
        <ul>
          <li><h3>DETAILS |</h3></li>
          <li><h4>$${locations[id].price} Per Night |</h4></li>
          <li><i class="bi bi-${locations[id].icon1}"></i></li>
          <li><i class="bi bi-${locations[id].icon2}"></i></li>
          <li><i class="bi bi-${locations[id].icon3}"> |</i></li>
          <li><p>Max ${locations[id].maxGuests} Guests |</p></li>
          <li><p>Min ${locations[id].minNights} nights - Max ${locations[id].maxNights} nights</p></li>
        </ul>
      </div>
      <a id="back-to-results" class="button" href="#toolbar">BACK</a> 
    </div>
  </div>
  </div>
  `;

  const backresultsBtn = document.getElementById("back-to-results");

  backresultsBtn.onclick = function () {
    swiper.slideTo(7);
    console.log("back to results");
  }

  let map = new mapboxgl.Map({
    container: 'single-map', // container ID
    style: 'mapbox://styles/rebscallion/cl4mg8yff000214o6io5dxph6',
    center: [173.39740555625633, -41.276847699617434], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });

  const alpine = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [170.06358969352164, -44.27706632382975]
        },
        properties: {
          title: `Alpine Cubes`,
        }
      },
    ]
  };

  const grove = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [176.22086615369835, -37.71316875027767]
        },
        properties: {
          title: `The Grove Farm Stay`,
        }
      }
    ]
  };

  const water = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [174.75752561969392, -41.28229646756005]
        },
        properties: {
          title: `Water Front Glamping`,
        }
      }
    ]
  };

  const tui = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [175.99331623533624, -40.927363229587606]
        },
        properties: {
          title: `Ica View`,
        }
      }
    ]
  };

  const pa = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [174.5663760081477, -36.11722358985489]
        },
        properties: {
          title: `Pa Hill Cabin`,
        }
      }
    ]
  };

  const ica = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [175.99331623533624, -40.927363229587606]
        },
        properties: {
          title: `Ica View`,
        }
      }
    ]
  };

  const raglan = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [174.85167102585922, -37.82006974308712]
        },
        properties: {
          title: `Raglan Treehouse`,
        }
      }
    ]
  };

  const hinterland = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [177.97303786111274, -38.6461672000733]
        },
        properties: {
          title: `Hinterland Retreat`,
        }
      }
    ]
  };

  const yurt = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [175.45881622850425, -41.20987624356458]
        },
        properties: {
          title: `Yurt on York`,
        }
      }
    ]
  };

  const sea = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [173.25835497040026, -41.320534889424486]
        },
        properties: {
          title: `Seaside Glamping`,
        }
      }
    ]
  };

  const rebs = {
    type: 'FeatureCollection',

    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [174.77222020328986, -41.33229995052463]
        },
        properties: {
          title: `Rebekah's House`,
        }
      }
    ]
  };

  function renderMap(currentMarker) {

    let newMarkerElement = document.createElement('div');
    newMarkerElement.className = 'marker';

    new mapboxgl.Marker(newMarkerElement)
      .setLngLat(currentMarker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({
        offset: 25
      })
        .setHTML('<h3>' + currentMarker.properties.title + '</h3>'))
      .addTo(map);
  };

  let currentId = locations[id].id;
  console.log(currentId);

  if (currentId == 0) {
    ica.features.forEach(renderMap);
  } else if (currentId == 1) {
    raglan.features.forEach(renderMap);
  } else if (currentId == 2) {
    hinterland.features.forEach(renderMap);
  } else if (currentId == 3) {
    alpine.features.forEach(renderMap);
  } else if (currentId == 4) {
    grove.features.forEach(renderMap);
  } else if (currentId == 5) {
    sea.features.forEach(renderMap);
  } else if (currentId == 6) {
    yurt.features.forEach(renderMap);
  } else if (currentId == 7) {
    water.features.forEach(renderMap);
  } else if (currentId == 8) {
    tui.features.forEach(renderMap);
  } else if (currentId == 9) {
    pa.features.forEach(renderMap);
  } else {
    rebs.features.forEach(renderMap);
  };


  extraD.innerHTML = "";
  extraD.innerHTML += `
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ${locations[id].description}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Cooking Facillities and Meal Options
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ${locations[id].meal}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Booking Policy
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Check-in: 3pm  Check-out: 11am 
      <br>
      Single Night Surcharge:
      <br>
      Where single nights are bookable (see Minimum Stay Periods) a Single Night Surcharge of $50 applies. Please apply this during the online booking process.
      <br>
      The Single Night Surcharge applies to all one night stays. By their nature, glamping sites are more remote and time-consuming to service than more standard accommodation types. Therefore, in order to cover the costs and time involved, a Single Night Surcharge is applicable to all one night stays.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Address
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ${locations[id].address}
      </div>
    </div>
  </div>
</div>  
  `;
};

// -----buttons-----
const entertBtn = document.getElementById('sun-container');
entertBtn.onclick = function () {
  swiper.slideNext();
}

const startBtn = document.getElementById('start-button');

startBtn.onclick = function () {
  swiper.slideTo(2);
};

function bookBtn() {
  swiper.slideTo(7);
  showAllAccomodation();
  generateButtons();
};

function home() {
  swiper.slideTo(1);
};
