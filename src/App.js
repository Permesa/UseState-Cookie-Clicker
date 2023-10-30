import "./App.css";
import { useEffect, useState} from "react";
import CookieLogo from "./art/cookie.png"
import Sound from "react-sound";


/// WEBPAGE LAYOUT
function App() {
  return (
    <div className="App"> 
      <div className="AppInner">

        <h1 id="Title"> Cookies.</h1>

        <div className="GameScreen">
          <CookieDisplay />
        </div>

        <div id="Footer"> Made by epic gamer </div>

      </div>
    </div>
  );
}

/// Components 

function setSound() {
  return(
    <Sound
    url="./art/bgmusic.mp3"
    playStatus={Sound.status.PLAYING}
    playFromPosition={300 /* in milliseconds */}
    volume={100}
    loop={true}
    />
  );
}


function ButtonComp(props) {
  const [cost, changeCost] = useState(props.Cost);
  const [add, changeAdd] = useState(props.Add);
  const [tier, changeTier] = useState(0);

  function handleChange() {
   changeCost((curCost) => curCost + curCost*.35);
   changeAdd((curAdd) => curAdd + curAdd*.05);
   changeTier((curTier) => curTier + .25);
  }

  function HandleUpgrade() {
    if(props.currentCookies() >= cost){
      props.changeCookies(cost);
      props.UpgradeClick(add);
      handleChange();
    }
  }
  
  return(
    <div onClick={() => {HandleUpgrade()}} id="ButtonDisplay">
      <div id="ButtonImage">
        <img draggable="false" class="unselectable" id="UpgradeImage" src={props.Src}></img>
        <h id="UpgradeTextSmall"> Tier: {tier.toFixed(0)} </h>
      </div>
      <div id="UpgradeCont">
        <h id="ButtonTitle"> {props.title} </h>
        <h id="UpgradeText"> {add.toFixed(2) + " " + props.Effect}</h>
        <h id="UpgradeText"> {"cost: " + cost.toFixed(0)}</h>
      </div>
    </div>
  )
}

/// MAIN COOKIE DISPLAY
function CookieDisplay(props){
  // STATES
  const [cookies, changeCookies] = useState(0);
  const [amount, changeAmount] = useState(1);
  const [perSec, changePerSec] = useState(0);


  // STATE FUNCTIONS
  function handleChangeAmount(c) {
    changeAmount((currentAmount) => currentAmount + c);
  }

  function handleChangePerSec(c) {
    changePerSec((currentPerSec) => currentPerSec + c);
  }

  function handleCookieChange(c) {
    changeCookies((currentCookies) => currentCookies - c);
  }

  function returnCookies() {
    return cookies;
  }

  function cookieClicked() {
    changeCookies(cookies + amount)
  }

  // set cookie update persec everysecond
  useEffect(() => {
    const timer = setTimeout(() => {
      changePerSec((currentPerSec) => currentPerSec + 0);
      console.log(perSec)
      changeCookies((currentCookies) => currentCookies + perSec);
      console.log(cookies)
    }, 1000);

    return () => clearTimeout(timer);
  }, [cookies]);

  /// DISPLAY RETURN
  return(
    <div class="DisplayCont">


      <div class="CookieDisplay">
          <img onClick={() => {cookieClicked()}} id="CookieImage" src={CookieLogo} draggable="false" class="unselectable"></img>
          <p id="CookieText"> {cookies.toFixed(0)} </p>  
          <p id="TrackerText"> per click: {amount.toFixed(1)} </p>
          <p id="TrackerText"> per second: {perSec.toFixed(1)} </p>
      </div>

      <div class="UpgradeDisplay">
        <img ></img>
        <ButtonComp title="Rainbow Cookies." Add={1} Effect="per click" Cost={10} Src={require('./art/UpgradeArt/Upgrade1.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Rainbow Cookies." Add={.2} Effect="per second" Cost={10} Src={require('./art/UpgradeArt/Upgrade1.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Lava Cookies." Add={10} Effect="per click" Cost={1000} Src={require('./art/UpgradeArt/Upgrade2.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Lava Cookies." Add={2} Effect="per second" Cost={1000} Src={require('./art/UpgradeArt/Upgrade2.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Ancient Cookies." Add={1000} Effect="per click" Cost={10000} Src={require('./art/UpgradeArt/Upgrade3.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Ancient Cookies." Add={200} Effect="per second" Cost={10000} Src={require('./art/UpgradeArt/Upgrade3.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Hollow Cookies." Add={10000} Effect="per click" Cost={100000} Src={require('./art/UpgradeArt/Upgrade4.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="Hollow Cookies." Add={2000} Effect="per second" Cost={100000} Src={require('./art/UpgradeArt/Upgrade4.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="World Cookies." Add={100000} Effect="per click" Cost={1000000} Src={require('./art/UpgradeArt/Upgrade5.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="World Cookies." Add={20000} Effect="per second" Cost={1000000} Src={require('./art/UpgradeArt/Upgrade5.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="God Cookies." Add={100000000} Effect="per click" Cost={1000000000} Src={require('./art/UpgradeArt/Upgrade6.png')} UpgradeClick={handleChangeAmount}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>
        <ButtonComp title="God Cookies." Add={200000} Effect="per second" Cost={1000000000} Src={require('./art/UpgradeArt/Upgrade6.png')} UpgradeClick={handleChangePerSec}  currentCookies={returnCookies} changeCookies={handleCookieChange}/>

      </div>
    </div>
  )
}

export default App;
