export const scrollToId = (id: string) => {
    console.log(id, "kkkkkk");

    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};