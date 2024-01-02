import React from 'react'
import './home.css'
import Card from '../../components/Card'

function Home() {
    return (
        <main id="main">
            <div className='bg-beach'>
                <div className="block">
                    <h1>Praia</h1>
                    <p className="texto">
                        Lugar ideal para <span>esquecer</span> de seus problemas
                    </p>
                </div>
            </div>

            <section id="title" className='section1'>
                <div className="title">
                    <h1>O que você irá encontra por aqui</h1>
                </div>
                <div className="card__container">
                    <Card photo="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg" title="Lazer" descricao="Aqui você pode se entreter, re-pousar entre diversas outras coisas." />
                    <Card photo="https://cdn.pixabay.com/photo/2016/11/18/19/10/beach-1836467_1280.jpg" title="Diversão" descricao="Que tal nadar nas aguas junto com a sua familia ou solo ou talvez praticar algum esporte como voleibol, frescobol, etc." />
                    <Card photo="https://cdn.pixabay.com/photo/2022/02/02/18/38/battered-shrimp-6989162_1280.jpg" title="Comida" descricao="Você encontrara cardapios exóticos que correspondem ao local que está" />
                </div>
            </section>

            <section className="section2">
                <div className="section2__descrition">
                    <h1>Titulo</h1>
                    <div className="section2__txt">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem sapiente explicabo adipisci eligendi!
                            Ut amet possimus id nemo quia quam reiciendis libero, quisquam earum aliquid dignissimos nihil nesciunt suscipit.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quis maiores in, fugiat enim numquam nesciunt consequatur incidunt culpa minima fuga qui saepe esse. Earum cumque odio alias, ipsa quos similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis recusandae,
                            illo repellat deleniti modi atque eveniet reprehenderit! Tenetur ipsam adipisci perferendis fugiat dolor magnam soluta consectetur, iste temporibus commodi.
                        </p>
                    </div>
                </div>
                <div className="section2__photo">
                    <img src="https://cdn.pixabay.com/photo/2017/03/27/13/33/beach-2178747_1280.jpg" alt="section2_img_beach" />
                </div>
            </section>
        </main>
    )
}

export default Home