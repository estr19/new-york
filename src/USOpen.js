import { september } from "./september";

function USOpen() {
  return (
    <div className="p-4 text-center">
      <p className="h1 p-5"><span className="opaque">US Open Photos, September 7-8</span></p>
      <div className='d-flex p-4 flex-row flex-wrap justify-content-evenly align-items-center'>
        {september.map((element => {
          return <img className='item' key={element} src={`/sep/${element}`} alt={element} />
        }))}
      </div>
    </div>
  );
}

export default USOpen;