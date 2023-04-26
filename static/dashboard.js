let form_submit_btn=document.getElementsByClassName("form_submit_btn")[0];
// form_submit_btn.addEventListener("click",(event)=>{
//     event.preventDefault();

// })

function clicked(event){
    let source=event.target
    let id=source.id;
    let parentnode=event.target.parentElement
    parentnode.innerHTML="DELETED";

    let body=JSON.stringify({"id":id});

    fetch("http://localhost/delete_number", {
    method: "POST",
    body: JSON.stringify({"id":id}),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json())
.then(response => {console.log(response)
if(response.sucess=="sucess"){

}
}
);

}