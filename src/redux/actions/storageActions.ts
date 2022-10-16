import jwt_decode from "jwt-decode";

export function getUserLocalStorageData() {
    const stored = localStorage.getItem("user");
    if (!stored) {
        return undefined;
    }
    return JSON.parse(stored);
}

export function setUserLocalStorageData(data: any) {
    localStorage.setItem(
        "user",
        JSON.stringify({
            data,
        })
    );
}

export function removeUserLocalStorageData() {
    localStorage.removeItem("user");
}

