import { createStore, createEffect } from 'effector';

export const $products = createStore([]);

export const $totalCount = createStore(0);

export const $limit = createStore(10);
export const setLimit = createEffect(async (perPage) => {
  return perPage;
});

export const $categories = createStore([]);

export const fetchProducts = createEffect(async ({limit, skip}) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return response.json();
});

export const fetchCategories = createEffect(async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  return response.json();
});

export const fetchSearchProducts = createEffect(async (value) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${value}`);
  return response.json();
});

export const fetchProductsToCategory = createEffect(async (value) => {
  const response = await fetch(`https://dummyjson.com/products/category/${value}`);
  return response.json();
});

export const fetchProductsToLimit = createEffect(async ({perPage, skip}) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${skip}`);
  return response.json();
});

$totalCount
  .on(fetchProducts.doneData, (_, data) => data.total)
  .on(fetchSearchProducts.doneData, (_, data) => data.total)
  .on(fetchProductsToLimit.doneData, (_, data) => data.total);

$products
  .on(fetchProducts.doneData, (_, data) => data.products)
  .on(fetchSearchProducts.doneData, (_, data) => data.products)
  .on(fetchProductsToCategory.doneData, (_, data) => data.products)
  .on(fetchProductsToLimit.doneData, (_, data) => data.products);

$categories.on(fetchCategories.doneData, (_, data) => data);

$limit.on(setLimit.doneData, (_, data) => data);
