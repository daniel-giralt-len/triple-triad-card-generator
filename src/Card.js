import styled from 'styled-components'

const Wrapper = styled.div`
    width: 800px;
    height: 1000px;
    border: 1px solid black;
`

const Numbers = ({up,
    down,
    left,
    right,}) => (
        <div>
            <div>{up}</div>
            <div>{down}</div>
            <div>{left}</div>
            <div>{right}</div>
        </div>
    )

const Stars = ({n}) => n

const Type = ({type}) => (type)

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