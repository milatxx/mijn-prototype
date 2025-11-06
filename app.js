let currentUser = null;

// Functies om te slaan en te laden uit localStorage
const keyFor = (email) => `routine:${email.toLowerCase()}`;
const loadRoutine = (email) => JSON.parse(localStorage.getItem(keyFor(email))) || [];
const saveRoutine = (email, data) => localStorage.setItem(keyFor(email), JSON.stringify(data));

// Inloggen
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  if (!email) return alert("Vul je e-mail in om je persoonlijke routine te gebruiken.");
  currentUser = email.toLowerCase();
  document.getElementById("currentUser").textContent = `Ingelogd als: ${currentUser}`;
  renderRoutine();
});

// Product toevoegen
document.getElementById("addProduct").addEventListener("click", () => {
  if (!currentUser) return alert("Log eerst in.");
  const name = document.getElementById("productName").value.trim();
  const type = document.getElementById("productType").value.trim();
  const freq = document.getElementById("frequency").value.trim();
  const step = parseInt(document.getElementById("stepOrder").value);

  if (!name || !type || !freq || !step) return alert("Vul alle velden in.");
  
  const routine = loadRoutine(currentUser);
  routine.push({ name, type, frequency: freq, stepOrder: step });
  saveRoutine(currentUser, routine);

  document.getElementById("productName").value = "";
  document.getElementById("productType").value = "";
  document.getElementById("frequency").value = "";
  document.getElementById("stepOrder").value = "";

  renderRoutine();
});

// Routine tonen
function renderRoutine() {
  const container = document.getElementById("routine");
  container.innerHTML = "";

  if (!currentUser) {
    container.innerHTML = "<p>Log in om jouw routine te zien.</p>";
    return;
  }

  const routine = loadRoutine(currentUser).sort((a, b) => a.stepOrder - b.stepOrder);
  if (routine.length === 0) {
    container.innerHTML = "<p>Nog geen producten toegevoegd.</p>";
    return;
  }

  routine.forEach((p, i) => {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = `${p.stepOrder}. ${p.name} (${p.type}) — ${p.frequency}`;
    container.appendChild(item);
  });
}
