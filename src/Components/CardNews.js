class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        // criando a div que ira envolver todo o código
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // criando a div do card left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        // criando construtor para nosso conteúdo de título, link e conteúdo
        const autor = document.createElement("span");
        autor.textContent = "Year " + (this.getAttribute("autor") || "Anonymous");
        autor.classList.add("card__autor");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        linkTitle.classList.add("card__title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        newsContent.classList.add("card__content");

        // atribuindo o conteúdo na div do card left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // criando a div do card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        // criando construtor para nosso conteúdo de imagem
        const newsImagem = document.createElement("img");
        newsImagem.src = this.getAttribute("photo") || "./assets/profile-default.png";
        newsImagem.alt = "Foto da noticia";

        // pendurar no conteudo da div do card righ
        cardRight.appendChild(newsImagem);

        // pedurando o card left e right no componentRoot que seria a div que envolve todo o código
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        // retornando o componentRoot
        return componentRoot
    }

    style () {
        const capaFilme = this.getAttribute("capa-filme");

        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 70%;
                margin: 20px auto;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-sizing: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background-image: url('assets/fundo.jpg');
                border-radius: 5px;
            }

            .card__left {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .card__left > a {
                margin-top: 5px;
                font-size: 36px;
                color: roxo;
                font-weight: 900;
                text-decoration: none;
                padding-left: 20px;
                font-family: 'Creepster', cursive, Roboto;
            }

            .card__left > p {
                color: rgb(70, 70, 70);
                padding: 20px;
                font-family: 'Edu TAS Beginner', Shadows Into Light, Roboto;
            }

            .card__left > span {
                font-weight: 400;
                padding-left: 20px;
                font-size: 8px;
                font-family: 'Edu TAS Beginner', Shadows Into Light, Roboto;
            }

            .card__right {
                width: 20%;
                display: flex;
                flex-direction: column;
                position: relative;
            }
            .card:hover{
                content: "";
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url('${capaFilme}');
                background-size: cover;
                opacity: 0;
                transition: opacity 0.3s;
            }
            .card:hover {
                opacity: 1;
            }
            .card:hover .card__autor,
            .card:hover .card__title,
            .card:hover .card__content {
                opacity: 0;
            }
                `;

                return style;
            }
    }

customElements.define("card-news", Cardnews);