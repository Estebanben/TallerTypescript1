import {serie} from './Serie.js' 
import {series} from './datos.js';

let seriesTable: HTMLElement = document.getElementById("series")!;

function datosSerie(listaSeries: serie[]): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");
    for(let serie of listaSeries){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td style="color: rgb(36, 129, 211)"><a href="${serie.page}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}

function promedioSeries(listaSeries: serie[]):void{
    let trElement: HTMLElement = document.createElement("tr");
    let tdElement: HTMLTableCellElement = document.createElement("td");
    let sumaSeries: number = 0;
    series.forEach(n => sumaSeries+= n.seasons);

    let average: number =sumaSeries/listaSeries.length;
    tdElement.colSpan = 4;
    tdElement.textContent = `Seasons average: ${average}`;
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);


}

datosSerie(series);
promedioSeries(series);