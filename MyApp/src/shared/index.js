import { store, state } from '../store';

export const Routes = {
    Home: '/',
    About: '/about',
    SignIn: '/signin',
    SignUp: '/signup',
    Profile: '/profile',
    Admin: '/admin',
    Forbidden: '/forbidden',
}

export function requiresAuth() {
    if (state.userSession == null) {
        this.$router.push(`${Routes.SignIn}?redirect=${encodeURIComponent(this.$route.path)}`);
        return false;
    }
    return true;
}

export function requiresRole(role) {
    if (!requiresAuth.call(this)) 
        return false;

    if (!state.userSession.roles || state.userSession.roles.indexOf(role) < 0) {
        this.$router.push(`${Routes.Forbidden}?role=${encodeURIComponent(role)}`);
        return false;
    }
    return true;
}

