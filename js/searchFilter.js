// Search Filter
function searchFilter() {
  var input, filter, div, list, a, i;
  input = document.getElementById('inputSearchFilter');
  filter = input.value.tuUpperCase();
  div = document.getElementById('programList');
  list = div.getElementsByTagName('a');
  for (var i = 0; i < list.length; i++) {
    if (list.innerHTML.tuUpperCase().indexOf(filter > -1)) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none"
    }
  }
}
