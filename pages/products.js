import Header from "@/components/Header/Header";
import styled from "styled-components";
import Center from "@/components/stylesComponents/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/Products/ProductsGrid";
import Futter from "@/components/Futter/Futter";
import Title from "@/components/stylesComponents/Title";

export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>Todos Produtos</Title>
        <ProductsGrid products={products} />
      </Center>
      <Futter/>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}