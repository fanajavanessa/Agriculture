cd "C:\Program Files\PostgreSQL\15\bin"

pg_ctl.exe start -D "C:\Program Files\PostgreSQL\15\data"

pg_ctl.exe status -D "C:\Program Files\PostgreSQL\15\data"

psql -U postgres

CREATE DATABASE Culture;

\l

\c Culture



CREATE TABLE Utilisateur (
    idUtilisateur SERIAL PRIMARY KEY,
    nomUtilisateur VARCHAR(50) UNIQUE,
    mdp VARCHAR(255),
    email VARCHAR(100) UNIQUE
);


INSERT INTO Utilisateur (nomUtilisateur, MotDePasse, email)
VALUES ('admin', 'admin', 'admin@gmail.com');

INSERT INTO Utilisateur (nomUtilisateur, MotDePasse, email)
VALUES ('vide', 'vide', 'vide@gmail.com');


INSERT INTO Utilisateur (nomUtilisateur, MotDePasse, email)
VALUES ('Enintsoa', 'Enintsoa', 'enintsoa@email.com'),
       ('Tiavina', 'Tiavina', 'tiavina@email.com'),
       ('Alice', 'Alice', 'alice@email.com');



CREATE TABLE Culture (
    idCulture SERIAL PRIMARY KEY,
    nomCulture VARCHAR(255) NOT NULL,
    Prix INT
);


INSERT INTO Culture (nomCulture, Prix)
VALUES ('Ble', 10000),
       ('Maïs', 8000),
       ('Tomates', 5000);


CREATE TABLE Parcelle (
    idParcelle SERIAL PRIMARY KEY,
    Proprietaire INT REFERENCES Utilisateur(idUtilisateur),
    IDCulture INT REFERENCES Cultures(idCulture),
    Localisation VARCHAR(255)
);


INSERT INTO Parcelle (Proprietaire,IDCulture, Localisation)
VALUES (1,1, 'Champ A'),
       (2,2, 'Champ B'),
       (3,3, 'Serre C');


CREATE TABLE Terrain (
    idTerrain SERIAL PRIMARY KEY,
    idParcelle INT,
    Photo VARCHAR(255),
    Description TEXT
);


INSERT INTO Terrain (Parcelles, Photo, Description)
VALUES (1,'photo.jpg', 'Terrain  1'),
       (2, 'photo2.jpg', 'Terrain 2'),
       (3,'photo3.jpg', 'Terrain 3');



CREATE TABLE Message (
    idMessage SERIAL PRIMARY KEY,
    idUtilisateur INT REFERENCES Utilisateur(idUtilisateur),
    Contenu TEXT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Message (idUtilisateur, Contenu)
VALUES 
    (1, 'Bonjour, je suis interesse par votre terrain. Pouvons-nous discuter des details ?'),
    (2, 'Bonjour, j''aimerais en savoir plus sur votre terrain.'),
    (3, 'Votre terrain semble interessant. Pourriez-vous me donner plus d''informations ?');




