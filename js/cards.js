//fetching data from the json file
const fetching = () => {
  fetch("../datas/cardDetails.json")
    .then((res) => res.json())
    .then((datas) => {
      datas.map((data) => {
        info_cards(data);
      });
    });
};
fetching();

//creating the html elements and setting the cards values
const info_cards = (info) => {
  console.log(info);
  //creating html elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("h5");
  let email = document.createElement("h5");
  let btn = document.createElement("button");

  //now adding bootstrap class to the created elements
  card.setAttribute("class", "card col-sm-4 bg-primary m-3");
  card.setAttribute("style", "object-fit:contain;");
  img.setAttribute("class", "rounded-circle mx-auto");
  img.setAttribute("style", "height:80px; width:90px");
  img.setAttribute("src", info.imgUrl);
  btn.setAttribute("value", info.id);
  // //now adding to the DOM
  cards.append(card);
  card.append(img);
  card.append(name);
  card.append(email);
  name.innerHTML = "Name: " + info.name;
  email.innerHTML = "Email: " + info.email;

  card.append(btn);
  btn.innerHTML = "View Resume";

  //adding function to the button
  btn.onclick = (e) => {
    var id = e.target.value;
    resume_check(id);
  };
};

//after clicking the button go again and fetch data and check for the correct target value
function resume_check(index) {
  fetch("../datas/cardDetails.json")
    .then((res) => res.json())
    .then((datas) => {
      datas.map((data) => {
        if (data.id == index) {
          resume(data);
        }
        return;
      });
    });
}

//resume visualization
function resume(data) {
  const { name, email, imgUrl, phone, address, hobbies } = data;
  console.log(data);
  let info_div = document.createElement("div");
  let basic = document.createElement("div");
  let img = document.createElement("img");
  let info = document.createElement("div");
  let nam = document.createElement("h5");
  let mail = document.createElement("h5");
  let no = document.createElement("h5");
  let addr = document.createElement("h5");

  info_div.setAttribute("class", "row");
  basic.setAttribute("class", "col-md-4 bg-info m-1 ml-4 container");
  basic.setAttribute("style", "object-fit: content");
  img.setAttribute("class", "rounded-circle mx-auto");
  img.setAttribute("style", "height:80px; width:90px");
  img.setAttribute("src", imgUrl);
  info.setAttribute("class", "container-fluid");
  info.setAttribute("style", "object-fit:contain;");
  cards.remove();
  content.append(info_div);
  info_div.append(basic);
  basic.append(img);
  basic.append(info);
  info.append(nam);
  info.append(mail);
  info.append(no);
  info.append(addr);
  nam.innerHTML = `Name: ${name}`;
  mail.innerHTML = "Email: " + email;
  no.innerHTML = `Phone: ${phone}`;
  addr.innerHTML = `Address: ${address}`;

  //--------------------------------------------------------------------------------------------
}
