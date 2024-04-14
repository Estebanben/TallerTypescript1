import { series } from './datos.js';
var seriesTable = document.getElementById("series");
function datosSerie(listaSeries) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie_1 = listaSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie_1.id, "</td>\n        <td style=\"color: rgb(36, 129, 211)\"><a href=\"").concat(serie_1.page, "\" target=\"_blank\">").concat(serie_1.name, "</a></td>\n        <td>").concat(serie_1.channel, "</td>\n        <td>").concat(serie_1.seasons, "</td>");
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}
function promedioSeries(listaSeries) {
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    var sumaSeries = 0;
    series.forEach(function (n) { return sumaSeries += n.seasons; });
    var average = sumaSeries / listaSeries.length;
    tdElement.colSpan = 4;
    tdElement.textContent = "Seasons average: ".concat(average);
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);
}
datosSerie(series);
promedioSeries(series);
