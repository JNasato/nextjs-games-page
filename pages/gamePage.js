import logoImage from '../images/jerlogo.png';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (
  <div id="main">
    <header>
      <Link href="/">
        <button className="btn btn-dark">Home</button>
      </Link>
      <img src={logoImage} alt="logo" id="logoImage" />
    </header>
    <h1>{props.url.query.title} </h1>
    <img src={props.url.query.image} alt="game image" id="gameImage" />
    <p>{props.url.query.description}</p>

    <style jsx global>{`
      header {
        background-color: lightgrey;
        height: 120px;
        padding: 15px;
      }

      .btn-dark {
        position: absolute;
        left: 30px;
        top: 40px;
      }

      #logoImage {
        height: 90px;
        border: 1px ridge lightgrey;
        border-radius: 10px;
      }

      #main {
        text-align: center;
      }

      h1 {
        font-size: 40px;
        margin: 20px;
      }

      #gameImage {
        width: 480px;
        border: 2px ridge grey;
        border-radius: 6px;
        margin-bottom: 20px;
      }
    `}</style>
  </div>
)