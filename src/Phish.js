import { april } from "./april";

function Phish() {
  return (
    <div className="p-4 text-center">
      <p className="h1 p-5"><span className="opaque">Phish Photos, April 20-24</span></p>
      <div className='d-flex p-4 flex-row flex-wrap justify-content-evenly align-items-center'>
        {april.map((element => {
          return <img className='item' key={element} src={`/apr/${element}`} alt={element} />
        }))}
      </div>
    </div>
  );
}

export default Phish;
