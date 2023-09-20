
fetchData()
let html
function fetchData() {
    var cardItems = document.getElementById('cardItems');
    let res = fetch('https://cynthiaesthermetilda.github.io/Xhrdemo/products.json')
    res.then(res => res.json()).then(data => {
        console.log("data", data);
        html = '<div class="row row-cols-1 row-cols-md-3 g-4">'
        data.forEach(element => {
            html += `<div class="col" >
                <div class="card">
                    <img src="${element.image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" ">${element.name}</h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text">${element.price}</p>
                    </div>
                </div>
            </div>`
        });
        html += '</div>'
        cardItems.innerHTML = html;
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
}

searchBtn.addEventListener('click', search)

function search() {
    let check = true;
    var search = document.getElementById('search').value;
    var cardDiv = document.getElementById('cardItems');
    var cardName = cardDiv.getElementsByTagName('h5');

    const searchItemLower = search.toLowerCase();

    for (let i = 0; i < cardName.length; i++) {
        const currentName = cardName[i];
        const currentNameLower = currentName.textContent.toLowerCase();
        console.log(currentNameLower);

        if (currentNameLower === searchItemLower) {
            let res = fetch('https://cynthiaesthermetilda.github.io/Xhrdemo/products.json')
            res.then(res => res.json()).then(data => {
                html=" "
                html = '<div class="row row-cols-1 row-cols-md-3 g-4">'
                data.forEach(element => {
                    if (element.name.toLowerCase() === currentNameLower) {
                        html += `<div class="col" >
                <div class="card">
                    <img src="${element.image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" ">${element.name}</h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text">${element.price}</p>
                    </div>
                </div>
            </div>`
                    }
                });
                html += '</div>'
                cardItems.innerHTML = html;
            })
        } else {
            check = false;
            console.log("Checked",false)
        }
    }
    if (!check) {
        html = "<h3>No products found</h3>"
        cardItems.innerHTML = html
    }
}


function sortByName(){

}

function sortByPrice(){
    
}