const ENDPOINT = "http://10.0.2.2:3000/"

export const registerUser = async (username, email, password) => {
    const res = await fetch(ENDPOINT + "register",
        {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    return await res.json();
}

export const loginUser = async (username, password) => {
    const res = await fetch(ENDPOINT + "login",
        {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    return await res.json();
}

export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
        method: "DELETE",
    });
};

export const getTasks = async () => {
    const res = await fetch(API, {
        method: "GET",
    });

    return await res.json();
};

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    });
    return await res.json();
};

export const getTask = async (taskId) => {
    const res = await fetch(`${API}/${taskId}`);
    return await res.json();
};

export const updateTask = async (taskId, newTask) => {
    console.log(taskId, newTask)
    const res = await fetch(`${API}/${taskId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    });
    return res;
};