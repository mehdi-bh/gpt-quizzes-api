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

const makeMultipleChoicesQuestionPrompt = (content, guidance, language, nEasy, nMedium, nHard, nbChoices) => {
    const prompt =
        "Génère moi des questions à choix multiples avec " + nbChoices + " choix sur base du contenu que je vais te donner. \n" +
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
        "        \"choices\" : [{\n" +
        "                \"choice\" : String containing a choice\n" +
        "        }],\n" +
        "        \"answer\" : Integer containing the id of the valid choice\n" +
        "}]";

    return prompt;
}

const makeMultipleAnswersQuestionPrompt = (content, guidance, language, nEasy, nMedium, nHard, nbChoices) => {
    const prompt =
        "Génère moi des questions à réponses multiples avec " + nbChoices + " choix sur base du contenu que je vais te donner. Tu dois faire en sorte qu'il y ait plusieurs choix valides.\n" +
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
        "        \"choices\" : [{\n" +
        "                \"choice\" : String containing a choice\n" +
        "        }],\n" +
        "        \"answers\" : [{\n" +
        "                \"answer\" : Integer containing the id of a valid choice\n" +
        "        }]" +
        "}]";

    return prompt;
}

module.exports = {
    makeOpenQuestionPrompt,
    makeMultipleChoicesQuestionPrompt,
    makeMultipleAnswersQuestionPrompt
}