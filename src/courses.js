let courses=[
    {
        id:1,
        image:"https://media3.giphy.com/media/l0Iy3qmrODEarmfHq/giphy.gif?cid=ecf05e47n4hxxs6u6suhkx28slu5938ro8f5eld1mpkwkzr8&rid=giphy.gif&ct=g",
        title: "Arte",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:2,
        image:"https://media3.giphy.com/media/o65WgXSDBVY1G/giphy.gif?cid=ecf05e47aq9zgefha69plm6ov7pi2o79am1sh91m21mzknvi&rid=giphy.gif&ct=g",
        title: "Ciencia",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:3,
        image:"https://media2.giphy.com/media/l4FGm96DtL5NhI0nu/giphy.gif?cid=ecf05e47ccxknqo9vyzn2l02twg6s9mj7yv14ab8x3ly59bq&rid=giphy.gif&ct=g",
        title: "Matemáticas",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:4,
        image:"https://media3.giphy.com/media/l3vRhrALMlMRzABXO/giphy.gif?cid=ecf05e47e7u2tdekg1962grci4wkatsgppsla23ihshwbbsl&rid=giphy.gif&ct=g",
        title: "Ingenieria",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    },
    {
        id:5,
        image:"https://media3.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47fhg5nliwhnsrshay196oxreao3h22geml6oh6w72&rid=giphy.gif&ct=g",
        title: "Tecnología",
        trabajo: "titulo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nisl vitae efficitur tincidunt.",
        utilities: "Comments y envio"
    }
]


export function getAllCourses(){
    return courses;
}

export function getCourse(id){
    return courses.find((s)=>s.id===id);//El elmento se llama asi misma, para cada elemento s=studie va tener un nombre interno llamado job, lo que interesa es que debe coincidir con el id de la funcion
}