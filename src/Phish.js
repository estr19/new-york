import { april } from "./april";

function Phish() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <p className="h1 m-5"><span className="opaque">Phish, April 20-24</span></p>
      <div className='d-flex flex-row flex-wrap justify-content-evenly align-items-center'>
        {april.map((element => {
          return <img className='item' key={element} src={`/apr/${element}`} alt={element} />
        }))}
      </div>
    </div>
  );
}

export default Phish;
