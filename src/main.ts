import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppDataSource.initialize();

  const connection = AppDataSource;
  await connection.query(`
    INSERT INTO \`user\` (\`email\`, \`phoneNumber\`, \`password\`) VALUES
    ('test', '010-1234-5678', '$2b$10$fUx4Spj209FgZ58NQMLE3.wPNbRYI9eNS1Da2GQT84umdShw/adyK'),
    ('test1', '010-2345-6789', '$2b$10$fUx4Spj209FgZ58NQMLE3.wPNbRYI9eNS1Da2GQT84umdShw/adyK'),
    ('test2', '010-3456-7890', '$2b$10$fUx4Spj209FgZ58NQMLE3.wPNbRYI9eNS1Da2GQT84umdShw/adyK'),
    ('test3', '010-4567-8901', '$2b$10$fUx4Spj209FgZ58NQMLE3.wPNbRYI9eNS1Da2GQT84umdShw/adyK'),
    ('test4', '010-5678-9012', '$2b$10$fUx4Spj209FgZ58NQMLE3.wPNbRYI9eNS1Da2GQT84umdShw/adyK');
  `);

  await connection.query(`
    INSERT INTO \`book_club\` (\`name\`, \`bookTitle\`, \`category\`, \`imageUrl\`, \`memberCount\`, \`maxMembers\`, \`description\`, \`status\`, \`age\`) VALUES
    ('Classic Book Club', 'Pride and Prejudice', 'Classic', 'https://picsum.photos/200/300', 3, 10, 'A club for classic literature lovers', 'active', 20),
    ('Sci-Fi Enthusiasts', 'Dune', 'Science Fiction', 'https://picsum.photos/200/300', 4, 10, 'Exploring the best sci-fi books', 'active', 25),
    ('Philosophy Circle', 'Meditations', 'Philosophy', 'https://picsum.photos/200/300', 5, 10, 'Deep discussions on philosophy', 'active', 30),
    ('Fantasy Realm', 'The Hobbit', 'Fantasy', 'https://picsum.photos/200/300', 2, 10, 'A group for fantasy lovers', 'active', 18),
    ('Mystery Readers', 'Gone Girl', 'Mystery', 'https://picsum.photos/200/300', 3, 10, 'Unraveling the best mystery novels', 'active', 22);
  `);

  await connection.query(`
    INSERT INTO \`my_bookclub\` (\`userId\`, \`meetingDate\`, \`bookClubId\`) VALUES
    (1, '2025-03-15 18:00:00', 1),
    (2, '2025-03-16 19:00:00', 2),
    (3, '2025-03-17 20:00:00', 3),
    (4, '2025-03-18 21:00:00', 4),
    (5, '2025-03-19 22:00:00', 5);
  `);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();