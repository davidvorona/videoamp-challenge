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
      { width: 139, height: 92 },
    ];
    /* *** adSizes boilerplate *** */

    // for testing jQuery vs native selectors: http://jsperf.com/

    // first find all img, a, video, iframe tags
    // filter ads that are displayed, not hidden
    // filter tags that are within adSizes object

    const findPotentialAds = selector => Array.prototype.slice.call(document.querySelectorAll(selector));

    const findDimensions = el => (
        {
            width: el.width,
            height: el.height,
            position: {
                x: el.offsetLeft,
                y: el.offsetTop,
            },
        }
    );

    const isInAdSizesObj = el =>
        adSizes.some(dimension =>
            (dimension.width === el.width && dimension.height === el.height)
        );

    const isVisible = el =>
        (el.offsetParent !== null);

    const filterAds = () => {
        // const aAds = findPotentialAds("a");
        const imgAds = findPotentialAds("img");
        // const videoAds = findPotentialAds("video");
        // const iFrameAds = findPotentialAds("iframe");

        const results = imgAds.map(findDimensions).filter(isInAdSizesObj).filter(isVisible);
        console.log("Results: ", results);
    };

    filterAds();
}());
