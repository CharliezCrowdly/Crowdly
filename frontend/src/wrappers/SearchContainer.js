import styled from "styled-components";

const Wrapper = styled.aside`

.search-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2%;
    border-radius: 20px;

    & > .searchbox{
        display: flex;
        column-gap: 1.5rem;
        height: 2.2rem;
        align-items: center;
        
        & > .searchbar{
            background-color: var(--blue-300);
            border-radius: 50px;
            display: flex;
            align-items: center;
            position: relative;
            width: 80%;
            height: 2.2rem;
            & > .search-icon{
                position: absolute;
                top: 30%;
                left:4%;
                color: var(--black-500);
            }
            &>.search-input{
                width: 100%;
                height: 100%;
                padding-left:10% ;
                outline: none;
                border: none;
                background-color: transparent;
            }

            & > .sort-by{
                width: 100%;
            }

        }

    }
}



`

export default Wrapper;