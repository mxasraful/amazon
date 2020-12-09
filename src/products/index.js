import laptop from "./laptop";
import mobile from "./mobile";
import monitor from "./monitor";

const productz = [...laptop , ...mobile , ...monitor];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(productz);

export default productz;