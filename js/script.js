var map = L.map('map').setView([-23.5, -46.6], 12);

var tiles = L.tileLayer('https:\/\/{s}.tile.openstreetmap.org\/{z}\/{x}\/{y}.png',{maxZoom: 19}).addTo(map);


function onEachFeature(feature, layer) {
    var popupContent = '<p>' + feature.properties.name + '</p>';
    if (feature.properties && feature.properties.popupContent) {
        popupContent += "<br>"+feature.properties.popupContent;
        popupContent += "<br><span>Temperatura: </span>"+feature.properties.temperatura;
        popupContent += "<br><span>Umidade: </span>"+feature.properties.umidade;
        popupContent += "<br><span>Precipitação: </span>"+feature.properties.precipitacao;
        popupContent += "<br><span>Visibilidade: </span>"+feature.properties.visibilidade;
        popupContent += "<br><span>Vento: </span>"+feature.properties.vento;
        popupContent += "<br><span>Coordenadas: </span>"+feature.geometry.coordinates;
    }
    layer.bindPopup(popupContent);
}


$.getJSON("https://terraq.com.br/api/teste-leaflet/pontos", function(data) {}).done(
    function(data) {
        var featureCollection = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                var iconUrl = feature.properties.icon;
                var featureIcon = L.icon({
                    iconUrl: "http:\/\/maps.google.com\/mapfiles\/ms\/icons\/blue-dot.png",
                    iconSize: [32, 37],
                    iconAnchor: [16, 37],
                    popupAnchor: [0, -28]
                });
                return L.marker(latlng, {icon: featureIcon});
            },
            onEachFeature: onEachFeature
        }).addTo(map);
    }	
    	
);

var el = document.querySelectorAll('.map2')
	el[0].addEventListener('click' ,()=>{
		// console.log('opa');

var tiles = L.tileLayer('https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/World_Imagery\/MapServer\/tile\/{z}\/{y}\/{x}',{maxZoom: 19}).addTo(map);

})

var el = document.querySelectorAll('.map1')
	el[0].addEventListener('click' ,()=>{

        var tiles = L.tileLayer('https:\/\/{s}.tile.openstreetmap.org\/{z}\/{x}\/{y}.png',{maxZoom: 19}).addTo(map);

})

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){

    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main(){
    let data = fazGet("https://terraq.com.br/api/teste-leaflet/user")
    let usuario = JSON.parse(data);
    console.log(usuario)
    let tabela = document.getElementById("tabela");
    usuario.forEach(element => {
        
    });(element =>{
        let linha = criaLinha(element)
        tabela.appendChild(linha);
    })
}

main()