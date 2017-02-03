// for compatability across browsers / webpages
(function() {
    /* *** adSizes boilerplate *** */
    // const adSizes = [
    //   { width: 300, height: 250 },
    //   { width: 320, height: 260 },
    //   { width: 300, height: 600 },
    //   { width: 120, height: 60 },
    //   { width: 970, height: 90 },
    //   { width: 88, height: 31 },
    //   { width: 180, height: 150 },
    //   { width: 160, height: 600 },
    //   { width: 728, height: 90 },
    //   { width: 550, height: 480 },
    //   { width: 970, height: 250 },
    //   { width: 250, height: 250 },
    //   { width: 240, height: 400 },
    //   { width: 336, height: 280 },
    //   { width: 300, height: 100 },
    //   { width: 720, height: 300 },
    //   { width: 468, height: 60 },
    //   { width: 234, height: 60 },
    //   { width: 120, height: 90 },
    //   { width: 125, height: 125 },
    //   { width: 120, height: 600 },
    // ];

    const adSizes = {
        "88": ["31"],
        "120": ["60", "90", "600"],
        "125": ["125"],
        "160": ["600"],
        "180": ["150"],
        "234": ["60"],
        "240": ["400"],
        "250": ["250"],
        "300": ["100", "250", "600"],
        "320": ["260"],
        "336": ["280"],
        "468": ["60"],
        "550": ["480"],
        "720": ["300"],
        "728": ["90"],
        "970": ["90", "250"],
    };

    // for testing jQuery vs native selectors: http://jsperf.com/

    // first find all img, a, video, iframe tags
    // filter ads that are displayed, not hidden
    // filter tags that are within adSizes object

    const findPotentialAds = selector => Array.prototype.slice.call(document.querySelectorAll(selector));

    const aAds = findPotentialAds("a");
    const imgAds = findPotentialAds("img");
    const videoAds = findPotentialAds("video");
    const iFrameAds = findPotentialAds("iframe");
    console.log("imgAds: ", imgAds);
    console.log("single imgAd: ", imgAds[0]);
    console.log("single imgAd width: ", imgAds[0].width);

    const findDimensions = (ad) => {
      console.log('Will return dimension of each ad from array of potentials.');
    };

}());
