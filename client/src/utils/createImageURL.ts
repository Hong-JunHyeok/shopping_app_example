const createImageURL = (endPoint: string) => {
    if (endPoint.startsWith('http')) return endPoint;
    return 'http://localhost:3090/' + endPoint;
}

export default createImageURL;
