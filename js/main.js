let allData = [];

let httpReq = new XMLHttpRequest();
let category = "general";
getData(category);


let links = document.getElementsByClassName("nav-link");



for(let i=0 ; i<links.length; i++)
{
    links[i].addEventListener( "click", function(e)
    {
        category =e.target.text;
        getData(category)
    
    })
   

    
}

function getData(category)
{

    httpReq.open("Get" , "http://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=c51b803189844b69a66ed5c3a1552a34" , true);

    httpReq.send();

    httpReq.onreadystatechange = function()
   {
       if (httpReq.readyState = 4 && httpReq.status == 200)
       {
          allData = JSON.parse(httpReq.response).articles;
          console.log(allData)
          displayData()
       

        }   
    }

}

function displayData()
{

    let temp = ``;
    for(let i=0 ; i<allData.length ; i++)
    {
        temp+=`
        <div class="col-lg-3 col-md-6">
            <div class="item">
                <img src="${allData[i].urlToImage}" class="img-fluid">
                <h5>${allData[i].title}</h5>
                <p id="cut">${allData[i].description}</p>
            </div>

        </div>`
    }

   document.getElementById("rowData").innerHTML=temp;
}


