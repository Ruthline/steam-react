let credenciales=[
    {
        id:1,
        usuario: "bpinzon123",
        password: "STEAM2022"
    },
    {
        id:2,
        usuario: "profesores123",
        password: "STEAM2022"
    },
    {
        id:3,
        usuario: "svelez123",
        password: "STEAM2022"
    }


]

export function getAllCredenciales(){
    return credenciales;
}

export function getCourse(id){
    return credenciales.find((c)=>c.id===id);//El elmento se llama asi misma, para cada elemento s=studie va tener un nombre interno llamado job, lo que interesa es que debe coincidir con el id de la funcion
}