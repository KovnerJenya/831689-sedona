
      var popupbtn = document.querySelector(".popup-button");
      var popup = document.querySelector(".hotels-form");

      popupbtn.addEventListener("click",function (evt) {
        evt.preventDefault();
        popup.classList.toggle("show-popup")
      });


var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [34.87195183267487,-111.756269], // Sedona
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter());

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.events
        .add('mouseenter', function (e) {

            e.get('target').options.set('preset', 'islands#greenIcon');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('preset');
        });



}
