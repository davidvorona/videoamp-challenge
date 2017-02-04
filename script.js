// for compatability across browsers / webpages
(function() {
    /* *** adSizes boilerplate *** */
    const adSizes = [
      { width: 300, height: 250 },
      { width: 320, height: 260 },
      { width: 300, height: 600 },
      { width: 120, height: 60 },
      { width: 970, height: 90 },
      { width: 88, height: 31 },
      { width: 180, height: 150 },
      { width: 160, height: 600 },
      { width: 728, height: 90 },
      { width: 550, height: 480 },
      { width: 970, height: 250 },
      { width: 250, height: 250 },
      { width: 240, height: 400 },
      { width: 336, height: 280 },
      { width: 300, height: 100 },
      { width: 720, height: 300 },
      { width: 468, height: 60 },
      { width: 234, height: 60 },
      { width: 120, height: 90 },
      { width: 125, height: 125 },
      { width: 120, height: 600 },
    ];
    /* *** adSizes boilerplate *** */

    /* *** config Firebase *** */
    const config = {
        apiKey: "AIzaSyC1yPZRZw12CGKZlY2xByWOocLJgp-gTdc",
        authDomain: "videoamp-challenge-d2d59.firebaseapp.com",
        databaseURL: "https://videoamp-challenge-d2d59.firebaseio.com",
        storageBucket: "videoamp-challenge-d2d59.appspot.com",
        messagingSenderId: "642408642719",
    };
    firebase.initializeApp(config);
    const adsRef = firebase.database().ref().child("ads");
    /* *** config Firebase *** */

    /* for testing jQuery vs native selectors: http://jsperf.com/ */

    // finds all potentialAds on DOM that match certain selectors
    const findPotentialAds = selector => Array.prototype.slice.call(document.querySelectorAll(selector));

    // return dimensions/position obj for single advertisement array
    const findDimensions = el => (
        {
            width: el.clientWidth,
            height: el.clientHeight,
            position: {
                x: el.offsetLeft,
                y: el.offsetTop,
            },
        }
    );

    // filters ads that match at least one dimension obj in adSizes
    const isInAdSizesObj = el =>
        adSizes.some(dimension =>
            (dimension.width === el.width && dimension.height === el.height)
        );

    // filters ads that are visible
    const isVisible = el =>
        (el.offsetParent !== null);

    // executes helper functions and returns completed ad object
    const filterAds = () => {
        let ads = {};
        const aAds = findPotentialAds("a > img");
        const imgAds = findPotentialAds("img > a");
        const videoAds = findPotentialAds("video");
        const iFrameAds = findPotentialAds("iframe");

        const results = aAds.concat(imgAds).concat(videoAds).concat(iFrameAds)
            .map(findDimensions)
            .filter(isInAdSizesObj)
            .filter(isVisible);

        ads.location = window.location.href;
        ads.advertisements = results;

        console.log(ads);
        if (ads.advertisements.length > 0) adsRef.push(ads);
    };

    filterAds();
}());
