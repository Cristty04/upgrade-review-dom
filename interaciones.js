//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de
// los paises.
const lista = document.createElement('ul');
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

document.body.append(lista);

for(let i= 0;i<countries1.length; i++){
    const li = document.createElement('li');
    li.textContent = countries1[i];
    lista.appendChild(li);
}

console.log(lista);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const borrar = document.querySelector('.fn-remove-me');
for (let i=0; i<borrar.length; i++) {
    console.log(i);
     borrar[i].remove();
}
console.log(borrar)

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el 
//atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let contenedor = document.querySelector('[data-function="printHere"]');
const lista1 = document.createElement('ul');

document.body.append(lista1);

for(let i= 0;i<cars.length; i++){
    const li = document.createElement('li');
    li.textContent = cars[i];
    lista.appendChild(li);
}

console.log(contenedor);

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento
// img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]

const paises$$ = document.createElement("ul");
document.body.appendChild(paises$$);
for (const countrie of countries) {
	const li$$ = document.createElement("li");
	li$$.innerHTML= `<div>
		<h4>${countrie.title}</h4>
		<img src =" ${countrie.imgUrl}" alt="${countrie.title}" >
		</img>
		</div>`
		paises$$.appendChild(li$$);

}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const button$$ = document.createElement("button");
button$$.innerText="elimina el ultimo"


button$$.addEventListener("click", function(){
    const lis$$ = document.body.querySelectorAll("li");
    lis$$[lis$$.length-1].remove();
})
document.body.appendChild(button$$);

