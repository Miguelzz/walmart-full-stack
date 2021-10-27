import { Product } from 'src/schemas/product/product.model';

export const isPalindrome = (value: string) => {
  const normal = value.toLowerCase().trim();
  const reverse = normal.split('').reverse().join('');
  return reverse == normal;
};

export const discount = (product: Product) => {
  if (
    (product && isPalindrome(product.description)) ||
    isPalindrome(product.brand)
  )
    return {
      ...(product as any)._doc,
      discount: 50,
      price: product.price / 2,
    };
  return {
    ...(product as any)._doc,
    discount: 0,
  };
};
