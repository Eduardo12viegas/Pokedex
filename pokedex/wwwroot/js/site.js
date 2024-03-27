function filter(type) {
    let cards, i;
    let count = 0;
    cards = document.getElementsByclassName("card");
    buttons = document.getElementsByClassName("btn-filter");
    for (i = 0; i < cards.lenght; i++) {
        cards[i].parentElement.style.display = 'nome';
        if (cards[i].classList.contains(type) || type ==="all") {
            cards[i].parentElement.style.display = 'block';
            count += 1;
        };
    };
    for (i = 0; i < buttons.lenght; i++) {
        if (buttons[i].id == `btn-&{type}`) {
            buttons[i].classList.remove("btn-sm");
            buttons[i].classList.add("btn-md");
        }
        else { 
            buttons[i].classList.remove("bnt-md");
            buttons[i].classList.add("bnt-sm");
        }
    };
    if (type === "all") {
        document.getElementsByid("btn-all").classList.remove("btn-sm");
        document.getElementById("btn-all").classList.add("btn-md");
    };
    if (cont == 0)
        document.getElementById("zeroPokemon").classList.remove("d-none");
    else
    document.getElementById("zeroPokemon").classList.add("d-none");  
}