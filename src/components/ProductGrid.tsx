
'use client';
import Link from 'next/link';
import { addToCart } from '@/app/actions/action';
import { simpleProduct } from '@/interface';
import Swal from 'sweetalert2';

const ProductGrid = ({ data }: { data: simpleProduct[] }) => {
  const handleAddToCart = (e: React.MouseEvent, product: simpleProduct) => {
    e.preventDefault();
    Swal.fire({
        position:'top-right',
        icon:'success',
        title: `${product.title} added to cart`,
        showConfirmButton:false,
        timer: 1000
    })

    addToCart(product);
    
  };
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="p-4">
            <Link href={`/product2/${product.slug}`}>
              <h2 className="text-lg hover:text-cyan-600 text-gray-800">
                {product.title}
              </h2>
            </Link>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 font-bold">${product.price}</p>
            </div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full font-semibold mt-4 py-2 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
