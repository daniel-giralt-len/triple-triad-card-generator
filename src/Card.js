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

const StarsWrapper = styled.div`
    grid-area: rarity;
    display:flex;
`
const minStars = 1, maxStars = 5
const Stars = ({ n }) => (<StarsWrapper>
        {clamp(minStars,n,maxStars)}
    </StarsWrapper>)

const TypeWrapper = styled.div`
    grid-area: type;
    display:flex;
    justify-content: flex-end;
`
const Type = ({ type }) => (<TypeWrapper>
    {type}
</TypeWrapper>)

const NameWrapper = styled.div`
    grid-area: name;
    display:flex;
    align-items: flex-end;
`
const Name = ({ name }) => (<NameWrapper>
    {name}
</NameWrapper>)


const Wrapper = styled.div`
    width: 400px;
    height: 500px;
    padding: 0.5em;
    border: 1px solid black;
    display: grid;
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
        <Wrapper>
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