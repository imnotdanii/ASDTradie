let searchService = document.querySelector('#searchService');
let searchQueryHTML = document.querySelector('.searchQuery');

// get the services that have query in their title or description
searchService.addEventListener('click',async function(){
    console.log('button clicked');

    let searchQuery = searchQueryHTML.value;
    console.log(searchQuery);
    let services = await fetch(`http://localhost:3000/search/searchService?searchQuery=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => data);
    let serviceList = document.querySelector('.serviceList');
    serviceList.innerHTML = '';
    let id = 1;
    console.log(services);
    services.forEach((service) =>{
        let serviceListHTML = `
        <tr>
        <th scope="row">${id++} <input type="hidden" value="${service.id}" class="serviceId"/> </th>
        <td>${service.serviceTitle}</td>
        <td>${service.description}</td>
        <td class="d-flex">
         <a href="/serviceDP?id=${service.id}" class="btn btn-link">View Details</a>
        <button class="btn btn-link updateServiceBtn">Edit</button></td>
        
    </tr>`
        serviceList.insertAdjacentHTML('beforeend',serviceListHTML );

    })
    // button to go back to all services
    let backButton = `<button class="btn btn-link backToAllServices" >Back to all services</button>`;
    serviceList.insertAdjacentHTML('beforeend',backButton);
}
)


document.addEventListener('click', async (e) =>{
    if(e.target.classList.contains('backToAllServices')){
    //refresg the page
    location.reload();
    }
})
    
