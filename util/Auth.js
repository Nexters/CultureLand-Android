import {EXPIRED_AT, FACEBOOK, GOOGLE, OAUH_SOCIAL_SERVICE, SERVICE_ACCESS_TOKEN, SOCIAL_ACCESS_TOKEN} from "./index";
import {FACE_BOOK_APP_ID, GOOGLE_ANDROID_ID, GOOGLE_ANDROID_STANDALONE_ID, GOOGLE_IOS_ID} from "../Constant";
import {Client} from "../api/Client";
import {Platform } from 'react-native';
import { GoogleSignIn } from 'expo';
import * as Google from "expo-google-app-auth/build/Google";
import * as Facebook from "expo-facebook/build/Facebook";
import * as SecureStore from "expo-secure-store/build/SecureStore";
import * as AppAuth from 'expo-app-auth';
var jwtDecode = require('jwt-decode');

class AuthManager {


    async registerSocialCredentials(socialService, socialToken){
        await SecureStore.setItemAsync(SOCIAL_ACCESS_TOKEN, socialToken);
        await SecureStore.setItemAsync(OAUH_SOCIAL_SERVICE,socialService);
        Client.setSocialService(socialService);
        Client.setSocialAccessToken(socialToken);
    }

    async registerServerCredentials(token){

        const decodedToken = jwtDecode(token);
        await SecureStore.setItemAsync(SERVICE_ACCESS_TOKEN, token);

        await SecureStore.setItemAsync(EXPIRED_AT, decodedToken.exp.toString());

        await SecureStore.getItemAsync(EXPIRED_AT).then((expiredDate) => {
            console.log("만료예정시간 " + expiredDate);
        });

        await SecureStore.getItemAsync(SERVICE_ACCESS_TOKEN).then((token) => {
            console.log("토큰 " + token);
            Client.setServerAccessToken(token);
        });
    }

    async deleteRegisterCredentials(){
        await  SecureStore.deleteItemAsync(SOCIAL_ACCESS_TOKEN);
        await  SecureStore.deleteItemAsync(SERVICE_ACCESS_TOKEN);
        await  SecureStore.deleteItemAsync(EXPIRED_AT);
    }

    async faceBookAuth() {


        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(FACE_BOOK_APP_ID, {
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
                const responseJSON = await response.json();
                console.log(`접속 ${JSON.stringify(responseJSON)}! token with ${token}`);
                try {

                    await Auth.registerSocialCredentials(FACEBOOK,token);

                } catch (e) {
                    console.log("SecureStore exception " + e);
                }

            } else {
                return;
            }
        } catch ({message}) {
            console.log("")
            return;
        }


        try {
            const response = await Client.signInOrUp(FACEBOOK);

            if(response.error){
                this.setState({error : response.error});
                return;
            }
            await Auth.registerServerCredentials.bind(this,response.message.token);
            this.props.navigation.navigate('App');

        } catch (e) {
            // TODO 토스트메세지 오류알림
            console.log("익셉션발생 : " + e);
        }

    }

    errorRenderer(){
        if(this.state.error){
            this.refs.toast.show(this.state.error, 1000, () => {
    // something you want to do at close
    this.setState({error : null});
});
}
}

async googleAuth() {
        try {
            const result = await Google.logInAsync({
                clientId : Platform.OS==='android'?GOOGLE_ANDROID_ID:GOOGLE_IOS_ID,
                //androidStandaloneAppClientId: GOOGLE_ANDROID_ID,
                androidClientId: GOOGLE_ANDROID_ID,
                iosClientId: GOOGLE_IOS_ID,
                scopes: ['profile', 'email'],
                redirectUrl: `${AppAuth.OAuthRedirect}:/oauth2redirect/google` // this is the LINE
            });
            if (result.type === 'success') {
                console.log("구글로그인 : "+JSON.stringify(result));

                /*
                let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                    headers: { Authorization: `Bearer ${result.accessToken}` },
                });
                */

                await Auth.registerSocialCredentials(GOOGLE,result.accessToken);
                const response = await Client.signInOrUp(GOOGLE);
                await Auth.registerServerCredentials.bind(this,response.message.token);
                this.props.navigation.navigate('App');

            } else {
                this.setState({ error : result.type });

            }
        } catch (e) {
            this.setState({error : JSON.stringify(e)});

        }finally {
            return;
        }
    }

    async googleRefresh(){


    }


}


export const Auth = new AuthManager();

