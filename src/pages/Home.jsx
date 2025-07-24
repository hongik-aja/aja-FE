import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

//import Card from '../components/Card';
//import { fetchAllProducts, searchProducts } from '../apis/products';

export function Home() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = searchQuery
          ? await searchProducts(searchQuery)
          : await fetchAllProducts();
        console.log('API 응답 데이터: ', result);
        setProducts(Array.isArray(result) ? result : []);
      } catch (err) {
        console.error('상품 불러오기 실패:', err);
        setProducts([]);
      }
    };

    loadProducts();
  }, [searchQuery]);


  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Hi!</h2>
        <p className="text-sm text-gray-500">내용 추가해야됨!!!!!</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">교육 카테고리 선택</h3>
        <a href="#" className="text-sm text-black-600 hover:underline">더보기</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(products) && products.map((product) => { 
          return (
          <Card
            key={product.id}
            {...product}
          />
          );
          })}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
        <p className="text-sm  text-gray-500">커뮤니티</p>
        <p className="text-sm text-gray-500">혜택 쿠폰</p> 
        {Array.isArray(products) && products.map((product) => { 
          return (
          <Card
            key={product.id}
            {...product}
          />
          );
          })}
      </div>

    </div>


  );
};

