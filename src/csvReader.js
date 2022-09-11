import csvPath from './data/cardList.csv'

const parseCsv = csv => {
    const [header, ...cardLines] = csv.split('\n')
    return cardLines
        .map(l=>l.split(','))
        .map(([name,type,up,down,right,left,rarity]) => ({
            name,
            type,
            up: parseInt(up),
            down: parseInt(down),
            right: parseInt(right),
            left: parseInt(left),
            rarity: parseInt(rarity),
        }))
        .sort((a,b) => a.name.localeCompare(b.name))
}

const getCards = () => fetch(csvPath)
    .then(r=>r.text())
    .then(parseCsv)

export default getCards