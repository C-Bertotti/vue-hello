// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
var app = new Vue(
    {
        el: '#root',
        data: {
            message: 'CIAONE',
            btnMessage: 'Fatti salutare',
            display: 'd--none'
        },
        // Bonus:
        // Aggiungere alla pagina un’immagine, presa anch’essa da un data.
        methods: {
            fattiSalutare: function  () {
                if ( this.display == 'd--none' ) {
                    this.display = 'd--block';
                    this.btnMessage = 'Non voglio più essere salutato';

                } else {
                    this.display = 'd--none';
                    this.btnMessage = 'Fatti salutare';
                }
            }
        }
    }
);


