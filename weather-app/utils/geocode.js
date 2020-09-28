const request = require("request");

const geocode = (address, callback) => {
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=pk.eyJ1Ijoic2FuamFuYTIzIiwiYSI6ImNrZm1ma2h5bDEwcjQycHFteWl4MWVvZGQifQ.mVD0kzuKKara5Q45SfaeVg&limit=1";

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Check your internet connectivity!");
        } else if (response.body.features.length === 0) {
            callback("Enter valid location", undefined);
        } else {
            callback(undefined, {
                longitute: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                place: response.body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
