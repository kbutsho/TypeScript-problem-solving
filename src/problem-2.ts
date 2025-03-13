type ApiResponse<T> = {
    response: "success" | "error",
    data?: T,
    message?: string
}

const fetchData = <T>(data: T | null): ApiResponse<T> => {
    if (!data) {
        return { response: "error", message: "no data found" }
    } else {
        return { response: "success", data: data, message: "data found" }
    }
}

console.log(fetchData<string>("Hello"))
console.log(fetchData<number>(2))
console.log(fetchData<object>({ name: "Kaushik", roll: 2 }))


