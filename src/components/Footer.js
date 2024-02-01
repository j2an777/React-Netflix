import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100;
    
    @media (max-width: 769px) {
        padding: 20px 20px;
        padding-bottom : 30px;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width : 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
    color: gray;
    font-size: 17px
`;

const FooterLinkContent = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;

    @media (mamx-width: 768px) {
        margin-top: 26px;
    }
`;

const FooterLink = styled.a`
    color: gray;
    font-size: 13px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

const FooterDesContainer = styled.div`
    display : flex;
    justify-content: center;
    margin-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const FooterDesRights = styled.h2`
    color: gray;
    font-size: 14px;
    align-items: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>
                    넷플릭스 대한민국
                </FooterLinkTitle>
                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/412">넷플릭스 소개</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">고객 센터</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">미디어 센터</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">이용 약관</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">개인정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">회사정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">문의하기</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">법적 고지</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">투자 정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">입사 정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">속도 테스트</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">오직 넷플릭스에서</FooterLink>
                </FooterLinkContent>
                <FooterDesContainer>
                    <FooterDesRights>
                        &copy; Netflix Rights Reserved.
                    </FooterDesRights>
                </FooterDesContainer>
            </FooterLinkContainer>
        </FooterContent>
    </FooterContainer>
  )
}