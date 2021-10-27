import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from './product.resolver';

describe('AppController', () => {
  let productResolver: ProductResolver;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      imports: [],
      providers: [],
    }).compile();

    productResolver = app.get<ProductResolver>(ProductResolver);
  });

  describe('root', () => {
    it('Sumar dos numeros"', () => {
      expect(productResolver.sum(2, 2)).toBe(4);
    });
  });
});
