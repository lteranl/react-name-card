import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import meImg from "./images/me.png";

function App() {
    const bgs = [
        "url(https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80)",
        "url(https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60)",
        "url(https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)",
        "url(https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80)",
        "url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80)",
        "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80)",
        "url(https://images.unsplash.com/photo-1506056820413-f8fa4de15de6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
    ];
    const gifs = [
        "url(https://media3.giphy.com/media/cOSbH8NoUFt9MXbuie/giphy.gif)",
        "url(https://thumbs.gfycat.com/AccurateRegularBunting-size_restricted.gif)",
        "url(http://38.media.tumblr.com/c56eb55284d28fc68562e8e00e9fc614/tumblr_n9ei0iJUeY1swnzkqo1_400.gif)",
        "url(https://cdnv.vipestudio.com/uploads/2020/06/unnamed-file.wp.gif)",
        "url(https://media0.giphy.com/media/BHNfhgU63qrks/giphy.gif)",
    ];

    const [color, setColor] = useState(
        "url(https://www.teahub.io/photos/full/276-2760737_dark-gradient-wallpaper.jpg)"
    );
    const [gif, setGif] = useState(
        "url(https://pa1.narvii.com/6380/a8a292d480b63dd536b2d5e3918f73f3d5265245_hq.gif)"
    );

    const changeBackground = () => {
        let randomNum = Math.floor(Math.random() * bgs.length);
        let randomBg = bgs[randomNum];
        setColor(randomBg);

        // localStorage.setItem("color", col);
    };

    const changeGif = () => {
        let randomNum = Math.floor(Math.random() * gifs.length);
        let randomgif = gifs[randomNum];
        setGif(randomgif);
    };

    const changeBgAndGif = () => {
        changeBackground();
        changeGif();
    };

    return (
        <Wrapper color={color}>
            <Card>
                <Header gif={gif}></Header>
                <Pic></Pic>
                <Info>
                    <FullName>Jesus Teran</FullName>
                    <Location>Santa Ana, California</Location>
                </Info>
                <LineDiv>
                    <Line />
                </LineDiv>
                <Footer>
                    <LinkContainer>
                        <Link
                            href="https://www.linkedin.com/in/jesus-delgado-teran-9a1249186/"
                            target="_blank"
                        >
                            <Linkedin></Linkedin>
                            <Name>Linkedin</Name>
                        </Link>
                        <Link
                            href="https://github.com/jjesusteran-mori"
                            target="_blank"
                        >
                            <Github></Github>
                            <Name>Github</Name>
                        </Link>
                        <Link
                            href="https://jjesusteran-mori.github.io/portfolio/"
                            target="_blank"
                        >
                            <Website></Website>
                            <Name>Website</Name>
                        </Link>
                    </LinkContainer>
                    <ChangeBg>
                        <Btn onClick={() => changeBgAndGif()}>
                            Change Background
                        </Btn>
                    </ChangeBg>
                </Footer>
            </Card>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    background-image: ${({ color }) => color || "black"};
    background-size: cover;
    display: flex;
    font-family: bangers;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;
const Card = styled.div`
    border-radius: 10px;
    margin-bottom: 100px;
    position: relative;
    height: 500px;
    width: 500px;
`;
const Header = styled.div`
    background-color: red;
    background-image: ${({ gif }) => gif || "black"};
    background-size: cover;
    background-position-y: -5rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33.5%;
`;
const Pic = styled.div`
    background-image: url(${meImg});
    border: 4px solid #fff;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    right: 37%;
    top: 20%;
    height: 120px;
    width: 120px;
`;
const Info = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 30px;
    background-color: #eff7ff;
    height: 33%;
`;
const FullName = styled.div``;
const Location = styled.div`
    font-size: 1.2rem;
    color: #ff8c00;
`;
const LineDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #eff7ff;
`;
const Line = styled.hr`
    overflow: visible; /* For IE */
    padding: 0;
    margin: 10px 0;
    border: none;
    border-top: medium double #333;
    background-color: black;
    text-align: center;
    height: 0.1px;
    width: 300px;

    &:after {
        content: "§";
        display: inline-block;
        position: relative;
        top: -0.7em;
        font-size: 1.5em;
        padding: 0 0.25em;
        background: #eff7ff;
    }
`;
const Footer = styled.div`
    background-color: #eff7ff;
    height: 33.5%;
    display: flex;
    padding: 50px 0;
    gap: 30px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 3px solid lightblue;
    box-shadow: -1px 20px 15px -3px lightblue;
`;
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;
const Link = styled.a`
    background: papayawhip;
    box-shadow: 0px 15px 15px -3px lightblue;
    color: palevioletred;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    padding: 10px 12px;
    border-radius: 8px;
    width: 65px;
    height: 80px;

    &:hover {
        background-color: lightblue;
    }
`;
const Name = styled.div``;
const Linkedin = styled.i.attrs(() => ({ className: "fab fa-linkedin" }))`
    font-size: 50px;
`;
const Github = styled.i.attrs(() => ({ className: "fab fa-github-square" }))`
    font-size: 50px;
`;

const Website = styled.i.attrs(() => ({ className: "fas fa-portrait" }))`
    font-size: 50px;
`;

const ChangeBg = styled.div`
    background-color: #eff7ff;
    border-radius: 10px;
    width: 80%;
    height: 25%;
    padding: 25px 0;
    display: flex;
    justify-content: center;
`;
const Btn = styled.div`
    border-bottom: 3px solid lightblue;
    border-radius: 5px;
    background: papayawhip;
    box-shadow: 0px 10px 15px -3px lightblue;
    color: palevioletred;
    font-size: 1.3rem;
    height: 35px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: lightblue;
    }
`;
