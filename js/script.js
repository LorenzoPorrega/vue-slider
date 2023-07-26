/*Consegna:
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce */

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
            //Stabilisco una key per immagazinare un valore che mi servirà dopo
            displayedImageIndex: 0,
        };
    },
    methods: {
        onClick(){
            console.log(displayedImageIndex);
            this.displayedImageIndex = i;
            /*Questo metodo dovrebbe ristabilire l'indice dell'immagine attualmente in
            display a i (i che è stabilito nel ciclo for stabilito nei tag in HTML)
            così che quando si clicca su una immagine nello slider a destra il valore
            dell'indice si ristabilisce con la i dell'immagine cliccata ma non 
            funziona*/
        },
        onNextClick(){
            this.displayedImageIndex++;
            /*Se questo metodo si attiva dal DOM l'indice dell'immagine attualmente in
            display aumenta di 1*/
            if(this.displayedImageIndex > this.slides.length - 1){
                this.displayedImageIndex = 0;
            }
            /*Se l'indice dell'immagine attualmente in display è maggiore della lunghezza
            dell'array slides - 1 (il -1 serve sennò confronterei un range da 1 a 5 per
            la lunghezza dell'array slides con un range da 0 a 4 dell'indice che parte
            da 0) allora lo ristabilisco a 0. Questo perché se l'indice dell'immagine
            attualmente in display è 5 o di più il programma non ha key image, title
            o text per ulteriori oggetti e ho superato le immagini nello slider (sono
            andato oltre l'immagine di Hulk e gli altri Avengers), quindi riparto
            dall'immagine con indice 0, la prima nello slider (ossia Spiderman)*/
        },
        onPreviousClick(){
            this.displayedImageIndex--;
            /*Se questo metodo si attiva dal DOM l'indice dell'immagine attualmente in
            display diminuisce di 1*/
            if(this.displayedImageIndex < 0){
                this.displayedImageIndex = this.slides.length - 1;
            }
            /*Se l'indice dell'immagine attualmente in display è minore di 0, cosa che 
            non deve succedere perché sto ragionando sull'array di slides che non ha
            oggetti all'indice negativo (0,1,2,3,ecc.), allora lo ristabilisco alla
            lunghezza dell'array slides (ossia alla quantità di oggetti al suo interno)
            ossia 5 e lo sottraggo di 1 (questo perché devo comprendere anche 0 che
            this.slides.length non contempla)*/
        },
    },
}).mount("#app");