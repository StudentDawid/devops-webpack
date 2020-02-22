# devops-webpack

## HTML, ES6 i SASS

### 1. Przygotowanie
1. Sprawdz, czy masz zainstalowany Node.js na komputerze. Aby to zrobic, uzyj w konsoli/terminalu komendy:

    > node -v

    Jezeli zobaczysz blad lub "node: command not found", zainstaluj Node.js w wersji LTS ze strony https://nodejs.org/en/
2. Sprawdz czy masz zainstalowane Visual Studio Code. Jezeli nie, zainstaluj VSC ze strony https://code.visualstudio.com/
3. Sciagnij ten projekt jako ZIP i wypakuj lub sklonuj repozytorium za pomocą GITa.
4. Otworz Visual Studio Code i otworz w nim folder z projektem. Pamietaj, zbey otworzyc dobry folder. Przy rozpakowywaniu ZIP tworzy sie folder o nazwie "devops-webpack", a w nim kolejny folder o nazwie "devops-webpack". My musimy otworzyc ten drugi.
5. Jezeli jestes w dobrym meijscu i masz juz wszystko zainstalowane poprawnie, mozesz w konsoli/terminalu uruchomic komende:

    > npm install

    Zainstaluje ona wszystkie wymagane narzedzia.
6. Jezeli wszysytko sie poprawnie zainstalowalo, uruchom serwer developerski. Aby to zorbic, uzyj w konsoli/terminalu komendy:

    > npm run start

    Powinna ci sie otworzyc strona w przegladarce. Odswiez ja za pierwszym razem, pozniej juz nie bedzie potrzeby odswiezac.
    Jezeli nie otworzyla sie strona, przejdz do przegladarki i otworz strone http://localhost:8080
    W razie problemów z odswiezaniem, zatrzymaj serwer developerski i uruchom go ponownie. Aby zatrzymac serwer, przejdz do konsoli/terminala, i uzyj skrotu CTRL+C/CMD+C, a na pytanie o zamkniecie odpowiedz T/Y. 

### Zadania ES6

1. Przejrzyj obecne pliki JS w folderze src/js
2. Dodaj w HTML odpowiednie pola, przyciski i wygląd
3. Dodaj w JS całą logikę używająć ES6, nowe elementy należy tworzyć jako moduły i klasy (patrz src/js/todo.js)
4. Ostyluj swoją aplikację używająć SASS + BEM
5. Stwórz PR do tego repozytorium. W nazwie PR podaj napisa "devops" oraz swoje imie i nazwisko. Przykład "devops_dawid_kozak"

### Zadania SCSS

1. Ulepszenie headera
    1. Dodanie zmiennych
    2. Praca z zagniezdzeniami
    3. Praca z SASS i CSS
2. Stworzenie stopki podobnie jak headera
    1. Praca z BEM i jego nazewnictwem i podzialem
    2. Dodanie mixinów
3. Stworzenie głównego kontenera i elementu postu (Dalsza praca z SASS i BEM, poznanie )
    1. Praca z blokami
    2. Praca z nowymi plikami i importem
    3. Stworzenie bloku - główna kolumna z postami
    4. Stworzenie bloku - post
    5. Dokonczenie styli
4. Prezentacja gotowej strony
5. Mozliwosci rozbudowania
    1. Sekcja komentarzy dla posta
    2. Rozne wielkosci ekranu (RWD)
    3. Oddzielna strona dla posta
    4. Lewa i/lub prawe menu
    5. Rozbudowa posta o dodatkowe elementy

## Zrób jeden z podanych projektów korzystając z HTML, ES6 i SASS

1. ToDo - dodawanie, lista oraz usuwanie todo
2. Sekcja komentarzy - wyswietlanie, dodawanie i usuwanie komentarzy
3. Lista postów - wyswietlanie, dodawanie i usuwanie postów
4. Zarządzanie użytkownikami - dodawanie, usuwanie i edytowanie użytkowników
5. Chat - dodawanie i wyświetlanie wiadomości

## Materiały
- Strona z nowościami z ES6 - http://es6-features.org/#Constants
- Mój opis nowości - https://rwbit.pl/nowosci-w-es6/
- Oficjalna strona Babela - https://babeljs.io/
- Oficjalna dokumentacja Webpacka - https://webpack.js.org/guides/getting-started/
- Darmowe API do nauki - https://jsonplaceholder.typicode.com/
- Wykład BEM - https://drive.google.com/open?id=1xyUWTnGiJUm8ziLFL8Ppkz5y5nvUKdLA
- Wykład ES6+BABEL+CDT - https://drive.google.com/open?id=1_wswxQEkDvNtMlzRCERfuFo68e3pcqrW
- Wykład SASS - https://drive.google.com/open?id=1W8f98rlz0lXJCL1lmbxQElQRpiklXHFs
- Oficjalna strona SASS - https://sass-lang.com/guide
- SASS playground online - https://www.sassmeister.com/
- Opis BEM - http://getbem.com/