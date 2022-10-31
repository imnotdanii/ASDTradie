// // function to get all the services
async function getServices(){
  // getting the services
    return await fetch('http://localhost:3000/service')
    .then((response) => response.json()) // getting the response as json
    .then((data) => data); // getting the data
}

// function to display the services on content load
document.addEventListener('DOMContentLoaded' ,async function(){
  // getting the services by calling the function
    let services = await getServices();
    // getting the HTML element to display the services
    let serviceTiles = document.querySelector('.servicesTile-list');
    serviceTiles.innerHTML = '';
    // if(Array.isArray(services)){
    //     console.log('service is an array');
    // }else{
    //     console.log('service is not an array');
    // }
    // displaying the services in the HTML element by looping through the services
    for(let i = 0; i < 3; i++){
      let serviceHTML = `
      <div class="card col-4" >
      <img class="card-img-top" src="${services[i].imageURL}" alt="${services[i].serviceTitle}">
      <input type="hidden" value="${services[i].id}" class="serviceId">
      <div class="card-body">
        <h5 class="card-title">${services[i].serviceTitle}</h5>
        <p class="card-text">${services[i].description}</p>
        <button class="btn btn-link reqService">Request Service</button>
        <p class="hidden reqServiceConfirmationMsg">Service already requested</p>
          <a href="/serviceDP?id=${services[i].id}" class="btn btn-link">View Details</a>
      </div>
    </div>
      `;
      // inserting the HTML into the HTML element
      serviceTiles.insertAdjacentHTML('beforeend',serviceHTML );

    }
    services.forEach((service) =>{
       

    })
})