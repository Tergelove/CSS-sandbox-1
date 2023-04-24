function initMap() {
    const loc = { lat: 48.252890, lng:16.443570};

    const map = new  google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    })
    const marker = new google.maps.Marker({position:
    loc, map:map});
}
