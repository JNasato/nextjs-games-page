import logoImage from '../images/jerlogo.png';
import virtualPet from '../images/virtual-pet.png';
import monsterKong from '../images/monster-kong.png';
import spanishLearning from '../images/spanish-learning.png';
import towerDefense from '../images/tower-defense.png';

import virtualPetGif from '../images/virtual-pet.gif';
import monsterKongGif from '../images/monster-kong.gif';
import spanishLearningGif from '../images/spanish-learning.gif';
import towerDefenseGif from '../images/tower-defense.gif';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameBlock = (props) => (
  <div className="gameBlock">
    <Link
      as={`/p/${props.title}`}
      href={`/gamePage?title=${props.title}&image=${props.gif}&description=${props.description}`}
    >
      <img src={props.image} alt="game image" onClick="" />
    </Link>
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>
)

export default () => (
  <div>
    <header>
      <img src={logoImage} alt="logo" id="logoImage" />
    </header>
    <h1>My Games Page</h1>
    <div className="gameRow">
      <GameBlock
        className=""
        image={spanishLearning}
        gif={spanishLearningGif}
        title="Spanish Teaching Game"
        description="Learn Spanish words and get a learning streak with this fun app developed with Phaser.js."
      />
      <GameBlock
        image={towerDefense}
        gif={towerDefenseGif}
        title="Tower Defense Game"
        description="Strategically place towers to halt the onslaught of enemies and protect your base! Built with Phaser 3 and Arcade physics using a Phaser Webpack project template."
      />
    </div>
    <div className="gameRow">
      <GameBlock
        image={virtualPet}
        gif={virtualPetGif}
        title="Virtual Pet"
        description="Balance your pet’s health and happiness by feeding it healthy and unhealthy food, and provide it with entertainment with simple yet fun to play mechanics. If your pet's health gets too low, use the potion to save it's life at the expense of fun."
      />
      <GameBlock
        image={monsterKong}
        gif={monsterKongGif}
        title="Monster Kong"
        description="This Mario-style platformer game makes use of the Arcade physics engine with Phaser 3. Jump past fire and dodge falling barrels to make your way to the gorilla goal and win!"
      />
    </div>

    <style jsx global>{`
      header {
        background-color: lightgrey;
        height: 120px;
        text-align: center;
        padding: 15px;
      }

      #logoImage {
        height: 90px;
        border: 1px ridge lightgrey;
        border-radius: 10px;
      }

      h1 {
        text-align: center;
        font-size: 40px;
        margin: 20px;
      }

      .gameBlock {
        display: flex;
        margin: 20px;
        width: 50%;
      }

      .gameBlock h2, p {
        margin: 20px;
      }

      .gameBlock img {
        float: left;
        width: 240px;
        border: 2px ridge grey;
        border-radius: 6px;
        cursor: pointer;
      }

      .gameRow {
        display: flex;
        margin: 10px;
      }
    `}</style>
  </div>
)