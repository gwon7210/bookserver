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
    INSERT INTO \`book_meeting\` (\`title\`, \`meetingDate\`, \`currentAttendees\`, \`maxAttendees\`, \`location\`, \`description\`, \`status\`, \`bookClubId\`) VALUES
    ('첫 번째 프라이드와 편견 토론', '2025-04-15 15:00:00', 2, 8, '서울 종로구 카페', '프라이드와 편견의 캐릭터 분석에 대해 토론합니다', 'scheduled', 1),
    ('듄 영화와 책 비교하기', '2025-04-16 17:30:00', 3, 10, '강남구 스터디룸', '듄 영화와 원작 소설을 비교 분석합니다', 'scheduled', 2),
    ('명상록 독서 세션', '2025-04-20 19:00:00', 4, 6, '온라인 줌 미팅', '스토아 철학의 현대적 적용에 대해 이야기합니다', 'scheduled', 3),
    ('호빗: 작가의 세계관', '2025-04-22 18:00:00', 2, 7, '부산 해운대 도서관', '톨킨의 중간계 세계관에 대해 탐구합니다', 'scheduled', 4),
    ('미스터리 소설 작법 분석', '2025-04-25 16:00:00', 3, 9, '대전 문화센터', '건 걸과 같은 현대 미스터리 소설의 작법을 분석합니다', 'scheduled', 5),
    ('클래식 문학의 현대적 해석', '2025-05-05 14:00:00', 1, 8, '인천 북카페', '클래식 문학의 현대적 재해석에 대해 토론합니다', 'scheduled', 1),
    ('SF 소설의 과학적 정확성', '2025-05-10 16:00:00', 2, 6, '대구 과학관', '과학 소설에서의 과학적 정확성의 중요성에 대해 논의합니다', 'scheduled', 2);
  `);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();