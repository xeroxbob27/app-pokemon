import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'


// estilo da pagina main
export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #bdeabb61;
`;


export const Form = styled.View`flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #07aa1a;
`;
export const Imput = styled.TextInput.attrs({ placeholderTextColor: '#999' })`
    flex: 1;
    height: 40px;
    width: 90%;
    background: #eee;
    padding: 0 15px;
    border-radius: 1px;
    border: 1px solid #07aa1a;
    `;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #07aa1a;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 16px;
    opacity: ${(props) => (props.loading ? 0.7 : 1)};`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`margin-top: 20px;`;


export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
    `
export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #0b8e04;
    `
export const Name = styled.Text`
    font-size: 14px;
    color: #013718;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
    `
export const Bio = styled.Text.attrs({ numberOfLines: 2, })`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    text-align: center;
    margin-top: 5px;
    `;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #2d5c46;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

// estilo da pagina user 

export const header = styled.View`
    padding: 30px;
    align-items: center;
    justify-content: center;
    background: #bdeabb61;
    `

export const AvatarUser = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #0b8e04;
    `

export const NameUser = styled.Text`
    font-size: 20px;
    color: #013718;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
    `

export const BioUser = styled.Text.attrs({ numberOfLines: 2, })`
    font-size: 15px;    
    line-height: 18px;
    color: #999;
    text-align: center;
    margin-top: 5px;
    `

export const Start = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;   
    `
export const Starred = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    `

export const OwnerAvatar = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: 21px;
    background: #0b8e04;
    `

export const Info = styled.View`
    flex: 1;
    margin-left: 10px;
    `
export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;    
    color: #333;
    font-weight: bold;
    `
export const Author = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 13px;    
    color: #999;
    `