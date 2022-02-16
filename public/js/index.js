/* setTimeout(age, 3000)

function age(){
  console.log("aging game")
  setTimeout(age, 3000)
}
var anElement = document.getElementById("app")

var anElement = document.createElement("strong")
anElement.innerHTML = "Hello World"

var app = document.getElementById("app")
app.appendChild(anElement) */

function age(){
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "/js/data.json")
  xhr.onload = function(){
    var data = JSON.parse(this.response)
    createTable(data)
  }
  xhr.send
}

function createRow(name, points){
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(points))
  return aRow
}

function createTable(data){
  var appElement = document.getElementById("app")
  var aTable = document.createElement("table")
  appElement.appendChild(aTable)
  aTable.appendChild(createRow(data[0].name, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].points))
}





