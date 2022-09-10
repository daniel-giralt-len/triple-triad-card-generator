import styled from 'styled-components'
import frameImage from './assets/frame.png'
import starImage from './assets/star.png'

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
    <NumbersWrapper>
        <div style={{ gridArea: 'up' }}>{clamp(minPower, up, maxPower)}</div>
        <div style={{ gridArea: 'down' }}>{clamp(minPower, down, maxPower)}</div>
        <div style={{ gridArea: 'left' }}>{clamp(minPower, left, maxPower)}</div>
        <div style={{ gridArea: 'right' }}>{clamp(minPower, right, maxPower)}</div>
    </NumbersWrapper>
)

const minStars = 1, maxStars = 5
const Stars = ({ n }) => clamp(minStars,n,maxStars)

const Type = ({ type }) => (type)


const Wrapper = styled.div`
    width: 800px;
    height: 1000px;
    border: 1px solid black;
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
            {name}
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