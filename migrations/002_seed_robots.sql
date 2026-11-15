-- Seed TechVibe Home robot catalog from data/robots.seed.json
-- Rerunnable: updates only seeded catalog entries and preserves custom records.
WITH seed(title, robot, data) AS (
 VALUES
  ('EMO', 'EMO', '{"title":"EMO","image":"https://nl.robotshop.ro/cdn/shop/files/2025042902.jpg?v=1765302842&width=1946","maker":"LivingAI","category":"Để bàn","summary":"Robot thú cưng để bàn với biểu cảm, nhảy múa và tương tác giọng nói.","source":"https://living.ai/","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('Vector', 'Vector', '{"title":"Vector","image":"https://winnerbe.com/cdn/shop/files/product-image-1848919696_b776437f-fae8-42c8-9203-8f0f60ef50be_800x.jpg?v=1688064647","maker":"Anki / Digital Dream Labs","category":"Để bàn","summary":"Robot đồng hành bánh xích, tương tác với người và môi trường.","source":"https://anki.bot/","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('AIBI', 'AIBI', '{"title":"AIBI","image":"https://forums.living.ai/uploads/default/original/3X/d/5/d531a65bb2c97e3c7ab35373778d13e1b7a68fb7.jpeg","maker":"LivingAI","category":"Mang theo","summary":"Robot bỏ túi với biểu cảm, nhận diện và tương tác.","source":"https://living.ai/","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('Alpha Mini', 'Alpha Mini', '{"title":"Alpha Mini","image":"https://maxcom.uz/storage/product/thumb/AryuJn5Uqjil6YG3Q6diMBF8tiMKoGjoZo3z0Ob3.jpeg","maker":"UBTECH","category":"Hình người","summary":"Robot hình người với cử chỉ và tương tác giọng nói.","source":"https://www.ubtrobot.com/","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('Loona', 'Loona', '{"title":"Loona","image":"https://www.price.com.hk/space/ec_product/shop/2185000/2185099_l2xk30_0.jpg","maker":"KEYi Tech","category":"Di chuyển","summary":"Robot thú cưng di chuyển và chơi tương tác trong nhà.","source":"https://keyirobot.com/products/loona-haustier-roboter","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('Eiliko', 'Eiliko', '{"title":"Eiliko","image":"https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc5/Eiliko-Mass-Production.jpg","maker":"Energize Lab","category":"Mang theo","summary":"Robot charm nhỏ gọn với biểu cảm và tương tác chạm.","source":"https://store.energizelab.com/products/eiliko","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}'),
  ('Emun', 'Emun', '{"title":"Emun","image":"","maker":"TechVibe Home","category":"Giáo dục","summary":"Robot hỗ trợ học tiếng Anh; thông tin và ảnh chờ xác minh.","source":"","imageVerified":false,"seedVersion":2,"public":true,"seeded":true}')
)
INSERT INTO records (id, type, title, robot, board, status, updated_at, data)
SELECT md5('techvibe:robot:' || title), 'robots', title, robot, '', 'Giới thiệu', NOW()::text, data
FROM seed
WHERE NOT EXISTS (SELECT 1 FROM records r WHERE r.type='robots' AND r.title=seed.title);
