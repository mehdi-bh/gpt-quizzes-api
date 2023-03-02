const makeOpenQuestionPrompt = (content, guidance, language, nEasy, nMedium, nHard) => {
    const prompt =
        "Génère moi des questions ouvertes sur base du contenu que je vais te donner. \n" +
        "'Content' : " + content + "\n" +
        "'Guidance' : " + guidance +"\n" +
        "'OutputLanguage' : " + language + "\n" +
        "\n" +
        "Nombre de questions à générer par difficulté.\n" +
        "'Easy' : " + nEasy + "\n" +
        "'Medium' : " + nMedium + "\n" +
        "'Hard' : " + nHard + "\n" +
        "\n" +
        "Le format désiré est un JSON valide avec les questions dans un tableau comme l'exemple ci-dessous. N'écris rien d'autre que ce tableau de questions et assure toi que le JSON soit valide.\n" +
        "[{\n" +
        "        \"title\" : String,\n" +
        "        \"difficulty\" : \"Easy\" or \"Medium\" or \"Hard\",\n" +
        "        \"answer\" : String with a concise valid answer\n" +
        "}]";

    return prompt;
}

module.exports = {
    makeOpenQuestionPrompt
}