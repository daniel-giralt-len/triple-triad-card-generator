import styled from 'styled-components'
import frameImage from './assets/frame.png'
import starImage from './assets/star.png'

const NumbersSuperWrapper = styled.div`
    grid-area: numbers;
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;
`
const NumbersWrapper = styled.div`
    font-size: 3em;

    display: grid;
    grid-template-columns: repeat(3, 1em);
    grid-template-rows: 0.4em 0.4em 1em;
    grid-template-areas:
        ".      up      ."
        "left   .       right"
        ".      down    .";
    width: 3em;
    text-align: center;
`

const clamp = (min, num, max) => Math.min(Math.max(num, min), max);

const minPower = 1, maxPower = 9
const Numbers = ({ up,
    down,
    left,
    right, }) => (
    <NumbersSuperWrapper>
        <NumbersWrapper>
            <div style={{ gridArea: 'up' }}>{clamp(minPower, up, maxPower)}</div>
            <div style={{ gridArea: 'down' }}>{clamp(minPower, down, maxPower)}</div>
            <div style={{ gridArea: 'left' }}>{clamp(minPower, left, maxPower)}</div>
            <div style={{ gridArea: 'right' }}>{clamp(minPower, right, maxPower)}</div>
        </NumbersWrapper>
    </NumbersSuperWrapper>
)

const starSize = '2.5em'
const StarImage = styled.img`
    width: ${starSize};
    object-fit: contain;
`
const Star = () => (
    <StarImage src={starImage} />
)

const genericStarGridStyle = `
    display: grid;
    grid-template-rows: ${starSize} ${starSize};
`
const BaseStarGrid = styled.div`
    ${genericStarGridStyle}
    grid-template-areas:
        ".      .      .";
`
const FourStarGrid = styled.div`
    ${genericStarGridStyle}
    grid-template-areas:
        ".      ."
        ".      .";
`
const FiveStarGrid = styled.div`
    ${genericStarGridStyle}
    grid-template-areas:
        ".      .      ."
        ".      .      ."
        ".      .      ."
`

const renderStars = n => {
    if(n === 1){
        return (<BaseStarGrid><Star /></BaseStarGrid>)
    }
    if(n === 2){
        return (<BaseStarGrid><Star /><Star /></BaseStarGrid>)
    }
    if(n === 3){
        return (<BaseStarGrid><Star /><Star /><Star /></BaseStarGrid>)
    }
    if(n === 4){
        return (<FourStarGrid><Star /><Star /><Star /><Star /></FourStarGrid>)
    }
    if(n === 5){
        return (<FiveStarGrid><Star /><Star /><Star /><Star /><Star /></FiveStarGrid>)
    }
}

const StarsWrapper = styled.div`
    grid-area: rarity;
    display:flex;
`
const minStars = 1, maxStars = 5
const Stars = ({ n }) => (<StarsWrapper>
        {renderStars(clamp(minStars,n,maxStars))}
    </StarsWrapper>)

const TypeWrapper = styled.div`
    grid-area: type;
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
`
const TypeImage = styled.img`
    width: 5.5em;
    object-fit: contain;
    box-shadow: 0 0 0.5em #474747, 0 0 0.5em #474747;
    background: #474747C0;
    border-radius: 300px;
    padding: 3px;
`

const Type = ({ type }) => (<TypeWrapper>
    <TypeImage src={`./data/types/${type}.png`} />
</TypeWrapper>)

const NameWrapper = styled.div`
    grid-area: name;
    display:flex;
    align-items: flex-end;
    font-size: 1.75em;
`
const Name = ({ name }) => (<NameWrapper>
    {name}
</NameWrapper>)

const Wrapper = styled.div`
    width: 400px;
    height: 500px;
    margin-bottom: 1em;
    margin-right: 1em;
    padding: 2.5em 2em;
    background: url(${frameImage}), url(./data/avatars/${({name})=>name.replace(/ /ig, '_')}.png);
    background-size: cover;
    display: inline-grid;
    column-gap: 0.25em;
    grid-template-areas:
        "rarity .      type   "
        ".      .      .      "
        "name   .      numbers";
`

const Card = ({
    name,
    type,
    up,
    down,
    left,
    right,
    rarity
}) => {
    return (
        <Wrapper name={name}>
            <Name name={name} />
            <Type type={type} />
            <Numbers
                up={up}
                down={down}
                left={left}
                right={right}
            />
            <Stars n={rarity} />
        </Wrapper>
        
    )
}

export default Card;