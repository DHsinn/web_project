// function ppp(){document.getElementById('sound1').onplay();}
// function sss(){document.getElementById('sound1').pause();}
let i_t = document.getElementById('info-table');

$.getJSON("./fest.json", function(jsonData){
  let th = document.createElement('th');
  $.each(jsonData, function(_, data){
    if (data["광역단체명"]==info.getAttribute('data-name')){
      let tr = document.createElement('tr');
      for (let i of Object.values(data).slice(1)){
        let td = document.createElement('td');
        td.innerText+=i;
        tr.appendChild(td);
        i_t.appendChild(tr);
      }
    }
  })
})
