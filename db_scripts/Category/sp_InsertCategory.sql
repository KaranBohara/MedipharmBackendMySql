CREATE PROCEDURE sp_InsertCategory(IN CId VARCHAR(50) ,IN Category VARCHAR(255))
BEGIN
INSERT INTO Category (CId,Category) VALUES (CId,Category);
END