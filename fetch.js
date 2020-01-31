const fetchPromise = fetch('https://swapi.co/api/people/');
fetchPromise.then(response => {
    return response.json();
}).then(people => {
    // accessing object people.results
    const names = people.results.map(person => person.name).join("\n");
    console.log(names);
    // inserting in html
    insert.innerHTML = listName(people);
});


/*function to insert in a list format */

function listName(people) {
    const names = people.results.map(person => `<li>${person.name}</li>`).join("\n");
    return `<ul>${names}</ul>`
}