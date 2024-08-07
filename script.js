// JS fetch Api  

fetch("data.json")
        .then(Response=>Response.json())
        .then(data=>{
            let x="" ;
            for(let product_cards of data){
                x+=`
                <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="card" >
                    <img src="${product_cards.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${product_cards.name}</h5>
                      <p class="card-text">${product_cards.p}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
                `
            }
            document.querySelector("#demo").innerHTML=x;
        })


// Jquery  Ajax method 

$(document).ready(function() {
    $.ajax({
        url: "data.json",
        type: "GET",
        success: function(data) {
            let y = "";
            $.each(data, function(index, value) {
                y += `
                <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
                    <div class="card">
                        <img src="${value.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${value.name}</h5>
                          <p class="card-text">${value.p}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                `;
            });
            $("#demo").html(y);
        },
        error: function(error) {
            console.error("Error fetching data", error);
        }
    });
});

