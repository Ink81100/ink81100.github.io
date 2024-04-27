<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/global.css"><!--Feuille de style global-->
        <link rel="stylesheet" href="../css/form.css">
        <link rel="shortcut icon" href="/facicon.ico" type="image/x-icon">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <title>Vous avez fait le bon choix</title>
    </head>
    <body>
        <!--En tête-->
        <header>
            <!--Barre de navigation-->
            <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-custom">
                <a class="navbar-brand" href="#">
                    <img  id="logo" src="../img/nav/COTL_Logo_Red.png" alt="COTL_Logo_Red">
                </a>
                <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="../img/nav/crown.gif" alt="crown" id="crown">
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">

                        <!--bouton de Réservation-->
                        <li class="nav-item">
                            <div class="buttonText">
                                <a class="nav-link" href="form.html">
                                    <span>Inscription</span>
                                    <img class="buttonOut" src="../img/nav/button.png" alt="Bouton de reservation" id="buttonOut" loading="eager">
                                    <img class="buttonOver" src="../img/nav/button-over.png" alt="Bouton de reservaation" id="buttonOver" loading="eager">
                                </a>
                            </div>
                        </li>

                        <!--Accueil-->
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">
                                Accueil
                            </a>
                        </li>

                        <!--Description-->
                        <li class="nav-item">
                            <a class="nav-link" href="description.html">
                                Description
                            </a>
                        </li>

                        <!--Visite-->
                        <li class="nav-item">
                            <a class="nav-link" href="vistite.html">
                                Visite
                            </a>
                        </li>

                        <!--Menu-->
                        <li class="nav-item">
                            <a class="nav-link" href="menu.html">
                                Menu
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
        <!--Contenu-->
        <main>
            <video playsinline autoplay muted loop>
                <source src="/videos/bgForm.mp4" type="video/webm">
            </video>

            <form id="myform" action="../pages/confirm.html" method="post">
                <ul>
                    <li>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname" id="firstname" required="required">
                    </li>
                    <li>
                        <label for="name">Nom</label>
                        <input type="text" name="name" id="name" required="required">
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required="required">
                    </li>
                        <label for="followerForm">Apparence</label>
                        <select name="followerForm" id="">
                            <?php
                                $dossierImages = '../img/follower'; // Remplacez par le chemin de votre dossier d'images
                                $fichiers = glob($dossierImages . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
                                foreach($fichiers as $fichier) {
                                    $nomFichier = basename($fichier);
                                    echo '<option value="' . $nomFichier . '" style="background-image:url('$dossierImages+"/"+$fichier');">' . $nomFichier . '</option>';
                                }
                            ?>
                        </select>
                    <li>
                        <div class="buttonText submit">
                            <a class="nav-link">
                                <span>Inscription</span>
                                <img class="buttonOut" src="../img/nav/button.png" alt="Bouton de reservation" id="buttonOut" loading="eager">
                                <img class="buttonOver" src="../img/nav/button-over.png" alt="Bouton de reservaation" id="buttonOver" loading="eager">
                            </a>
                        </div>
                    </li>
                </ul>
            </form>
        </main>

        <!--Pied de page-->
        <footer>
            <div class="transition top"></div>
            <cite>
                Cult of the Lamb apartient à <a href="https://massivemonster.co/">Massive monster</a> et à <a href="https://www.devolverdigital.com/">Devolver digital</a> 
            </cite>
        </footer>

        <!--script-->
        <script src="../script/formSubmit.js"></script>
        <script src="../script/buttonText.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>