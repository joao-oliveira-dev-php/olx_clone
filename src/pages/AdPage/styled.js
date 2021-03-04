import styled from 'styled-components';

export const PageArea = styled.div`
display: flex;
margin-top: 20px;
.box {
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
}
.boxPadding {
    padding: 10px;
}
.leftSide {
    flex: 1;
    margin-right: 20px;
    .box {
        display: flex;
    }
    .adImage {
        width: 320px;
        height: 320px;
        margin-right: 20px;
        .each-slide img {
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            height: 320px;
        }
    }
    
    .adInfo {
        padding: 0px 5px;
        .adName {
            margin-bottom: 20px;
            h2 {
                margin-top: 10px;
            }
        }
        .adDescription {
        }
    }
}
.rightSide {
    width: 250px;
    .price span {
        color: #00F;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }
    .contactSellerLink {
        background-color: #0000FF;
        color: #FFF;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 20px;
    }
    .createdBy strong {
        display: block;
    }
    .createdBy small {
        display: block;
        color: #999;
        margin-top: 10px;
    }
}
@media (max-width:600px) {
    & {
        flex-direction: column;
    }
    .leftSide {
        margin: 0;
        .box {
            width: 320px;
            flex-direction: column;
            margin: auto;
            .adInfo {
                padding: 10px;
                margin-top: 0;
                .adName h2 {
                    margin-top: 0;
                }
            }
        }
    }
    .rightSide {
        width: auto;
        margin-top: 20px;
        .box {
            width: 320px;
            margin: auto;
        }
        .contactSellerLink {
            width: 320px;
            margin: 15px auto;
        }
    }
}
`;