const images = document.querySelectorAll(".project img");


images.forEach(img => {


    let interval;

    let index = 0;

    let photos = img.dataset.images
        .split(",")
        .map(photo => photo.trim());



    img.addEventListener("mouseenter", () => {


        index = 0;


        interval = setInterval(() => {


            index++;


            if(index >= photos.length){

                index = 0;

            }


            // fondu de sortie
            img.style.opacity = 0;


            setTimeout(()=>{


                img.src = photos[index];


                // fondu d'entrée
                img.style.opacity = 1;


            },500);



        },1500);



    });



img.addEventListener("mouseleave",()=>{


    clearInterval(interval);


    // retour immédiat à l'image principale
    img.style.transition = "none";

    img.src = photos[0];


    // réactive le fondu pour le prochain diaporama
    setTimeout(()=>{

        img.style.transition = "opacity 0.3s ease";

    },50);


});


});