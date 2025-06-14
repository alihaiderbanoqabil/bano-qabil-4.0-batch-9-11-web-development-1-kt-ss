console.log('Asynchronous code starts');


const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com')
        console.log(response, 'response');
        const users = await response.json();
        console.log(users, 'users');
    } catch (error) {
        console.log('Error fetching users:', error);

    }

    //  const response = await fetch('https://jsonplaceholder.typicode.com')
    //     console.log(response, 'response');
    //     const users = await response.json();
    //     console.log(users, 'users');

    console.log('Asynchronous code ends');


}

fetchUsers();