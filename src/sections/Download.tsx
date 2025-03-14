import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Donwload from "../assets/download.png";

function Download() {
  return (
    <section
      id="download"
      className="flex max-w-7xl flex-col items-center justify-between px-20 md:m-auto md:flex-row md:px-12 bg-[#E9E9E9] "
    >
      {/* Texte et boutons */}
      <div className="mt-4 flex flex-col items-center justify-center text-center sm:w-full md:w-4/6 md:items-start md:text-left ">

        <div className="md:pl-20 " >
          <div>
          <h2 className="mb-4 text-4xl font-semibold text-[#000000]">
          À vos chaussures !
        </h2>
        <p className="max-w-lg text-[#000000]">
          L’application est déjà disponible PARTOUT,
          <br/>
          alors n’hésitez plus !
          On y va !
        </p>
          </div>
          <div>
        <p className=" mt-8 mb-2 text-[#000000]">
          Télécharger l’app
        </p>
        <StoreLinks type={BtnTypes.Standard} />
          </div>
      </div>
    </div>

      {/* Image (en bas sur mobile) */}
      <div className="mt-8 flex w-full h-full items-end justify-center md:mt-0 md:w-2/6 ">
        <img
          className=" hidden w-72 xl:w-80 h-full md:block "
          src={Donwload}
          alt="Make5ense app frame"
        />
      </div>
    </section>
  );
}

export default Download;
