import styled from 'styled-components';

export const Item = styled.div`
    a {
        display:block;
        border:1px solid #fff;
        margin:10px;
        text-decoration:none;
        padding:10px;
        border-radius:5px;
        color:#000;
        background-color:#fff;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color:#EEE;
            border:1px solid #ccc;
        }
        
        .itemImage img {
            width:100%;
            border-radius:5px;
        }

        .itemName {
            font-weight:bold;
        }
    }
`;