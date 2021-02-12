import styled from 'styled-components'


//  //  //  STYLED COMPONENTS   //  //  //

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    z-index: 10;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
`



//  //  //  COMPONENT   //  //  //

export default function PieceModal({ showPiece, setShowPiece}) {
    return (
        <>
            {showPiece ?
                <Container>
                    <h1>PieceModal</h1>
                </Container>
            : null}
        </>
    )
}