const isLoggedIn = () => {
    const jwt = localStorage.getItem('jwt');
    return jwt ? true : false;
}

export default isLoggedIn;