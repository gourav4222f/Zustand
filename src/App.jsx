import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { data } from "./Db/data";



export default function App() {
  return (
    <>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  )
}
