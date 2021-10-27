import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import * as request from 'supertest';
import { join } from 'path';
import { HomeModule } from '../src/modules/home/home.module';

describe('ProductsGraphql (e2e)', () => {
  let app;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        HomeModule,
        MongooseModule.forRoot('mongodb://localhost:27017/walmart'),
        GraphQLModule.forRoot({
          autoSchemaFile: join(process.cwd(), 'src/scheme.gql'),
          installSubscriptionHandlers: true,
          context: (req) => ({ headers: req.headers }),
        }),
      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('sumar dos numeros', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: `
          mutation {
            sum(num1: 4, num2: 4) {
              id
              index
              brand
              description
              discount
              image
              price
            }
          }`,
      })
      .expect(({ body }) => {
        const { id, index, brand, description, discount, image, price } =
          body.data.sum;

        expect(id).toBe('test');
        expect(index).toBe('0');
        expect(brand).toBe('test');
        expect(description).toBe('test');
        expect(discount).toBe(8);
        expect(image).toBe('test');
        expect(price).toBe(555);
      })
      .expect(200);
  });
});
