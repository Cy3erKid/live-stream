import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Api Swagger')
    .setDescription('The Live Api')
    .setVersion('1.0')
    .addTag('CarLive')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);

  if(module.hot){
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
