import {defineAuth, secret} from '@aws-amplify/backend';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
    loginWith: {
        email: true,
        externalProviders: {
            google: {
                clientId: secret('GOOGLE_CLIENT_ID'),
                clientSecret: secret('GOOGLE_CLIENT_SECRET'),
                scopes: ['email'],
            },
            callbackUrls: [process.env.CALLBACK_URL!],
            logoutUrls: [process.env.REDIRECT_URL!],
        }
    },
    userAttributes: {
        preferredUsername: { required: false }
    },
});
