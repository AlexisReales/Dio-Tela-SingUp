import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 500px;
`

export const Create = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700px;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleSingup = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700px;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleSingup = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400px;
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
    line-height: 2px;
`

export const AwarningAlert = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400px;
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
    line-height: 25px;
`

export const LoginText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700px;
    font-size: 14px;
    line-height: 19px;
    color: #00ff00;
`