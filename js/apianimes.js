var urlBase = "https://api.jikan.moe/v4/"
var animesJson = null
function comsumirAPIAnimes(){
    var path = "top/anime?type=ona" 
    var endPoint = urlBase + path
    fetch(endPoint)
    .then(respuesta => respuesta.json())
    .then(animesJson => {
        adicionarDatosTabla(animesJson)
        adicionarDatosCombo(animesJson)
        this.animesJson = animesJson
    }) 
}

function adicionarDatosTabla(animesJson){
    var tablaAnimes = document.getElementById("tablaAnimes")
    animesJson.forEach(anime => {
        var fila = tablaAnimes.tBodies[0].insertRow(-1)
        var columnaTituloIngles = fila.insertCell(0)
        var columnaTituloJapones = fila.insertCell(1)
        var columnaImagen = fila.insertCell(3)
        var columnaNumeroEpisodios = fila.insertCell(2)
        var columnaDuracion = fila.insertCell(4)
        columnaDuracion.classList.add('centrarTexto')

        var imagen = crearImagen(anime.flags.png,pais.flags.alt)


        columnaTituloIngles.innerHTML = anime.title_english 
        columnaTituloJapones.innerHTML = anime.title_japanese
        columnaDuracion.innerHTML = anime.duration
        columnaNumeroEpisodios = anime.episodes
        columnaImagen.appendChild(imagen)
    });
}

function adicionarDatosCombo(animesJson){
    var comboAnimes = document.getElementById('comboAnimes')
    comboAnimes.addEventListener('change', buscarAnime)
    animesJson.forEach(anime => {
        var option = crearTagConTexto('option', pais.name.common)
        adicionarTagAContenedor(option, comboAnimes)
    });
}

function buscarAnimes(){
    tablaAnimes.tBodies[0].innerHTML=""
    var animeSeleccionado = comboAnimes.value
    var animeEncontrado = animesJson.find(anime=>anime.title_english == animeSeleccionado)

}





