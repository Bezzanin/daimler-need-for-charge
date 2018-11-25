const restaurantMarkers = [
    {
      latlng: {
        latitude: 48.777085,
        longitude: 9.174197,
      },
      title: "EnBW Ladestation",
      icon: require('../assets/enbw.png'),
      description: "Supported your car model. Available Free spaces",
      image: require('../assets/charging-st.png'),
      url: 'https://www.enbw.com/elektromobilitaet/produkte/mobilityplus-app/ladestation-finden'
    },
    {
      latlng: {
        latitude: 48.786549,
        longitude: 9.162967,
      },
      title: "Ensto",
      icon: require('../assets/ensto.png'),
      description: "Prefered charging station with best price",
      image: require('../assets/charging-st.png'),
      url: 'https://www.ensto.com/'
    },
    {
      latlng: {
        latitude: 48.78250,
        longitude: 9.17575,
      },
      title: "EnBW Ladestation",
      icon: require('../assets/enbw.png'),
      description: "Supported your car model. Available Free spaces",
      image: require('../assets/charging-st.png'),
      url: 'https://www.enbw.com/elektromobilitaet/produkte/mobilityplus-app/ladestation-finden'
    },

  ];

  const foodMarkers = [
    {
      latlng: {
        latitude: 48.777085,
        longitude: 9.174197,
      },
      title: "Espresso House",
      description: "Beautiful latte with salmon bagel for 5.90€",
      image: require('../assets/ehouse.png'),
      url: 'https://espressohouse.com/',
      base: 'habbits'
    },
    {
      latlng: {
        latitude: 48.78250,
        longitude: 9.17575,
      },
      title: "Taffa restaurant",
      description: "Breakfasts every day from 9:00",
      image: require('../assets/foodbg.png'),
      url: 'https://www.teknologforeningen.fi/?lang=en',
      base: 'location'
    },
    {
      latlng: {
        latitude: 48.786549,
        longitude: 9.162967,
      },
      title: "McDonalads",
      description: "McMuffun with bacon and egg for 4.90€",
      image: require('../assets/mac.png'),
      url: 'https://www.mcdonalds.fi/fi.html',
      base: 'ride history'
    }
  ];

  const activityMarkers = [
    {
      latlng: {
        latitude: 48.777085,
        longitude: 9.174197,
      },
      title: "Body Center Gym",
      description: "Available 24 hours per day",
      image: require('../assets/gym.png'),
      url: 'https://www.bodycenter.fi',
      base: 'ride history'
    },
    {
      latlng: {
        latitude: 48.78250,
        longitude: 9.17575,
      },
      title: "Leppävaara swimming hall",
      description: "You usually visit this place on Mondays",
      image: require('../assets/pool.png'),
      url: 'http://www.espoo.fi/fi-FI/Kulttuuri_ja_liikunta/Liikunta/Liikunta_ja_ulkoilupaikat/Uimahallit/Leppavaara',
      base: 'ride history'
    },
    {
      latlng: {
        latitude: 48.786549,
        longitude: 9.162967,
      },
      title: "Kinopoli",
      description: "Fantastic Beasts part two premiere today",
      image: require('../assets/kino.png'),
      url: 'http://www.kinopoli.fi/',
      base: 'personal interest'
    }
  ];

export {restaurantMarkers, foodMarkers, activityMarkers};
