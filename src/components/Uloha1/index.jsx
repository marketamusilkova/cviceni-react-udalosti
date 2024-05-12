/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const zobrazAlert = () => {
    alert("Ahoj")
  }

  return <button onClick={zobrazAlert}>Ukaž bublinu</button>;
};
