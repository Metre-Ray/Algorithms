const genIndex = () => {
    return (Math.random() * (2 ** 32)).toString(36) + Date.now();
}
