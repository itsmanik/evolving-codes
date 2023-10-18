import React from "react";

function Home() {
    return <>
        <main>
            <div>
                <h1>Strategic Design and SEO Solutions</h1>
                <p>10x your bussiness productivity with us, we create website which will make it easier to get more sales.</p>
                <button>Learn more</button>
            </div>
        </main>
        <div id="working">
            <h2>How does it work?</h2>
            <p className="description">Pretty simple, it's a 4 step process...</p>
            <div className="cards">
                <div className="card">
                    <span>1</span>
                    <p>
                        Choose your need, either it be a website or a logo or want to
                        optimize your already existing website. Fill out this in the
                        contact form and we will react out to you within 2 working days.
                    </p>
                </div>
                <div className="card">
                    <span>2</span>
                    <p>
                        Choose your need, either it be a website or a logo or want to
                        optimize your already existing website. Fill out this in the
                        contact form and we will react out to you within 2 working days.
                    </p>
                </div>
                <div className="card">
                    <span>3</span>
                    <p>
                        Choose your need, either it be a website or a logo or want to
                        optimize your already existing website. Fill out this in the
                        contact form and we will react out to you within 2 working days.
                    </p>
                </div>
                <div className="card">
                    <span>4</span>
                    <p>
                        Choose your need, either it be a website or a logo or want to
                        optimize your already existing website. Fill out this in the
                        contact form and we will react out to you within 2 working days.
                    </p>
                </div>
            </div>
        </div>
        <div className="cta">
            <div className="cta-container">
                <div className="cta-text">
                    <h1>Why choose us, what  makes us special?</h1>
                    <p>
                        We do not use any third party software like wordpress, wix etc,
                        we build them with authentic code from all the way from scratch.
                        This ensures stability, security and faster website.
                    </p>
                    <button>SERVICES</button>
                </div>
                <div>
                    <img src="./styles/svg.svg" alt="a man standing" />
                </div>
            </div>
        </div>
    </>
}

export default Home;