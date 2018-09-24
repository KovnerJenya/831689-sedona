
      var popupbtn = document.querySelector(".popup-button");
      var popup = document.querySelector(".hotels-form");
      var input1 = popup.querySelector("#arrival");
      var input2 = popup.querySelector("#departure");
      var submitbtn = popup.querySelector(".search-button");

      popup.classList.remove("show-popup");

      popupbtn.addEventListener("click",function (evt) {
        evt.preventDefault();
        popup.classList.toggle("show-popup")
        popup.classList.remove("modal-error");
      });

      submitbtn.addEventListener("click", function (evt) {
        if (!input1.value || !input2.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        }
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
