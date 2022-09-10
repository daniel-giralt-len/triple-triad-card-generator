import csvPath from './assets/cardList.csv'

const parseCsv = csv => {
    const [header, ...cardLines] = csv.split('\n')
    return cardLines
        .map(l=>l.split(','))
        .map(([name,type,up,down,right,left,rarity]) => ({name,type,up,down,right,left,rarity}))
}

const getCards = () => fetch(csvPath)
    .then(r=>r.text())
    .then(parseCsv)

export default getCards