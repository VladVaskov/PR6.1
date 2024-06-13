const select = document.getElementById("select")

function q() {
  switch (select.selectedIndex) {
    case 0:
      document.body.style.backgroundColor = "#808080"
      break;
    case 1:
      document.body.style.backgroundColor = "#0000ff"
      break;
    case 2:
      document.body.style.backgroundColor = "#008000"
      break;
    default:
      break;
  }
}

q()

select.addEventListener("change", q)
