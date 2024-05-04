const apiUrl = process.env.VUE_APP_API_URL;

export async function fetchMeaning(word) {
    try {
        const reqMeaning = await fetch(`${apiUrl}/${word}`);
        const dataMeaning = await reqMeaning.json();

        return dataMeaning
    } catch (error) {
        error.message = "Não foi possível obter as informações da palavra."
        throw error;
    }
}

export async function fetchSyllables(word) {
    try {
        const reqSyllables = await fetch(`${apiUrl}/silabas/${word}`);
        const dataSyllables = await reqSyllables.json();

        return dataSyllables
    } catch (error) {
        error.message = "Não foi possível obter as informações da palavra."
        throw error;
    }
}

export async function fetchSynonyms(word) {
    try {
        const reqSynonyms = await fetch(`${apiUrl}/sinonimos/${word}`);
        const dataSynonyms = await reqSynonyms.json();

        return dataSynonyms
    } catch (error) {
        error.message = "Não foi possível obter as informações da palavra."
        throw error;
    }
}