import Clients from "../components/Clients";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";

import product from "../assests/product/example-product.jpeg";
import imgShopCard1 from "../assests/Shop/shopCard1.jpeg";

export default function Shop() {
  return (
    <>
      <div className="bg-bgclr-ligth-gray-1">
        <section className="container-big m-auto pt-[2.375em] pb-[3em] px-[11em]">
          <div className="flex justify-between items-center mb-[3em]">
            <span className="text-[1.5rem] text-clr-dark font-bold">Shop</span>
            <div className="flex items-center gap-x-[1rem]">
              <span className="text-clr-dark text-[0.875rem] font-bold">
                Home
              </span>
              <i className="text-clr-muted fa-solid fa-chevron-right"></i>
              <span className="text-[0.875rem] text-clr-muted font-bold">
                Shop
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-x-[1rem]">
            {Array(5)
              .fill(1)
              .map((item, idx) => (
                <ShopCard
                  className="basis-[206px] grow aspect-[8/9]"
                  key={idx}
                  urlImg={imgShopCard1}
                  title="CLOTHS"
                  text="5 Items"
                />
              ))}
          </div>
        </section>
      </div>

      <div>
        <section className="container-big px-[12.25em]">
          <div className="text-clr-second flex items-center justify-between py-[1.5em]">
            <div className="text-[0.875rem] font-bold">
              Showing all 12 results
            </div>
            <div className="flex items-center gap-x-[1rem]">
              <span className="text-[0.875rem] font-bold">Views:</span>
              <i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-border-all"></i>
              <i className="p-[1rem] rounded-[5px] border-[1px] border-clr-light-gray-2 text-clr-dark fa-solid fa-list-ul"></i>
            </div>
            <div className="flex">
              <select
                className="mr-[1rem] pr-[2em] pl-[1.3em] text-[0.875rem] border-[1px] rounded-[5px] border-[#DDDDDD] bg-[#F9F9F9]"
                name="cars"
                id="cars"
              >
                <option value="Popularity">Popularity</option>
              </select>
              <button className="font-bold btn-small btn-primary text-[0.875rem]">
                Filter
              </button>
            </div>
          </div>
          <div className="my-[3rem] flex flex-wrap gap-y-[5rem] gap-x-[1.875rem]">
            {Array(8)
              .fill(1)
              .map((item, idx) => {
                return (
                  <ProductCard
                    key={idx}
                    className="basis-[239px]"
                    urlImg={product}
                  />
                );
              })}
          </div>
        </section>
      </div>
      <Clients />
    </>
  );
}
