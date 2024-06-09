let List = [];

function Check(event) {
    if(event.key === 'Enter') {
        add();
    }
}

function UpdateList() {
   let html = '';
   for(let i = 0; i < List.length; ++i) {
   work = List[i].name;
   date = List[i].date;
   let temp = `<div> ${work} </div> <div> ${date} </div> <button class = "Delete-button" onclick = "RemoveWork(${i})"> Delete </button>`;
   html += temp;
  }

   document.querySelector('.show-work').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', (event) => {
    let item = JSON.parse(localStorage.getItem('List'));
    if (item) {
        List = item;
        UpdateList();
    }
});

function RemoveWork(index) {
    List.splice(index , 1);
    UpdateList();
    localStorage.setItem('List' , JSON.stringify(List));
}

function add() {
   let work = document.querySelector('.input-element-js').value;
   let date = document.querySelector('.input-date-js').value;
   List.push({name : work , date : date});

   UpdateList();
   localStorage.setItem('List' , JSON.stringify(List));
}