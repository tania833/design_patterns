const GeoCoder = function () {
    this.getLatLong = function (address) {
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    }
}

const GeoProxy = function () {
    const coder = new GeoCoder()
    const geoCache = {}

    return {
        getLatLng(address) {
            if (!geoCache[address]) {
                const response = coder.getLatLong(address)
                geoCache[address] = response
            }
            console.log(address, geoCache[address])
            return geoCache[address]
        },
        getCount() {
            return Object.keys(geoCache).length
        }
    }
}

const geo = new GeoProxy()
geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log("\nCache size: " + geo.getCount());