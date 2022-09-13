let formula=document.getElementById("user-form");
const registered =() => {
    let values_local= localStorage.getItem("user-entries");
    if(values_local){
        values_local=JSON.parse(values_local);

    }else{
        values_local=[];
    }
    return values_local;
}

let register_values =registered();
const showform =() =>{
    const values_local=registered();
    const tableEntries=values_local.map((entry) => {
        
        const nameCell= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const row= `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries} </table>`;
    let det=document.getElementById("user-entries");
    det.innerHTML = table;
}
const saveform = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    register_values.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(register_values));
    showform();
}
formula.addEventListener("submit",saveform);
showform();



       
  function agevalidation()
  {   let elemt= document.getElementById("dob");
      const dob = document.getElementById("dob").value;
      let tab=new Date(dob);
      var M = tab.getMonth();
      var Dt=tab.getDate();
      var systemdate = new Date(); 
      
      var AGE=parseInt(systemdate.getFullYear()) - parseInt(tab.getFullYear());
      if (systemdate.getMonth() < M || (systemdate.getMonth() === M && systemdate.getDate() < Dt))
      {
          AGE--;
      }
      let DB= AGE>18 && AGE <55;
      if(DB===false)
      {
          elemt.setCustomValidity("Age entered is not valid and it should be between 18 and 55");
          elemt.reportValidity("");
      }
      else{
        elemt.setCustomValidity("");
      }
  }