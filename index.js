function cargarJSON(){
    fetch('index.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.table(data)

        })
        .catch((error)=>{
            console.log(error);
        });

}

cargarJSON();
