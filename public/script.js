async function searchCharacter() {
    const characterName = document.getElementById('characterName').value;
    const characterInfoDiv = document.getElementById('characterInfo');
    characterInfoDiv.innerHTML = ''; 

    try {
      const response = await fetch(`http://localhost:3000/characters/${characterName}`);
      if (response.status === 404) {
        characterInfoDiv.innerHTML = `<p>Personaje no encontrado</p>`;
        return;
      }
  
      const character = await response.json();
      characterInfoDiv.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <p><strong>Nombre:</strong> ${character.name}</p>
        <p><strong>Estado:</strong> ${character.status}</p>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Genero:</strong> ${character.gender}</p>
        <p><strong>Origen:</strong> ${character.origin.name}</p>
      `;
    } catch (error) {
      characterInfoDiv.innerHTML = `<p>Error fetching character data</p>`;
    }
  }
  