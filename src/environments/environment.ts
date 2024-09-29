// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: 'amplify',
  firebaseConfig: {
    apiKey: 'AIzaSyAIrRUP8z39yFhjsfnLsxwDhzxzAguzHvI',
    authDomain: 'vixon-angular.firebaseapp.com',
    databaseURL: '',
    projectId: 'vixon-angular',
    storageBucket: 'vixon-angular.appspot.com',
    messagingSenderId: '822277458131',
    appId: '1:822277458131:web:5ec3bee2543b96567aac26',
    measurementId: 'G-YPD27EXC6H'
  },
  awsmobile: {
    aws_project_region: "us-east-1",
    aws_appsync_graphqlEndpoint: "https://4lihoj4fmvd5nm3bn6xpxa3lye.appsync-api.us-east-1.amazonaws.com/graphql",
    aws_appsync_region: "us-east-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-yyftoqspynfczd6na3koh2dmeq",
    aws_cognito_identity_pool_id: "us-east-1:c487e424-c520-4a1c-904f-9d18703d3629",
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "us-east-1_l4kmhh2hb",
    aws_user_pools_web_client_id: "5jmgnejbklb36ob1n2j585mlpc",
    oauth: {},
    aws_cognito_username_attributes: [],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: [
        "EMAIL"
    ],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: [
        "SMS"
    ],
    aws_cognito_password_protection_settings: {
        passwordPolicyMinLength: 8,
        passwordPolicyCharacters: []
    },
    aws_cognito_verification_mechanisms: [
        "EMAIL"
    ]
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
