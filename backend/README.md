# Informations Installation P6 :

Lancement du projet via la commande : "nodemon server"

Connexion à MongoDB via les variables contenues dans ".env"
Une sauce a été laissée en BDD pour faciliter vos tests sur un User différent du votre.

Lien gitHub : https://github.com/EdouardHrgt/piiquante

Branche Main : contient l'équivalent du projet fourni en livrable.
Branche Dev : contient une version de démonstration du cryptage des Email en base de donnée via le package "MaskData".

## Informations complémentaires :

le mot de passe pour la création d'un compte requiert : 1 majuscule, 1 minuscule, 1 chiffre et doit être compris entre 8 et 25 caractères.
voir "../models/password".

Le nombre de tentative de connexions sur les routes Login et SignUp a été limité à 3.
voir "../middleware/rate-limit".
