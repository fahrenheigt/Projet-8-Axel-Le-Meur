export async function getLogements() {
    let response = await fetch('http://localhost:5173/logements.json');

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    return await response.json();
}  

export async function getLogement(id) {
    let response = await fetch('http://localhost:5173/logements.json');

    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    let data = await response.json();
    
    return data.filter(r => r.id === id)[0];
}

export default { getLogements, getLogement }
