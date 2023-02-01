-- 1
SELECT articleID, title, content, email FROM article INNER JOIN user ON article.authorID = user.ID;

-- 2
SELECT * FROM article WHERE articleID BETWEEN 7 AND 12 ORDER BY articleID;