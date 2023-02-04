# Endpoint.sh Frontend

Frontend de l'API DocumentationApi disponible sur mon github : https://github.com/Nayzow/DocumentationApi
L'application web est réalisée avec Angular et le langage TypeScript. Elle comporte plusieurs pages affichant des articles écris par mes soins et des vidéos sur diverses technologies.

## Screenshots

![img.png](resources%2Fimages%2Fscreenshots%2Fimg.png)
![img_1.png](resources%2Fimages%2Fscreenshots%2Fimg_1.png)
![img_2.png](resources%2Fimages%2Fscreenshots%2Fimg_2.png)
![img_3.png](resources%2Fimages%2Fscreenshots%2Fimg_3.png)

## Routes de l'application

Les routes de l'application sont définies dans le fichier app-routing.module.ts. Les routes disponibles sont :

```css
{ path: '', component: HomeComponent },
{ path: 'articles', component: TechnologiesComponent },
{ path: 'articles/:technology', component: ArticlesComponent },
{ path: 'commands', component: TechnologiesComponent },
{ path: 'commands/:technology', component: CommandsComponent },
{ path: '**', component: HomeComponent },
```

## Installation classique

Assurez-vous d'avoir Node.js et npm installés sur votre ordinateur. Vous pouvez vérifier leur installation en ouvrant une invite de commande et en tapant node -v et npm -v.

1. Clonez le dépôt du projet en utilisant la commande 

```bash
git clone https://github.com/Nayzow/DocumentationFrontEnd
```

2. À la racine du projet, installez les dépendances en utilisant la commande 

```bash
npm install
```

3. Démarrez l'application en utilisant la commande 

```bash
npm start
```

L'application devrait maintenant être accessible à l'adresse http://localhost:4200/

## Installation avec Docker

Assurez-vous d'avoir Docker installé sur votre ordinateur.

1. Clonez le dépôt du projet en utilisant la commande 

```bash
git clone https://github.com/Nayzow/DocumentationFrontEnd
```

2. À la racine du projet, Construisez l'image Docker à partir du fichier Dockerfile en utilisant la commande 

```bash
docker build -t <image_name> .
```

3. Exécutez le conteneur en utilisant la commande 

```bash
docker run -p 4200:4200 <image_name>
```

L'application devrait maintenant être accessible à l'adresse http://localhost:4200/
