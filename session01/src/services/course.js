function postCourse(course) {
    return fetch('http://localhost:8010/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    })
    .then(response => response.json());
}

export { postCourse }