const topics = `
    Science: Mathematics
    Entertainment: Television
    Sports
    History
    Entertainment: Video Games
    General Knowledge
    Entertainment: Books
    Entertainment: Japanese Anime & Manga
    Science: Computers
    Geography
    Celebrities
    Entertainment: Board Games
    Science & Nature
    Japan
    Politics
    Entertainment: Music
    Entertainment: Comics
    Entertainment: Film
    Vehicles
`

const getTopics = () => {
    return topics.split("\n");
}

export default getTopics;