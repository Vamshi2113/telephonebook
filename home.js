let enter_btn=document.getElementsByClassName("enter_btn")[0];
enter_btn.addEventListener("click",(event)=>{
    fetch('https://localhost:80/', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 78912 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}
)
