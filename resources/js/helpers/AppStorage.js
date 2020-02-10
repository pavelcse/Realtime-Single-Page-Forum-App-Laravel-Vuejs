class AppStorage
{
    soreToken(token)
    {
        localStorage.setItem('token', token)
    }

    soreUser(user)
    {
        localStorage.setItem('user', user)
    }

    store(user, token)
    {
        this.soreToken(token);
        this.soreUser(user);
    }

    clear()
    {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken()
    {
        return localStorage.getItem('token');
    }

    getUser()
    {
        return localStorage.getItem('user');
    }
}

export default AppStorage = new AppStorage();
