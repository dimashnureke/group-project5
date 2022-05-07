import './Main2.css';
import log from './img/log.png'
import Aside from './Aside_cont'
import Cont_box from './Content/Cont_box';
import Cont_box2 from './Content/Cont_box2';
import Cont_box3 from './Content/Cont_box3';

function Main2() {
  return (
    <div className="Main2">
      <img className="log" src={log} alt="logo" ></img>
      <div className="main-container22">
        <h1 className="text1">Игровые мыши</h1>
        <hr className="bold_line"></hr>
        <div className="text_box1"><p className="text2">Logitech G
          представляет отмеченные наградами <br></br>
          беспроводные и проводные игровые мыши.<br></br> Найдите
          свою модель среди множества устройств с <br></br>
          усовершенствованными датчиками и формой.</p></div>
      </div>

      

      <div className="main-cont2">
        <div className="sort_line">
          <p className="sort_text1">Скрыть фильтры</p>
        </div>
       
        <div className='main2-emptyspace'></div>
       
        <div className="Aside">
          <hr className="hash"></hr>
          <p className="text3">Тип питания</p>
          <input type="checkbox" className="check_box"></input>
          <Aside text12="POWERPLAY Compatibility" />
          <input type="checkbox" className="check_box2"></input>
          <Aside text12="Проводная" />
          <input type="checkbox" className="check_box3"></input>
          <Aside text12="Аккумуляторная" />

          <Aside text12="Powerplay" />
          <input type="checkbox" className="check_box4"></input>
          <Aside text12="Батарейка" />
          <input type="checkbox" className="check_box5"></input>

          <p className="text4">Подсветка</p>
          <hr className="hash2"></hr>
          <input type="checkbox" className="check_box6"></input>
          <Aside text13="LIGHTSYNC RGB" />

          <p className="text5">СПОСОБ ПОДКЛЮЧЕНИЯ</p>
          <hr className="hash3"></hr>
          <Aside text14="Проводное подключение" />
          <input type="checkbox" className="check_box8"></input>
          <Aside text14="USB Cable" />
          <input type="checkbox" className="check_box9"></input>
          <Aside text14="Bluetooth" />
          <input type="checkbox" className="check_box10"></input>
          <Aside text14="Технология беспроводной связи LIGHTSPEED" />
          <input type="checkbox" className="check_box11"></input>
        </div>
        <div className="cont">
          <Cont_box />
          <div className="text_cont">
            <div className="text_box11">
              <p className="text111">МЫШЬ PRO WIRELESS</p>
              <p className="text112">Версия League of legends</p></div>
            <div className="text_box12">
              <p className="text121">G305</p>
              <p className="text122">Бecпроводная игровая мышь  поддержкой технологии Ligthspeed</p>
            </div>
            <div className="text_box13"></div>
          </div>

          <Cont_box2 />
          <div className="text_cont">
            <div className="text_box11"></div>
            <div className="text_box22">
              <p className="text221">G305 K/DA</p>
              <p className="text122">Бecпроводная игровая мышь  поддержкой технологии Ligthspeed</p>
            </div>
            <div className="text_box23">
              <p className="text121">G502 HERO</p>
              <p className="text122">Высокоточная игровая мышь </p>
            </div>
          </div>
          <Cont_box3 />
          <div className="text_cont">
            <div className="text_box11">
              <p className="text121">G502 HERO</p>
              <p className="text122">Высокоточная игровая мышь </p>
            </div>
            <div className="text_box22">
              <p className="text221">PRO X</p>
              <p className="text122"> SUPERLIGHT</p>
            </div>
            <div className="text_box23">
              <p className="text121">G102</p>
              <p className="text122">LIGHTSYNC</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;

