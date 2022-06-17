let courses=[
    {
        id:1,
        image:"https://images.unsplash.com/photo-1466784828399-9a9921e8bdfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNTIyNDI3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        title: "Arte"
       
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1651980802497-2ad4b4adbb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        title: "Ciencia"
    },
    {
        id:3,
        image:"https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        title: "Matemáticas"
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1643307957348-134d9ed7ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        title: "Ingenieria"
    },
    {
        id:5,
        image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        title: "Tecnología"
    }
]


export function getCourses(){
    return courses;
}

export function getCourse(id){
    return courses.find((s)=>s.id===id);//El elmento se llama asi misma, para cada elemento s=studie va tener un nombre interno llamado job, lo que interesa es que debe coincidir con el id de la funcion
}