var form = document.getElementById('addForm');
var itemList = document.getElementById('item');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item');

    var li = document.createElement('li');

    var console: 'list-group-item';
}

//filter event
filter.addEventListener('keyup', filterItems);



//filer Items
function filterItems(e){
    var text =e.target.value.toLowerCase();

    var items = items = itemList.getElementsByTagName('li');

    Array.form(items).forEach(function(item){
      var itemName = item.firstchild.textContent;  
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      }else{
       item.style.display = 'none' ;
      }
    });
}
