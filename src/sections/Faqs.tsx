import Accordion from "../common/Accordion";
export default function Faqs() {
  const items = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ?",
      description:
        "Nous vous aidons à faire le nécéssaire afin de préserver votre santé dans le temps, tout en prenant du plaisir !",
    },
    {
      title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ?",
      description:         "Nous vous aidons à faire le nécéssaire afin de préserver votre santé dans le temps, tout en prenant du plaisir !",

    },
    {
      title: "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ?",
      description:         "Nous vous aidons à faire le nécéssaire afin de préserver votre santé dans le temps, tout en prenant du plaisir !",

    },
    {
      title: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut non proident, sunt in culpa qui ?",
        description:         "Nous vous aidons à faire le nécéssaire afin de préserver votre santé dans le temps, tout en prenant du plaisir !",

    },
  ];

  return (
    <section id="faqs" className="max-w-7xl m-8 md:m-16 flex flex-col">
        {/* Accordéon */}
        <div className="w-full flex flex-col justify-center space-y-8 sm:space-y-12">
          <h2 className="text-3xl font-semibold text-[#000000] text-center">FAQ</h2>
          <div className="flex flex-col justify-center "> {/* Permet de pousser le bouton vers le bas */}
            <Accordion items={items}/>
          </div>
        </div>
    </section>
  );
}
