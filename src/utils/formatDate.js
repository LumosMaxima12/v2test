export default function (timestamp) {
    console.log(timestamp)
    const date = new Date(+timestamp)
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}