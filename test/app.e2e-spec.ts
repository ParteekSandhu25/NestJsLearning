import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('App e2e', () => {
  let moduleRef: TestingModule;
  let app: INestApplication;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule], // Corrected from 'import' to 'imports'
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it.todo('should pass');
});
