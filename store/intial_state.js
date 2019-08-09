// 어플리케이션의 전역변수 역할 //
const state = {

    entities: {

        account: {
            status: {},

            credentials: {},
            IsLoggedIn: false,
            Token: '',
        },

    },

    request: {
        /*
               각각의 도메인에 대한 statemachine 객체
               not_started => action 이 없을 경우
               in_progress => action 이 진행중인 경우
                              in_progress 일 경우 로딩화면 표출

               done => 미정

         */

        user : {

            create : {
                status: 'not_started',
                error: null,
            },

            edit : {
                status: 'not_started',
                error: null,
            },

            delete : {
                status: 'not_started',
                error: null,
            },
        },

        item : {
            get : {
                status: 'not_started',
                error: null,
            },

            edit : {
                status: 'not_started',
                error: null,
            },

            delete : {
                status: 'not_started',
                error: null,
            },

        },
        diary: {

            create : {
                status: 'not_started',
                error: null,
            },

            edit : {
                status: 'not_started',
                error: null,
            },

            delete : {
                status: 'not_started',
                error: null,
            },

        },

    }

};

export default state;
