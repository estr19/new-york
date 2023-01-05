import { september } from "./september";

function USOpen() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <p className="h1 m-5"><span className="opaque">US Open, September 7</span></p>
      <div className='d-flex flex-row flex-wrap justify-content-evenly align-items-center'>
          {september.map((element => {
          return <img className='item' key={element} src={`/sep/${element}`} alt={element} />
        }))}
      </div>
    </div>
  );
}

export default USOpen;